import { brands } from "../data/brands";

const BrandPage = () => {
  return (
    <section className="py-14 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        All Brands
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white p-4 border rounded-xl flex items-center justify-center hover:shadow-lg transition"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandPage;
