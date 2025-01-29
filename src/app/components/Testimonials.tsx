import React from "react";
import Image from "next/image";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet consectetur.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Mattis bibendum habitant faucibus sollicitudin nunc diam dictum. At nisi egestas ultrices aenean nulla semper ultricies. Nulla eget eros malesuada sollicitudin. Nulla aute sint quis ma.",
      author: "Ahmed Ghazy",
      location: "Dubai",
      avatar: "/testimonial.png",
    },
    {
      id: 2,
      quote: "Lorem ipsum dolor sit amet consectetur.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Mattis bibendum habitant faucibus sollicitudin nunc diam dictum. At nisi egestas ultrices aenean nulla semper ultricies. Nulla eget eros malesuada sollicitudin. Nulla aute sint quis ma.",
      author: "Ahmed Ghazy",
      location: "Dubai",
      avatar: "/testimonial.png",
    },
    {
      id: 3,
      quote: "Lorem ipsum dolor sit amet consectetur.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Mattis bibendum habitant faucibus sollicitudin nunc diam dictum. At nisi egestas ultrices aenean nulla semper ultricies. Nulla eget eros malesuada sollicitudin. Nulla aute sint quis ma.",
      author: "Ahmed Ghazy",
      location: "Dubai",
      avatar: "/testimonial.png",
    },
  ];

  return (
    <div className="testimonials min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-900/20 to-transparent opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <h2 className="text-white text-3xl font-medium text-center mb-16">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, ind) => (
            <div key={ind}>
              <div
                key={testimonial.id}
                className="bg-[#897111] rounded-lg p-8 backdrop-blur-sm"
              >
                {/* Quote mark */}
                <div className="text-4xl text-yellow-600 mb-4"></div>

                {/* Quote heading */}
                <h3 className="text-white text-lg font-medium mb-4">
                  {testimonial.quote}
                </h3>

                {/* Content */}
                <p className="text-white text-sm leading-relaxed mb-6">
                  {testimonial.content}
                </p>

                {/* Author info */}
              </div>
              <div className="flex items-center gap-3 mt-7">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <div className="text-white font-bold">
                    {testimonial.author}
                  </div>
                  <div className="text-white text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
