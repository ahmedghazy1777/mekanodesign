import React from "react";
import { Building2, Building, Store, Wrench } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }: any) => (
  <div className="flex flex-col gap-3">
    <div className="text-[#D4AF37]">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="font-medium text-black">{title}</h3>
    <p className="text-sm text-[rgba(57, 57, 57, 1)] leading-relaxed mb-3">
      {description}
    </p>
    <button className="text-sm text-black border border-black px-4 py-2 rounded hover:bg-gray-50 w-fit">
      Inquire now
    </button>
  </div>
);

const Expertise = () => {
  return (
    <div className="expertise py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center  text-black font-bold mb-12">
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Large Image */}
          <div className="md:col-span-1">
            <div className="rounded-3xl overflow-hidden shadow-lg h-full">
              <img
                src="/expertise.jpeg"
                alt="Modern interior with city view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={Building2}
              title="Residential Interior Design"
              description="From color schemes and lighting to textures and finishes, our designs are a testament to the meticulous attention to detail."
            />

            <ServiceCard
              icon={Building}
              title="Office & Commercial Spaces"
              description="From color schemes and lighting to textures and finishes, our designs are a testament to the meticulous attention to detail."
            />

            <ServiceCard
              icon={Store}
              title="Retail & Hospitality Design"
              description="From color schemes and lighting to textures and finishes, our designs are a testament to the meticulous attention to detail."
            />

            <ServiceCard
              icon={Wrench}
              title="Renovations & Fitout"
              description="From color schemes and lighting to textures and finishes, our designs are a testament to the meticulous attention to detail."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
