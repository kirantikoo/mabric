GitHub Deploy (React App)

Step 1:
git init
git add.
git commit -m "first commit"
git branch -M main
git remote add origin <Repo-link>
git push -u origin main

Step 2:
npm i gh-pages

step 2:

(package.json)
"homepage" : "https://<username>.github.io/<Repo-name>",

(Script)
"predeploy" : "npm run build",
"deploy" : "gh-pages -d dist",

(vite.config.js)
base: '/Repo/',

(index.html)

<script type="module" src="./src/main.jsx"></script>

Step 4:
npm run build
npm run deploy
