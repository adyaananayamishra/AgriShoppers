import React from "react";
import { FaSitemap, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const pages = [
    { icon: <FaSitemap />, title: "Home", path: "/" },
    { icon: <FaFileAlt />, title: "Farmer Resources", path: "/farmer-resources" },
    { icon: <FaFileAlt />, title: "Quality Assurance", path: "/quality-assurance" },
    { icon: <FaFileAlt />, title: "Policies & Guidelines", path: "/policies" },
    { icon: <FaFileAlt />, title: "Careers", path: "/careers" },
    { icon: <FaFileAlt />, title: "Tracking", path: "/tracking" },
  ];

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-900 mb-6 relative inline-block">
          Sitemap
          <span className="absolute left-0 -bottom-1 w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></span>
        </h2>
        <p className="text-gray-700 mb-10 text-lg">
          Navigate through all the important pages of our platform easily.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {pages.map((page, index) => (
            <Link
              to={page.path}
              key={index}
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center text-xl">
                {page.icon}
              </div>
              <span className="text-gray-800 font-medium">{page.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
