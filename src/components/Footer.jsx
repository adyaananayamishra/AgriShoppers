import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
       
        <div className="flex flex-col items-start">
          <img
            src="/images/logo.jpeg"
            alt="AgriShoppers Logo"
            className="h-14 w-auto mb-5 rounded-full object-cover"
          />
          <p className="text-sm text-gray-300 max-w-xs">
            Premium products with best quality and fast delivery.
          </p>
        </div>


        {/* Links */}
        <div>
          <h3 className="text-slate-100 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-slate-100">Home</Link></li>
            <li><Link to="/about" className="hover:text-slate-100">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-slate-100">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-slate-100">Contact</Link></li>
            <li><Link to="/career" className="hover:text-slate-100">Career</Link></li>
            <li><Link to="/media" className="hover:text-slate-100">Community & Updates</Link></li>
          
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-slate-100 font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-slate-100 cursor-pointer">FAQ</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-slate-100 cursor-pointer">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-slate-100 cursor-pointer">Terms & Conditions</Link></li>
            <li><Link to="/refund-cancel" className="hover:text-slate-100 cursor-pointer">Refund & Cancellation</Link></li>
            <li><Link to="/navigation" className="hover:text-slate-100 cursor-pointer">Quick Navigation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-slate-100 font-semibold mb-3">Contact</h3>
          <p className="text-sm text-slate-400">Email: info@agrishoppers.com</p>
          <p className="text-sm text-slate-400 mt-1">Phone: +91 1234567890</p>
        </div>

        {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
          </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 text-center py-4 text-sm text-slate-400">
         © 2025 AgriShopper | Developed by First Track Solution Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
