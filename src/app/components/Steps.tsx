import React from "react";

const Steps = () => {
  const steps = [
    {
      number: "01.",
      title: "Book Your Free Consultation",
      description:
        "Share your vision with our experienced interior designers. We'll discuss your preferences, style, and functional needs in confidential ONE online guide.",
    },
    {
      number: "02.",
      title: "Explore Design Ideas",
      description:
        "Our team will provide you with personalized suggestions tailored to your space, helping you visualize the possibilities for transformation.",
    },
    {
      number: "03.",
      title: "Seamless Execution",
      description:
        "Work exciting precision materials to handling every detail to ensure high-quality design and execution, keeping you updated every step of the way.",
    },
    {
      number: "04.",
      title: "Experience Your Dream Space",
      description:
        "Step into a beautifully transformed space that reflects your style and meets your needs, delivered with precision and care.",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-8">
        {/* Header */}
        <h2 className="text-2xl font-medium text-center mb-16">
          Streamlined Steps to Achieve Your Dream Interior
        </h2>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Steps Section */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-x-4 gap-y-12">
            {steps.map((step) => (
              <div key={step.number} className="col-span-1">
                <div className="mb-1 text-sm text-gray-400 font-medium">
                  {step.number}
                </div>
                <h3 className="text-sm font-medium mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed pr-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/steps.jpeg"
                alt="Luxury Interior Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-white px-8 py-3 rounded-full border border-gray-200 hover:shadow-md transition-shadow duration-300 text-xs">
            Let's Begin Your Transformation - Book Your Free Consultation Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
