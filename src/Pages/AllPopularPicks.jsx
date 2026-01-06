import React from "react";
import { popularPicks } from "../data/popularPicks";

const AllPopularPicks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-green-800 mb-10">
          All Popular Picks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPicks.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="h-44 w-full object-cover rounded-t-2xl"
              />

              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-green-700 font-bold">{item.price}</p>

                <button className="mt-3 w-full py-2 rounded-lg
                                   bg-green-700 text-white">
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

export default AllPopularPicks;
