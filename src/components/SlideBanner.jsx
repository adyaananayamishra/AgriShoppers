import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    title: "Smart Farming Starts Here",
    subtitle: "Modern solutions for better yield and profit",
    cta: true,
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    title: "Balanced Nutrition for Healthy Crops",
    subtitle: "Right nutrients at every growth stage",
    cta: false,
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    title: "Protect Crops, Increase Productivity",
    subtitle: "Trusted crop protection solutions",
    cta: true,
  },
];


const SlideBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-8">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative min-w-full h-80 md:h-105">
            
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h2 className="text-2xl md:text-4xl font-bold max-w-xl">
                  {slide.title}
                </h2>
                <p className="mt-3 text-sm md:text-lg max-w-lg text-gray-200">
                  {slide.subtitle}
                </p>

                {/* CTA buttons only on selected slides */}
                {slide.cta && (
                  <div className="mt-5 flex gap-4">
                    <Link
                      to="/products"
                      className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md text-white transition"
                    >
                      Shop Now
                    </Link>

                    <Link
                      to="/categories"
                      className="border border-white px-6 py-2 rounded-md text-white hover:bg-white hover:text-green-700 transition"
                    >
                      Explore Crops
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideBanner;
