import { products } from "../data/products";

const ProductDetails = () => {
  // frontend-only: show first product
  const product = products[0];

  return (
    <section className="py-14 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
          <p className="text-green-700 text-xl font-bold mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="mb-2">
            <strong>Brand:</strong> {product.brand}
          </p>

          <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
