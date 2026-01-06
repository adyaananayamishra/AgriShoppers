import React from "react";
import { FaCheckCircle, FaCertificate, FaIndustry, FaClipboardCheck } from "react-icons/fa";

const QualityAssurance = () => {
  const points = [
    { icon: <FaCertificate />, text: "Certified and tested agricultural inputs" },
    { icon: <FaIndustry />, text: "Verified suppliers and manufacturers" },
    { icon: <FaCheckCircle />, text: "Multiple quality checks before dispatch" },
    { icon: <FaClipboardCheck />, text: "Compliance with government regulations" },
  ];

  return (
    <section className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-extrabold text-green-800 mb-6 relative inline-block">
        Quality Assurance
        <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></span>
      </h2>

      <p className="text-gray-700 mb-8 leading-relaxed text-lg">
        We follow strict quality control processes to ensure that every product
        meets industry standards before reaching farmers.
      </p>

      <ul className="space-y-5">
        {points.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 bg-green-50 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
          >
            <div className="p-3 rounded-full bg-green-100 text-green-600 flex items-center justify-center w-12 h-12">
              {item.icon}
            </div>
            <span className="text-gray-800 text-lg font-medium">{item.text}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-600 mt-8 text-md">
        Our goal is to build long-term trust by delivering consistent quality.
      </p>
    </section>
  );
};

export default QualityAssurance;
