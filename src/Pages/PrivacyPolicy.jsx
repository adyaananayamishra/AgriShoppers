import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-6">
          At AgriShoppers, we respect your privacy and are committed to protecting
          your personal information.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-6">
          We may collect personal details such as name, phone number, email,
          delivery address, and payment information when you use our services.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          2. Use of Information
        </h2>
        <p className="text-gray-600 mb-6">
          Your information is used to process orders, improve services, provide
          customer support, and communicate important updates.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          3. Data Security
        </h2>
        <p className="text-gray-600 mb-6">
          We implement reasonable security measures to protect your data from
          unauthorized access or disclosure.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          4. Third-Party Services
        </h2>
        <p className="text-gray-600 mb-6">
          We may share necessary information with trusted third-party services
          such as payment gateways and delivery partners only to fulfill orders.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          5. Consent
        </h2>
        <p className="text-gray-600">
          By using our website, you consent to our privacy policy.
        </p>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
