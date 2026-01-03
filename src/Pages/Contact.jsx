import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            Contact Us
          </h1>
          <p className="mt-3 text-gray-600">
            Have questions? Our agriculture experts are here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-3">
              📍 Address: Bhubaneswar, Odisha, India
            </p>
            <p className="text-gray-600 mb-3">
              📞 Phone: +91 1234567890
            </p>
            <p className="text-gray-600 mb-3">
              ✉️ Email: info@agrishoppers.com
            </p>
            <p className="text-gray-600">
              ⏰ Support Hours: Mon – Sat (9 AM – 6 PM)
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-green-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-green-600"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2 focus:outline-green-600"
            ></textarea>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
