import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
      
      {/* Brand Section */}
      <div className="space-y-4 flex flex-col items-center md:items-start">
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img 
            src={`${process.env.PUBLIC_URL}/images/logo.png`} 
            alt="Mabric Logo" 
            className="h-20 w-15 rounded-lg object-cover"
          />
          <div>
            <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              MABRIC
            </span>
            <p className="text-xs text-amber-500 tracking-widest">DESIGN. BUILD. INSPIRE</p>
          </div>
        </div>

        <p className="text-sm text-gray-400 max-w-xs">
          Creating beautiful, functional spaces that transform houses into dream homes.
        </p>

        <div className="flex space-x-4 justify-center md:justify-start">
          <a href="#" className="hover:text-amber-500 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="text-center md:text-left">
        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
          <li><Link to="/ideas" className="hover:text-amber-500 transition-colors">Design Ideas</Link></li>
          <li><Link to="/projects" className="hover:text-amber-500 transition-colors">Our Projects</Link></li>
          <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div className="text-center md:text-left">
        <h3 className="text-white font-semibold mb-4">Our Services</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-amber-500 transition-colors cursor-pointer">Complete Home Interiors</li>
          <li className="hover:text-amber-500 transition-colors cursor-pointer">Modular Kitchen</li>
          <li className="hover:text-amber-500 transition-colors cursor-pointer">Renovation Services</li>
          <li className="hover:text-amber-500 transition-colors cursor-pointer">Designer Consultation</li>
          <li className="hover:text-amber-500 transition-colors cursor-pointer">Custom Furniture</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="text-center md:text-left">
        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start justify-center md:justify-start space-x-3">
            <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0" />
            <span>sy. no.245/2, 1st Cross Rd,<br />
              near by Purvi Symphony, <br />
              Apartment, Varthur, Bengaluru, <br />
              Karnataka 560087, India</span>
          </li>
          <li className="flex items-center justify-center md:justify-start space-x-3">
            <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
            <span>+91 96067 38877<br />
            +91 96067 48877</span>
          </li>
          <li className="flex items-center justify-center md:justify-start space-x-3">
            <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
            <span>hello@mabric.in <br/>
            support@mabric.in</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
        <p className="text-sm text-gray-400">© {currentYear} Mabric.in. All rights reserved.</p>
        <div className="flex space-x-6 text-sm justify-center">
          <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>

  </div>
</footer>
  );
};

export default Footer;