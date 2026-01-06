import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
       
        <div className="flex flex-col items-start">
           {/* Logo */}
                <Link to="/" className="text-2xl font-extrabold text-green-700 mb-3">
                  <div className=" p-1 rounded-full">
                      <img
                        src="/images/logo.png"
                        alt="AgriShoppers Logo"
                        className="max-h-10 w-auto object-contain rounded-full scale-210"
                      />
                  </div>
                </Link>

          <p className="text-sm font-medium text-gray-300 max-w-xs mt-3">
            Premium products with best quality and fast delivery.
          </p>
        </div>


        {/* Links */}
        <div>
          <h3 className="text-slate-100 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-slate-100">Home</Link></li>
            <li><Link to="/about" className="hover:text-slate-100">About Us</Link></li>
          
          
            <li><Link to="/farmer-resources" className="hover:text-white cursor-pointer">Farmer Resources</Link></li>
            <li><Link to="/quality-assurance" className="hover:text-white cursor-pointer">Quality Assurance</Link></li>
            <li><Link to="/policies-guidelines" className="hover:text-white cursor-pointer">Policies & Guidelines</Link></li>
            <li><Link to="/career" className="hover:text-white cursor-pointer">Join Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-white cursor-pointer">Help Center</Link></li>
            <li><Link to="/track" className="hover:text-white cursor-pointer">Track Order</Link></li>
            
            {/* <li><Link to="/sell-produce" className="text-orange-500 hover:text-orange-400 cursor-pointer">Sell Your Produce</Link></li>
            <li><Link to="/bulk-partnerships" className="text-orange-500 hover:text-orange-400 cursor-pointer">Bulk Partnership Enquiries</Link></li> */}

          
          </ul>
        </div>

        
        {/*Support */}
        <div>
          <h3 className="text-slate-100 font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-slate-100 cursor-pointer">FAQ</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-slate-100 cursor-pointer">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-slate-100 cursor-pointer">Terms & Conditions</Link></li>
            <li><Link to="/delivery-logistics" className="hover:text-white cursor-pointer">Delivery & Logistics</Link></li>
            <li><Link to="/navigation" className="hover:text-slate-100 cursor-pointer">Quick Navigation</Link></li>
            <li><Link to="/refund-cancel" className="hover:text-slate-100 cursor-pointer">Refund & Cancellation</Link></li>
            <li><Link to="/site-map" className="hover:text-white cursor-pointer">Site Map</Link></li>
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
