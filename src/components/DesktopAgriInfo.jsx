import React from "react";

const DesktopAgriInfo = () => {
  return (
    // ❌ Mobile hide | ✅ Tablet & Desktop show
    <div className="hidden sm:block bg-[#16233e] text-slate-300 pt-14 pb-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 space-y-14">

        {/* ================= TRENDING ================= */}
        <section>
          <h2 className="text-green-400 text-2xl font-semibold mb-6">
            Trending Products on AgriShoppers
          </h2>

          <div className="space-y-4 text-sm leading-7">
            <p><span className="text-amber-400 font-semibold">CROP PROTECTION:</span> Herbicides | Insecticides | Fungicides | Viricides | Nematicides</p>
            <p><span className="text-amber-400 font-semibold">PLANT NUTRITION:</span> Fertilizers | Micronutrients | Bio Fertilizers | Growth Promoters</p>
            <p><span className="text-amber-400 font-semibold">SEEDS:</span> Vegetable Seeds | Flower Seeds | Fruit Seeds | Hybrid Seeds</p>
            <p><span className="text-amber-400 font-semibold">FARM INPUTS:</span> Mulching Sheet | Drip Pipes | Sprayers | Weed Control</p>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}
        <section>
          <h2 className="text-green-400 text-2xl font-semibold mb-6">
            Explore All Product Categories
          </h2>

          <div className="space-y-4 text-sm leading-7">
            <p><span className="text-amber-400 font-semibold">VEGETABLE SEEDS:</span> Tomato | Chilli | Brinjal | Cabbage | Cauliflower | Onion</p>
            <p><span className="text-amber-400 font-semibold">FLOWER SEEDS:</span> Marigold | Rose | Chrysanthemum | Zinnia | Petunia</p>
            <p><span className="text-amber-400 font-semibold">FIELD CROPS:</span> Paddy | Wheat | Maize | Mustard | Cotton</p>
            <p><span className="text-amber-400 font-semibold">TOOLS & MACHINES:</span> Sprayers | Tillers | Harvesters | Hand Tools</p>
          </div>
        </section>

        {/* ================= KNOWLEDGE ================= */}
        <section>
          <h2 className="text-green-400 text-2xl font-semibold mb-6">
            Agri Learning & Farmer Support
          </h2>

          <div className="space-y-4 text-sm leading-7">
            <p><span className="text-amber-400 font-semibold">CROP GUIDES:</span> Pest Control | Disease Management | Crop Nutrition</p>
            <p><span className="text-amber-400 font-semibold">GOVT SCHEMES:</span> PM-Kisan | Subsidy Schemes | Equipment Support</p>
            <p><span className="text-amber-400 font-semibold">FARMING UPDATES:</span> Weather Alerts | Market Prices | New Techniques</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DesktopAgriInfo;
