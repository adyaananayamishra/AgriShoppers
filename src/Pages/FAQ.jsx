import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is AgriShoppers?",
    answer:
      "AgriShoppers is an online agriculture marketplace offering certified seeds, fertilizers, pesticides, and farming tools with fast delivery across India.",
  },
  {
    question: "Do you deliver to villages and rural areas?",
    answer:
      "Yes, we deliver to most rural and semi-urban areas. Availability depends on your pin code and courier partner coverage.",
  },
  {
    question: "Are AgriShoppers products genuine?",
    answer:
      "Absolutely. All products are sourced from authorized brands and verified sellers to ensure quality and authenticity.",
  },
  {
    question: "Which payment options are available?",
    answer:
      "We support UPI, debit cards, credit cards, net banking, and Cash on Delivery (COD) on selected products.",
  },
  {
    question: "How can I cancel or return my order?",
    answer:
      "Orders can be cancelled or returned according to our Refund & Cancellation Policy available on our website.",
  },
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-5">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know about AgriShoppers
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-green-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
