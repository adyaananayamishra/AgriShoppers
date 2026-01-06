import React from "react";
import { FaTruck, FaWarehouse, FaMapMarkedAlt, FaClock } from "react-icons/fa";

const DeliveryAndLogistics = () => {
  const features = [
    { icon: <FaTruck />, title: "Fast Delivery", description: "Timely dispatch and quick delivery across all regions." },
    { icon: <FaWarehouse />, title: "Warehouse Management", description: "Efficient storage and inventory control for smooth logistics." },
    { icon: <FaMapMarkedAlt />, title: "Real-time Tracking", description: "Track shipments and delivery status anytime." },
    { icon: <FaClock />, title: "Reliable Timelines", description: "Estimated delivery dates for all orders." },
  ];

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-900 mb-6 relative inline-block">
          Delivery & Logistics
          <span className="absolute left-0 -bottom-1 w-28 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></span>
        </h2>
        <p className="text-gray-700 mb-10 text-lg">
          Our delivery and logistics system ensures timely, reliable, and transparent shipment of agricultural products.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="p-4 bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryAndLogistics;
