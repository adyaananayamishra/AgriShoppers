import React, { useState, useMemo } from "react";

const brandsData = [
  { id: 1, name: "UPL", logo: "/brands/upl.png" },
  { id: 2, name: "Bayer", logo: "/brands/bayer.png" },
  { id: 3, name: "Syngenta", logo: "/brands/syngenta.png" },
  { id: 4, name: "Tata Rallis", logo: "/brands/tata.png" },
  { id: 5, name: "IFFCO", logo: "/brands/iffco.png" },
  { id: 6, name: "Coromandel", logo: "/brands/coromandel.png" },
  { id: 7, name: "Mahindra", logo: "/brands/mahindra.png" },
  { id: 8, name: "PI Industries", logo: "/brands/pi.png" },
  { id: 9, name: "BASF", logo: "/brands/basf.png" },
  { id: 10, name: "Zuari", logo: "/brands/zuari.png" },
];

const Brands = () => {
  const [viewAll, setViewAll] = useState(false);

  // Pick 6 random brands only once
  const randomSixBrands = useMemo(() => {
    return [...brandsData].sort(() => 0.5 - Math.random()).slice(0, 6);
  }, []);

  const visibleBrands = viewAll ? brandsData : randomSixBrands;

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              Trusted Brands
            </h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Partnering with India’s leading agricultural companies
            </p>
          </div>

          {!viewAll && (
            <button
              onClick={() => setViewAll(true)}
              className="self-start sm:self-auto text-green-700 font-semibold hover:underline"
            >
              View All →
            </button>
          )}
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
                bg-gray-50 border rounded-xl
                p-4 sm:p-6
                flex items-center justify-center
                transition-all duration-300
                md:hover:shadow-xl md:hover:-translate-y-1
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="
                  h-12 sm:h-14 lg:h-16
                  object-contain grayscale
                  md:hover:grayscale-0 transition
                "
              />
            </div>
          ))}
        </div>

        {/* Show Less */}
        {viewAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setViewAll(false)}
              className="
                px-6 py-2 rounded-lg
                border border-green-700 text-green-700
                font-semibold
                hover:bg-green-700 hover:text-white
                transition
              "
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Brands;
