import React from "react";

const Terms = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to AgriShoppers. By accessing or using our website, you agree
          to comply with and be bound by the following terms and conditions.
          Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          1. Use of Website
        </h2>
        <p className="text-gray-600 mb-6">
          This website is intended to provide agricultural products, information,
          and services to farmers and agri professionals. You agree not to misuse
          the website for any unlawful activity.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          2. Product Information
        </h2>
        <p className="text-gray-600 mb-6">
          We strive to display accurate product descriptions, prices, and images.
          However, slight variations may occur. AgriShoppers does not guarantee
          complete accuracy at all times.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          3. Orders & Payments
        </h2>
        <p className="text-gray-600 mb-6">
          All orders placed are subject to availability and confirmation.
          Payments must be completed through approved payment methods only.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          4. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-6">
          AgriShoppers shall not be liable for any indirect or consequential
          losses arising from the use of our products or services.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          5. Changes to Terms
        </h2>
        <p className="text-gray-600">
          We reserve the right to update these terms at any time without prior
          notice. Continued use of the website implies acceptance of changes.
        </p>

      </div>
    </section>
  );
};

export default Terms;
