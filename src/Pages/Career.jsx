import React from "react";
import { FaRocket, FaLaptopCode, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const Career = () => {
  const opportunities = [
    { icon: <FaRocket />, title: "Fast-Growing Agri-Tech", description: "Work in a dynamic, innovative environment shaping the future of agriculture." },
    { icon: <FaLaptopCode />, title: "Tech & Operations Roles", description: "Opportunities across technology, operations, and support functions." },
    { icon: <FaUsers />, title: "Inclusive Culture", description: "Collaborative, inclusive, and supportive work environment." },
    { icon: <FaChalkboardTeacher />, title: "Learning & Growth", description: "Continuous learning opportunities and career development." },
  ];

  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Intro */}
        <div>
          <h2 className="text-4xl font-extrabold text-green-900 mb-6">
            Careers at AgriShapers
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            We are always looking for passionate individuals who want to make a real impact in the agricultural ecosystem. Join us in building solutions that empower farmers nationwide.
          </p>
          <p className="text-green-800 font-semibold">
            Explore opportunities that match your skills and grow with us!
          </p>
        </div>

        {/* Right Column: Opportunities */}
        <div className="grid gap-6">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-green-900">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
