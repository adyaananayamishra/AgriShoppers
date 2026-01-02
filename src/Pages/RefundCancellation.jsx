import React from "react";

const RefundCancellation = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          Refund & Cancellation Policy
        </h1>

        <p className="text-gray-600 mb-6">
          We aim to ensure customer satisfaction. Please read our refund and
          cancellation policy carefully.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          1. Order Cancellation
        </h2>
        <p className="text-gray-600 mb-6">
          Orders can be cancelled before they are shipped. Once dispatched,
          cancellation may not be possible.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          2. Refund Eligibility
        </h2>
        <p className="text-gray-600 mb-6">
          Refunds are applicable for damaged, defective, or incorrect products
          received. Customers must raise a request within 48 hours of delivery.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          3. Refund Process
        </h2>
        <p className="text-gray-600 mb-6">
          Approved refunds will be processed within 5-7 business days through
          the original payment method.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          4. Non-Refundable Items
        </h2>
        <p className="text-gray-600 mb-6">
          Certain items such as perishable agricultural products may not be
          eligible for refunds.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">
          5. Contact Support
        </h2>
        <p className="text-gray-600">
          For any refund or cancellation queries, contact us at
          <span className="font-medium"> support@agrishoppers.com</span>.
        </p>

      </div>
    </section>
  );
};

export default RefundCancellation;
