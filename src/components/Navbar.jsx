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
    <nav className="bg-gradient-to-r from-slate-300 via-blue-800 to-slate-700 backdrop-blur-md ">

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between ">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:-ml-6">
            <div className=" p-1 rounded-full">
              <img
                src="/images/logo.png"
                alt="AgriShoppers Logo"
                className="max-h-10 w-auto object-contain rounded-full scale-210"
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
            {/* <div className="relative bg-amber-50 rounded-lg">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 py-2 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div> */}
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
        {/* <div className="md:hidden px-4 pb-3">
          <div className="relative bg-amber-50 rounded-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2.5 pl-4 pr-10 rounded-full bg-white shadow-sm focus:outline-none"
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>  
        </div> */}
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
          <Link to="/brands" onClick={() => setOpen(false)}>Our Partner Brands</Link>
          <Link to="/seeds" onClick={() => setOpen(false)}>Quality Seeds</Link>
          <Link to="/crop-protection" onClick={() => setOpen(false)}>Plant Protection Solutions</Link>
          <Link to="/crop-nutrition" onClick={() => setOpen(false)}>Crop Nutrition Products</Link>
          <Link to="/equipment" onClick={() => setOpen(false)}>Farm Tools & Equipment</Link>
          <Link to="/animal-husbandry" onClick={() => setOpen(false)}>Livestock Care</Link>
          <Link to="/organic" onClick={() => setOpen(false)}>Organic Farming Range</Link>
          <Link to="/tapas" onClick={() => setOpen(false)}>TAPAS Innovations</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Farmer Support Services</Link>
          <Link to="/sell-with-us" onClick={() => setOpen(false)}>Become a Seller</Link>
          <Link to="/bulk-orders" onClick={() => setOpen(false)}>Wholesale & Bulk Purchases</Link>
          <Link to="/corporate" onClick={() => setOpen(false)}>Company Overview</Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ShoppingCartIcon,
//   HeartIcon,
//   UserCircleIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* ================= TOP NAVBAR ================= */}
//       <nav className="bg-gradient-to-r from-slate-700 via-blue-800 to-slate-700 border-b sticky top-0 z-50">

//         {/* ===== TOP ROW ===== */}
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

//           {/* Logo */}
//           <Link to="/" className="text-2xl font-extrabold text-green-700">
//             <span className="text-green-600">Agri</span>
//             <span className="text-green-500">Shoppers</span>
//           </Link>

//           {/* Desktop Search */}
//           <div className="hidden md:flex flex-1 mx-10 relative">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full py-2.5 pl-4 pr-12 rounded-md border
//                          focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <button className="absolute right-0 top-0 h-full px-4 bg-gray-100 rounded-r-md">
//               <MagnifyingGlassIcon className="w-5 h-5 text-black" />
//             </button>
//           </div>

//          {/* Right Icons */}
//           <div className="flex items-center space-x-4 text-white">
            
//             {/* Wishlist */}
//             <Link to="/wishlist" className="hidden md:flex items-center gap-1">
//               <HeartIcon className="w-5 h-5" />
//               <span className="text-sm">Wishlist</span>
//             </Link>

//             {/* User / Profile */}
//             <Link to="/login" className="flex items-center gap-1 relative">
//               <UserCircleIcon className="w-6 h-6 text-white" />
//               <span className="text-sm hidden md:block">Login</span>
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className="flex items-center gap-1 relative">
//               <ShoppingCartIcon className="w-5 h-5 text-white" />
//               <span className="text-sm hidden md:block">Cart</span>
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs
//                               w-5 h-5 rounded-full flex items-center justify-center">
//                 0
//               </span>
//             </Link>

//             {/* Mobile Menu */}
//             <button onClick={() => setOpen(true)} className="md:hidden text-2xl">
//               ☰
//             </button>
//           </div>

//         </div>

//         {/* ===== DESKTOP CATEGORY BAR  ===== */}
//         <div className="hidden md:block border-t border-white/20 bg-gray-200">
//           <div className="max-w-9xl mx-auto px-4">
//             <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-black py-3">

//             <Link to="/brands" onClick={() => setOpen(false)}>Our Brands</Link>
//             <Link to="/seeds" onClick={() => setOpen(false)}>Quality Seeds</Link>
//             <Link to="/crop-protection" onClick={() => setOpen(false)}>Plant Protection Solutions</Link>
//             <Link to="/crop-nutrition" onClick={() => setOpen(false)}>Crop Nutrition Products</Link>
//             <Link to="/equipment" onClick={() => setOpen(false)}>Farm Tools & Equipment</Link>
//             <Link to="/animal-husbandry" onClick={() => setOpen(false)}>Livestock Care</Link>
//             <Link to="/organic" onClick={() => setOpen(false)}>Organic Farming Range</Link>
//             <Link to="/tapas" onClick={() => setOpen(false)}>TAPAS Innovations</Link>
//             <Link to="/services" onClick={() => setOpen(false)}>Farmer Support Services</Link>
//             <Link to="/sell-with-us" onClick={() => setOpen(false)}>Become a Seller</Link>
//             <Link to="/bulk-orders" onClick={() => setOpen(false)}>Wholesale & Bulk Purchases</Link>           
//             <Link to="/corporate" onClick={() => setOpen(false)}>Company Overview</Link>

//             </ul>
//           </div>
//         </div>

//         {/* ===== MOBILE SEARCH ===== */}
//         <div className="md:hidden px-4 pb-3">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full py-2.5 pl-4 pr-10 rounded-full bg-gray-100
//                          focus:outline-none"
//             />
//             <MagnifyingGlassIcon
//               className="w-5 h-5 absolute right-4 top-1/2
//                          -translate-y-1/2 text-gray-500"
//             />
//           </div>
//         </div>
//       </nav>

//       {/* ================= MOBILE DRAWER ================= */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black/50 z-40"
//         />
//       )}

//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-slate-800 z-50
//         transform transition-transform duration-300
//         ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="flex items-center justify-between px-5 py-4 border-b border-slate-600">
//           <span className="text-white font-semibold">Menu</span>
//           <button onClick={() => setOpen(false)} className="text-white text-2xl">
//             ✕
//           </button>
//         </div>

//         <div className="flex flex-col px-5 py-6 gap-4 text-white">
//             <Link to="/brands" onClick={() => setOpen(false)}>Our Partner Brands</Link>
//             <Link to="/seeds" onClick={() => setOpen(false)}>Quality Seeds</Link>
//             <Link to="/crop-protection" onClick={() => setOpen(false)}>Plant Protection Solutions</Link>
//             <Link to="/crop-nutrition" onClick={() => setOpen(false)}>Crop Nutrition Products</Link>
//             <Link to="/equipment" onClick={() => setOpen(false)}>Farm Tools & Equipment</Link>
//             <Link to="/animal-husbandry" onClick={() => setOpen(false)}>Livestock Care</Link>
//             <Link to="/organic" onClick={() => setOpen(false)}>Organic Farming Range</Link>
//             <Link to="/tapas" onClick={() => setOpen(false)}>TAPAS Innovations</Link>
//             <Link to="/services" onClick={() => setOpen(false)}>Farmer Support Services</Link>
//             <Link to="/sell-with-us" onClick={() => setOpen(false)}>Become a Seller</Link>
//             <Link to="/bulk-orders" onClick={() => setOpen(false)}>Wholesale & Bulk Purchases</Link>           
//             <Link to="/corporate" onClick={() => setOpen(false)}>Company Overview</Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
