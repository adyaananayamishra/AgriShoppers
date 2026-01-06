import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { popularPicks as popularItems } from "../data/popularPicks";

const PopularPicks = () => {
  const navigate = useNavigate();

  // Randomize once
  const shuffledItems = useMemo(() => {
    return [...popularItems].sort(() => 0.5 - Math.random());
  }, []);

  const visibleItems = shuffledItems.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER + SHOW MORE */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800">
              Popular Picks
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Best-selling and farmer-recommended products
            </p>
          </div>

          <button
            onClick={() => navigate("/popular-picks")}
            className="hidden sm:inline-block px-6 py-2 rounded-full
                       border border-green-700 text-green-700 font-semibold
                       hover:bg-green-700 hover:text-white transition"
          >
            Show More →
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border
                         transition-all duration-300
                         md:hover:shadow-xl md:hover:-translate-y-1"
            >
              <span className="absolute mt-3 ml-3 bg-green-700 text-white
                               text-xs px-3 py-1 rounded-full">
                {item.badge}
              </span>

              <img
                src={item.image}
                alt={item.name}
                className="h-44 w-full object-cover rounded-t-2xl
                           md:group-hover:scale-105 transition"
              />

              <div className="p-4">
                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-green-700 font-bold text-lg">
                  {item.price}
                </p>

                <button className="mt-3 w-full py-2 rounded-lg
                                   bg-green-700 text-white
                                   hover:bg-green-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularPicks;
