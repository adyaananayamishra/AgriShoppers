import React, { useState } from "react";
import { FaTruck, FaClock, FaShippingFast, FaHeadset } from "react-icons/fa";

const Tracking = () => {
  const [orderId, setOrderId] = useState("");

  const handleTrack = () => {
    if (orderId.trim() === "") {
      alert("Please enter your Order ID");
    } else {
      alert(`Tracking info for Order ID: ${orderId}`);
      // Here you can add real tracking logic or API call
    }
  };

  const features = [
    { icon: <FaTruck />, text: "Real-time shipment updates" },
    { icon: <FaClock />, text: "Estimated delivery timelines" },
    { icon: <FaShippingFast />, text: "Courier partner information" },
    { icon: <FaHeadset />, text: "Support for delayed or missing orders" },
  ];

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-green-900 mb-6 relative inline-block">
          Track Your Order
          <span className="absolute left-0 -bottom-1 w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></span>
        </h2>

        <p className="text-gray-700 mb-8 text-lg">
          Easily track your orders from dispatch to delivery using your Order ID.
        </p>

        {/* Search bar */}
        <div className="flex gap-3 mb-10">
          <input
            type="text"
            placeholder="Enter your Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 p-4 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent shadow-sm"
          />
          <button
            onClick={handleTrack}
            className="bg-green-600 text-white px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Track
          </button>
        </div>

        {/* Features / Benefits */}
        <ul className="grid gap-6 sm:grid-cols-2">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="p-4 bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <span className="text-gray-800 font-medium">{item.text}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 mt-10 text-md">
          Our tracking system ensures transparency and peace of mind.
        </p>
      </div>
    </section>
  );
};

export default Tracking;
