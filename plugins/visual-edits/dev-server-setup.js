// dev-server-setup.js
// Dev server middleware configuration for visual editing
const fs = require("fs");
const path = require("path");
const express = require("express");
const { execSync } = require("child_process");

// 🔍 Read Supervisor code-server password from conf.d
function getCodeServerPassword() {
  try {
    const conf = fs.readFileSync(
      "/etc/supervisor/conf.d/supervisord_code_server.conf",
      "utf8",
    );

    // Match environment=PASSWORD="value"
    const match = conf.match(/PASSWORD="([^"]+)"/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

const SUP_PASS = getCodeServerPassword();

// Dev server setup function
function setupDevServer(config) {
  config.setupMiddlewares = (middlewares, devServer) => {
    if (!devServer) throw new Error("webpack-dev-server not defined");
    devServer.app.use(express.json());

    // CORS origin validation
    const isAllowedOrigin = (origin) => {
      if (!origin) return false;

      // Allow localhost and 127.0.0.1 on any port
      if (origin.match(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/)) {
        return true;
      }

      // Allow all appspot.com subdomains (for App Engine)
      if (origin.match(/^https:\/\/([a-zA-Z0-9-]+\.)*appspot\.com$/)) {
        return true;
      }

      return false;
    };

    // ✅ Health check (no auth)
    devServer.app.get("/ping", (req, res) => {
      res.json({ status: "ok", time: new Date().toISOString() });
    });

    // ✅ Protected file editing endpoint with AST processing
    devServer.app.post("/edit-file", (req, res) => {
      // Validate and set CORS headers
      const origin = req.get("Origin");
      if (origin && isAllowedOrigin(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Headers", "Content-Type, x-api-key");
      }

      // 🔑 Check header against Supervisor password
      const key = req.get("x-api-key");
      if (!SUP_PASS || key !== SUP_PASS) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const { changes } = req.body;

      if (!changes || !Array.isArray(changes) || changes.length === 0) {
        return res.status(400).json({ error: "No changes provided" });
      }

      try {
        const edits = [];
        const rejectedChanges = [];
        const changesByFile = {};

        changes.forEach((change) => {
          if (!changesByFile[change.fileName]) {
            changesByFile[change.fileName] = [];
          }
          changesByFile[change.fileName].push(change);
        });

        Object.entries(changesByFile).forEach(([fileName, fileChanges]) => {
          const frontendRoot = path.resolve(__dirname, '../..');

          const getRelativePath = (absolutePath) => {
            const rel = path.relative(frontendRoot, absolutePath);
            return '/' + rel;
          };

          const findFileRecursive = (dir, filename) => {
            try {
              const files = fs.readdirSync(dir, { withFileTypes: true });

              for (const file of files) {
                const fullPath = path.join(dir, file.name);

                if (file.isDirectory()) {
                  if (
                    file.name === "node_modules" ||
                    file.name === "public" ||
                    file.name === ".git" ||
                    file.name === "build" ||
                    file.name === "dist" ||
                    file.name === "coverage"
                  ) {
                    continue;
                  }
                  const found = findFileRecursive(fullPath, filename);
                  if (found) return found;
                } else if (file.isFile()) {
                  const fileBaseName = file.name.replace(/\.(js|jsx|ts|tsx)$/, "");
                  if (fileBaseName === filename) {
                    return fullPath;
                  }
                }
              }
            } catch {}
            return null;
          };

          let targetFile = findFileRecursive(frontendRoot, fileName);

          if (!targetFile) {
            targetFile = path.resolve(
              frontendRoot,
              "src/components",
              `${fileName}.js`,
            );
          }

          const normalizedTarget = path.normalize(targetFile);
          const isInFrontend =
            normalizedTarget.startsWith(frontendRoot) &&
            !normalizedTarget.includes("..");
          const isNodeModules = normalizedTarget.includes("node_modules");
          const isPublic =
            normalizedTarget.includes("/public/") ||
            normalizedTarget.endsWith("/public");

          if (!isInFrontend || isNodeModules || isPublic) {
            throw new Error(`Forbidden path for file ${fileName}`);
          }

          const parser = require("@babel/parser");
          const traverse = require("@babel/traverse").default;
          const generate = require("@babel/generator").default;
          const t = require("@babel/types");

          if (!fs.existsSync(targetFile)) {
            throw new Error(`File not found: ${targetFile}`);
          }

          const currentContent = fs.readFileSync(targetFile, "utf8");

          const ast = parser.parse(currentContent, {
            sourceType: "module",
            plugins: ["jsx", "typescript"],
          });

          const parseJsxChildren = (content) => {
            if (content === undefined) return null;
            try {
              const wrapperExpression = parser.parseExpression(
                `(<gjs-wrapper>${content}</gjs-wrapper>)`,
                { sourceType: "module", plugins: ["jsx", "typescript"] },
              );
              const sanitizeMetaAttributes = (node) => {
                if (t.isJSXElement(node)) {
                  node.openingElement.attributes = node.openingElement.attributes.filter(
                    (attr) => !(t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name) && attr.name.name.startsWith("x-"))
                  );
                  node.children.forEach(sanitizeMetaAttributes);
                } else if (t.isJSXFragment(node)) {
                  node.children.forEach(sanitizeMetaAttributes);
                }
              };
              if (t.isJSXElement(wrapperExpression)) {
                const innerChildren = wrapperExpression.children || [];
                innerChildren.forEach(sanitizeMetaAttributes);
                return innerChildren;
              }
            } catch {}
            return [t.jsxText(content)];
          };

          const changesByLine = {};
          fileChanges.forEach((change) => {
            if (!changesByLine[change.lineNumber]) changesByLine[change.lineNumber] = [];
            changesByLine[change.lineNumber].push(change);
          });

          traverse(ast, {
            JSXOpeningElement: (path) => {
              const lineNumber = path.node.loc?.start.line;
              if (!lineNumber) return;

              const changesAtLine = changesByLine[lineNumber];
              if (!changesAtLine || changesAtLine.length === 0) return;

              const elementName = path.node.name.name;

              changesAtLine.forEach((change) => {
                if (elementName !== change.component) return;

                if (change.type === "className" && change.className !== undefined) {
                  let classAttr = path.node.attributes.find(
                    (attr) => t.isJSXAttribute(attr) && attr.name.name === "className",
                  );
                  const oldClassName = classAttr?.value?.value || "";
                  if (classAttr) {
                    classAttr.value = t.stringLiteral(change.className);
                  } else {
                    const newClassAttr = t.jsxAttribute(
                      t.jsxIdentifier("className"),
                      t.stringLiteral(change.className),
                    );
                    path.node.attributes.push(newClassAttr);
                  }
                  edits.push({
                    file: getRelativePath(targetFile),
                    lineNumber,
                    element: elementName,
                    type: "className",
                    oldData: oldClassName,
                    newData: change.className,
                  });
                } else if (change.type === "textContent" && change.textContent !== undefined) {
                  const parentElementPath = path.parentPath;
                  if (parentElementPath && parentElementPath.isJSXElement()) {
                    const jsxElementNode = parentElementPath.node;
                    const children = jsxElementNode.children || [];
                    const firstTextNode = children.find((c) => t.isJSXText(c) && c.value.trim().length > 0);
                    const fallbackWhitespaceNode = children.find((c) => t.isJSXText(c) && c.value.trim().length === 0);
                    const newContent = change.textContent;
                    let oldContent = "";

                    const preserveWhitespace = (originalValue, updatedCore) => {
                      const leading = (originalValue.match(/^\s*/) || [""])[0];
                      const trailing = (originalValue.match(/\s*$/) || [""])[0];
                      return `${leading}${updatedCore}${trailing}`;
                    };

                    if (firstTextNode) firstTextNode.value = preserveWhitespace(firstTextNode.value, newContent);
                    else if (fallbackWhitespaceNode) fallbackWhitespaceNode.value = preserveWhitespace(fallbackWhitespaceNode.value, newContent);
                    else jsxElementNode.children = [t.jsxText(newContent), ...children];

                    edits.push({
                      file: getRelativePath(targetFile),
                      lineNumber,
                      element: elementName,
                      type: "textContent",
                      oldData: oldContent,
                      newData: newContent,
                    });
                  }
                } else if (change.type === "content" && change.content !== undefined) {
                  const parentElementPath = path.parentPath;
                  if (parentElementPath && parentElementPath.isJSXElement()) {
                    const oldChildren = parentElementPath.node.children || [];
                    const oldContentAST = { type: "JSXFragment", children: oldChildren };
                    const oldContent = generate(oldContentAST, {}, "").code.replace(/^<>/, "").replace(/<\/>$/, "").trim();
                    const newChildren = parseJsxChildren(change.content);
                    if (newChildren) parentElementPath.node.children = newChildren;
                    edits.push({
                      file: getRelativePath(targetFile),
                      lineNumber,
                      element: elementName,
                      type: "content",
                      oldData: oldContent,
                      newData: change.content,
                    });
                  }
                } else {
                  rejectedChanges.push({ change, reason: `Invalid type: ${change.type}`, file: getRelativePath(targetFile), lineNumber, element: elementName });
                }
              });

              delete changesByLine[lineNumber];
            },
          });

          const { code } = generate(ast, { retainLines: true, retainFunctionParens: true, comments: true });
          const backupFile = targetFile + ".backup";
          if (fs.existsSync(targetFile)) fs.writeFileSync(backupFile, fs.readFileSync(targetFile, "utf8"), "utf8");
          fs.writeFileSync(targetFile, code, "utf8");

          const timestamp = Date.now();
          try {
            execSync(`git -c user.name="visual-edit" -c user.email="support@example.com" add "${targetFile}"`);
            execSync(`git -c user.name="visual-edit" -c user.email="support@example.com" commit -m "visual_edit_${timestamp}"`);
          } catch {}

          if (fs.existsSync(backupFile)) fs.unlinkSync(backupFile);
        });

        const response = { status: "ok", edits };
        if (rejectedChanges.length > 0) response.rejectedChanges = rejectedChanges;
        res.json(response);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    devServer.app.options("/edit-file", (req, res) => {
      const origin = req.get("Origin");
      if (origin && isAllowedOrigin(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type, x-api-key");
        res.sendStatus(200);
      } else {
        res.sendStatus(403);
      }
    });

    return middlewares;
  };
  return config;
}

module.exports = setupDevServer;
