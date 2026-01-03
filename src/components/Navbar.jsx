import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  HeartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
    <nav className="bg-gradient-to-r from-slate-700 via-blue-800 to-slate-700 backdrop-blur-md">

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:-ml-8">
            <div className="bg-white p-1 rounded-full shadow-md">
              <img
                src="/images/logo.png"
                alt="AgriShoppers Logo"
                className="h-10 w-10 object-cover rounded-full"
              />
            </div>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white font-medium hover:text-gray-200">
              Home
            </Link>
            <Link to="/products" className="text-white font-medium hover:text-gray-200">
              Products
            </Link>
            <Link to="/about" className="text-white font-medium hover:text-gray-200">
              About Us
            </Link>
            <Link to="/contact" className="text-white font-medium hover:text-gray-200">
              Contact
            </Link>
            
            {/* Desktop Search */}
            <div className="relative bg-amber-50 rounded-lg">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 py-2 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist (Desktop) */}
            <Link to="/wishlist" className="hidden md:flex relative text-white">
              <HeartIcon className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User */}
            <Link to="/login" className="text-white">
              <UserCircleIcon className="w-6 h-6" />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative text-white">
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* 🔍 Mobile Search (Below Navbar) */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative bg-amber-50 rounded-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2.5 pl-4 pr-10 rounded-full bg-white shadow-sm focus:outline-none"
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>  
        </div>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Mobile Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-800 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-600">
          <span className="text-white font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-white text-2xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col px-5 py-6 gap-4 text-white">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/categories" onClick={() => setOpen(false)}>Categories</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
