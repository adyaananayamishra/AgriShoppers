import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800">
            About Agri Shoppers
          </h1>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
            Agri Shoppers, a trusted brand of <strong>Agrigenesis Terrabloom Tech Private Limited</strong>, is dedicated to empowering Indian farmers with high-quality agricultural products, modern farming solutions, and expert guidance for sustainable growth.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://source.unsplash.com/600x400/?agriculture,farm"
            alt="Agriculture"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
              At <strong>Agri Shoppers</strong>, our mission is to support farmers by providing high-quality seeds, fertilizers, and farming tools at competitive prices. We strive to promote sustainable farming practices and ensure long-term growth for the agricultural community.
            </p>

            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              Why Choose Agri Shoppers?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>100% genuine and certified agricultural products</li>
              <li>Trusted by farmers across India</li>
              <li>Fast and reliable delivery to rural and urban areas</li>
              <li>Expert guidance on modern farming techniques</li>
              <li>Commitment to sustainability and farmer empowerment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
