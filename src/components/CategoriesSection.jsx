import React, { useState } from "react";
import { categoriesData } from "../data/categories";

const CategoriesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll
    ? categoriesData
    : categoriesData.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700">
            Shop by Farming Needs
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xl">
            Everything required for modern and traditional agriculture
          </p>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-green-600 font-semibold hover:underline"
        >
          {showAll ? "Show Less ←" : "View All Categories →"}
        </button>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          place-items-center
        "
      >
        {visibleCategories.map((cat) => (
          <div
            key={cat.id}
            className="
              w-full max-w-md
              bg-white rounded-2xl border
              overflow-hidden
              transition-all duration-300
              hover:shadow-2xl hover:-translate-y-2
            "
          >
            {/* Image */}
            <div className="h-56 sm:h-64 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {cat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
