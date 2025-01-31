import Image from "next/image";
import React from "react";

interface StepsProps {
  stepsImage: string;
  stepsData: {
    title: string;
    description: string;
    number: string;
  }[];
}

const Steps = ({ stepsImage, stepsData }: StepsProps) => {
  const steps = stepsData;

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl font-medium text-center mb-16">
          Streamlined Steps to Achieve Your Dream Interior
        </h2>
        <div className="flex flex-col lg:flex-row gap-16">
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

          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={stepsImage}
                alt="Luxury Interior Design"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="http://mekanodesign.com/"
            className="bg-white px-8 py-3 text-black font-semibold rounded-sm border border-black hover:shadow-md transition-shadow duration-300 text-xs"
          >
            Lets Begin Your Transformation - Book Your Free Consultation Today!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Steps;
