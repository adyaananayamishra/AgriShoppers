import React from "react";
import { FaUserShield, FaUndoAlt, FaShippingFast, FaBook } from "react-icons/fa";

const PoliciesAndGuidelines = () => {
  const policies = [
    { icon: <FaUserShield />, text: "Privacy and data protection policy" },
    { icon: <FaUndoAlt />, text: "Return, refund, and cancellation guidelines" },
    { icon: <FaShippingFast />, text: "Shipping and delivery policies" },
    { icon: <FaBook />, text: "User responsibilities and platform usage rules" },
  ];

  return (
    <section className="bg-green-50 p-8 rounded-xl shadow-lg max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-extrabold text-green-800 mb-6 relative inline-block">
        Policies & Guidelines
        <span className="absolute left-0 -bottom-1 w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></span>
      </h2>

      <p className="text-gray-700 mb-8 leading-relaxed text-lg">
        Our policies are designed to ensure transparency, fairness, and safety
        for all users.
      </p>

      <ul className="space-y-5">
        {policies.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
          >
            <div className="p-3 rounded-full bg-green-100 text-green-600 flex items-center justify-center w-12 h-12">
              {item.icon}
            </div>
            <span className="text-gray-800 text-lg font-medium">{item.text}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-600 mt-8 text-md">
        Please review these guidelines carefully to understand your rights and
        responsibilities.
      </p>
    </section>
  );
};

export default PoliciesAndGuidelines;
