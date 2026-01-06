import React from "react";
import { FaLeaf, FaSeedling, FaCloudSun, FaHandsHelping } from "react-icons/fa";

const FarmerResources = () => {
  const resources = [
    { icon: <FaSeedling />, text: "Crop advisory and seasonal farming guides" },
    { icon: <FaLeaf />, text: "Best practices for seed selection and soil health" },
    { icon: <FaCloudSun />, text: "Weather-based farming tips" },
    { icon: <FaHandsHelping />, text: "Expert-recommended fertilizer usage" },
  ];

  return (
    <section className="bg-green-50 p-8 rounded-xl shadow-lg max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-extrabold text-green-800 mb-6 relative inline-block">
        Farmer Resources
        <span className="absolute left-0 -bottom-1 w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></span>
      </h2>

      <p className="text-gray-700 mb-8 leading-relaxed text-lg">
        Our Farmer Resources section is designed to help farmers make informed
        decisions and improve productivity using trusted agricultural insights.
      </p>

      <ul className="space-y-5">
        {resources.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 rounded-full bg-green-100 text-green-600 flex items-center justify-center w-12 h-12">
              {item.icon}
            </div>
            <span className="text-gray-800 text-lg font-medium">{item.text}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-600 mt-8 text-md">
        These resources are curated by agricultural experts to support both
        small and large-scale farmers.
      </p>
    </section>
  );
};

export default FarmerResources;
