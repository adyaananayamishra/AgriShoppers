import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const BottomNav = () => {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center text-xs ${
      isActive ? "text-green-600" : "text-gray-500"
    }`;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around py-2">

        <NavLink to="/" className={linkClass}>
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/orders" className={linkClass}>
          <ShoppingBagIcon className="w-6 h-6" />
          <span>My Purchases</span>
        </NavLink>

        <NavLink to="/assist" className={linkClass}>
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
          <span>Agri Assist</span>
        </NavLink>

        <NavLink to="/blogs" className={linkClass}>
          <DocumentTextIcon className="w-6 h-6" />
          <span>Articles</span>
        </NavLink>

      </div>
    </div>
  );
};

export default BottomNav;
