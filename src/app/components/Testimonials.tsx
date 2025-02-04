import React from "react";
import Image from "next/image";
export type Testimonial = {
  id: number;
  title: string;
  description: string;
  full_name: string;
  place: string;
  profile_image: string;
};
const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  if (!testimonials) return null;
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
          {testimonials.map((testimonial: Testimonial, ind: number) => (
            <div key={ind}>
              <div
                key={ind}
                className="bg-[#897111] rounded-lg p-8 backdrop-blur-sm"
              >
                {/* Quote mark */}
                <div className="text-4xl text-yellow-600 mb-4">
                  <Image
                    src="/quote.png"
                    alt="Quote"
                    width={100}
                    height={100}
                    className="w-3 h-3 object-contain"
                  />
                </div>

                {/* Quote heading */}
                <h3 className="text-white text-lg font-medium mb-4">
                  {testimonial.title}
                </h3>

                {/* Content */}
                <p className="text-white text-sm leading-relaxed mb-6">
                  {testimonial.description}
                </p>

                {/* Author info */}
              </div>
              <div className="flex items-center gap-3 mt-7">
                <Image
                  src={testimonial.profile_image}
                  alt={testimonial.full_name}
                  className="w-10 h-10 object-cover rounded-full"
                  width={500}
                  height={500}
                />
                <div>
                  <div className="text-white font-bold">
                    {testimonial.full_name}
                  </div>
                  <div className="text-white text-sm">{testimonial.place}</div>
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
