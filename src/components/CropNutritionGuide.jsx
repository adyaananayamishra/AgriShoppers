import React from "react";
import { useNavigate } from "react-router-dom";

const nutritionData = [
  {
    nutrient: "Nitrogen Support",
    purpose: "Healthy leaf development",
    bg: "bg-lime-100",
    slug: "nitrogen",
  },
  {
    nutrient: "Root Strength",
    purpose: "Improves flowering & roots",
    bg: "bg-sky-100",
    slug: "root",
  },
  {
    nutrient: "Yield Booster",
    purpose: "Enhances crop resistance",
    bg: "bg-amber-100",
    slug: "yield",
  },
  {
    nutrient: "Trace Elements",
    purpose: "Balances overall growth",
    bg: "bg-fuchsia-100",
    slug: "micro",
  },
];


const CropNutritionGuide = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Crop Nutrition Guide
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {nutritionData.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} p-6 rounded-xl text-center
                      transition hover:scale-105`}
          >
            <h3 className="font-bold mb-2">{item.nutrient}</h3>
            <p className="text-sm text-gray-700">{item.purpose}</p>

            <button
              onClick={() => navigate(`/nutrition/${item.slug}`)}
              className="mt-4 text-green-700 font-semibold hover:underline"
            >
              Explore →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CropNutritionGuide;