import React from "react";

const popularItems = [
  {
    name: "Plant Growth Activator",
    price: "₹899",
    badge: "Popular",
    image: "/images/popular 1.jpg",
  },
  {
    name: "Heavy Duty Sprayer",
    price: "₹1,699",
    badge: "Top Rated",
    image: "/images/popular 2.jpg",
  },
  {
    name: "Eco Pest Solution",
    price: "₹549",
    badge: "New Arrival",
    image: "/images/popular 3.jpg",
  },
];

const PopularPicks = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800">
            Popular Picks
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Best-selling and farmer-recommended products for better yield
          </p>
        </div>

        {/* Products Grid */}
        <div
          className="
            grid grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 lg:gap-8
          "
        >
          {popularItems.map((item, index) => (
            <div
              key={index}
              className="
                group relative bg-white rounded-2xl border
                transition-all duration-300
                md:hover:shadow-2xl md:hover:-translate-y-2
              "
            >
              {/* Badge */}
              <span className="
                absolute top-4 left-4 z-10
                bg-green-700 text-white text-xs
                px-3 py-1 rounded-full
              ">
                {item.badge}
              </span>

              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-44 sm:h-48 lg:h-52 w-full object-cover
                    md:group-hover:scale-110 transition duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>

                <p className="text-green-700 font-bold text-lg">
                  {item.price}
                </p>

                <button
                  className="
                    mt-4 w-full py-2.5 rounded-lg
                    bg-green-700 text-white font-semibold
                    hover:bg-green-800 transition
                  "
                >
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
