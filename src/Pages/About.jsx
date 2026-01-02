import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            About Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Empowering Indian farmers with quality agricultural products,
            modern farming knowledge, and trusted services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://source.unsplash.com/600x400/?agriculture,farmer"
            alt="Agriculture"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              Our mission is to support farmers by providing high-quality seeds,
              fertilizers, and farming tools at affordable prices. We believe
              in sustainable farming and long-term farmer growth.
            </p>

            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>100% genuine agriculture products</li>
              <li>Trusted by farmers across India</li>
              <li>Fast delivery to rural & urban areas</li>
              <li>Expert farming guidance</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
