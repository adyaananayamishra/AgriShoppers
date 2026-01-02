import React from "react";

const blogs = [
  {
    id: 1,
    title: "Best Crops to Grow in Summer Season",
    image: "https://source.unsplash.com/600x400/?farming,crops",
    description:
      "Learn which crops give the best yield during the summer season in India.",
  },
  {
    id: 2,
    title: "Modern Farming Techniques for Higher Yield",
    image: "https://source.unsplash.com/600x400/?modern,farming",
    description:
      "Discover smart farming methods that increase productivity and income.",
  },
  {
    id: 3,
    title: "How to Improve Soil Fertility Naturally",
    image: "https://source.unsplash.com/600x400/?soil,agriculture",
    description:
      "Simple and organic ways to maintain soil health for long-term farming.",
  },
];

const Blog = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            Agriculture Blog
          </h1>
          <p className="mt-3 text-gray-600">
            Latest farming tips, news, and expert guidance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-green-700 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.description}
                </p>
                <button className="text-green-700 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
