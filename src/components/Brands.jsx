import React, { useState, useMemo } from "react";
import { brandsData } from "../data/brandsData";
import { Link } from "react-router-dom";


const Brands = () => {
  const [viewAll, setViewAll] = useState(false);

  const randomSixBrands = useMemo(() => {
    return [...brandsData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
  }, []);

  const visibleBrands = viewAll ? brandsData : randomSixBrands;

  return (
    <section className="bg-[#eef6f2] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Trusted Brands
          </h2>

          <Link
              to="/brands"
              className="text-green-700 font-semibold hover:underline"
            >
              View All →
            </Link>

        </div>

        {/* Brands Grid */}
        <div
          className="
            grid grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            gap-4 sm:gap-6
          "
        >
          {visibleBrands.map((brand) => (
            <div
              key={brand.id}
              className="
                bg-white rounded-2xl
                p-4 sm:p-6
                flex items-center justify-center
                transition
                hover:shadow-lg
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 sm:h-14 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
