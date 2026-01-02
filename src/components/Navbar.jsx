import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon, UserCircleIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu
  const [searchOpen, setSearchOpen] = useState(false); // Mobile search

  return (
    <>
      {/* Navbar */}
     <nav className="bg-gradient-to-r from-slate-700 via-blue-800 to-slate-700 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            AgriShopper
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 font-medium">Home</Link>
            <Link to="/products" className="text-white hover:text-gray-200 font-medium">Products</Link>

            {/* Desktop Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 py-2 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Right Icons (visible on all screens) */}
          <div className="flex items-center space-x-4">
            {/* Wishlist - Desktop only */}
            <Link to="/wishlist" className="hidden md:flex relative text-white hover:text-gray-200">
              <HeartIcon className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

          {/* User */}
            <Link to="/login" className="text-white hover:text-gray-200">
              <UserCircleIcon className="w-6 h-6" />
            </Link>

              {/* Cart */}
            <Link to="/cart" className="relative text-white hover:text-gray-200">
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Buttons */}
            {/* Mobile Menu Icon */}
              <button
                onClick={() => setOpen(true)}
                className="text-white text-2xl"
              >
                ☰
              </button>
            
          </div>
        </div>
      </nav>

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-4 pr-12 rounded-md text-black"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Right Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-800 z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-300">
          <span className="text-slate-100 font-semibold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-slate-300 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-5 py-6 gap-4 text-slate-100">
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-slate-300">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/categories" className="hover:text-slate-300">
            Category
          </Link>
          <Link onClick={() => setOpen(false)} to="/about" className="hover:text-slate-300">
            About Us
          </Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="hover:text-slate-300">
            Contact
          </Link>
          <Link onClick={() => setOpen(false)} to="/login" className="hover:text-slate-300">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
