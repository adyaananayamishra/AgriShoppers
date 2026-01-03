import React from "react";
import { brandsData } from "../data/brandsData";


const AllBrands = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Trusted Brand Partners
          </h1>
          <p className="text-gray-600 mt-2">
            We collaborate with India’s top agricultural brands
          </p>
        </div>

        {/* Brands Grid */}
        <div
          className="
            grid grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            gap-6
          "
        >
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              className="
                bg-gray-50 border rounded-xl
                p-6
                flex items-center justify-center
                hover:shadow-xl hover:-translate-y-1
                transition-all
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBrands;
