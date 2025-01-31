import React from "react";
import { Building2, Building, Store, Wrench, LucideProps } from "lucide-react";
import Image from "next/image";
import { ExpertiseData, ExpertiseImageData } from "@/api/data";
interface ExpertiseProps {
  expertiseData: ExpertiseData[];
  expertiseImageData: ExpertiseImageData;
}
const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}) => (
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

interface ExpertiseProps {
  expertiseData: ExpertiseData[];
  expertiseImageData: ExpertiseImageData;
}

const Expertise = ({ expertiseData, expertiseImageData }: ExpertiseProps) => {
  const icons = [Building2, Building, Store, Wrench];

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
              <Image
                src={expertiseImageData.image}
                alt="Modern interior with city view"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseData.map((item, index) => (
              <ServiceCard
                key={item.id}
                icon={icons[index % icons.length]}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
