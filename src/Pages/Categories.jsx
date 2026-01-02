import React from "react";
import { categoriesData } from "../data/categories";

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-700 mb-8">
        All Farming Categories
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categoriesData.map((cat) => (
          <div
            key={cat.id}
            className="bg-white border rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {cat.description}
              </p>

              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                View Products
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
