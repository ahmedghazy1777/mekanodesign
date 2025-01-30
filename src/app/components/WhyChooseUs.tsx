import React from "react";
import { Home, Clock, Users, Diamond, LucideProps } from "lucide-react";
import Image from "next/image";
const FeatureItem = ({
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
  <div className="flex flex-col items-center gap-4">
    <div className="text-[#D4AF37]">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-black text-sm font-medium text-center max-w-[120px]">
      {title}
    </h3>
    <p className="text-gray-800 text-sm text-center leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div className="whychoose  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl text-center font-light text-black mb-4">
          Why Choose Mekano Design?
        </h2>

        <p className="text-center text-black max-w-3xl mx-auto mb-16 text-sm leading-relaxed">
          At Mekano Design, we blend creativity with functionality to craft
          stunning interiors tailored to your vision. With a focus on premium
          quality and exceptional service, we transform spaces into masterpieces
          that inspire.
        </p>

        {/* Features and Image Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <FeatureItem
              icon={Home}
              title="Tailored Designs for Every Space"
              description="Our designs are crafted to fit your unique style and lifestyle, ensuring every space is a reflection of your personality."
            />
            <FeatureItem
              icon={Clock}
              title="Timely Project Completion"
              description="We understand the importance of deadlines. Our projects are completed on time, without compromising on quality."
            />
            <FeatureItem
              icon={Users}
              title="Expert Designers with Global Experience"
              description="Our team of designers has a wealth of experience, working with clients from all over the world."
            />
            <FeatureItem
              icon={Diamond}
              title="Premium Materials and Finishes"
              description="We use only the highest quality materials and finishes, ensuring that your project is a true work of art."
            />
          </div>

          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/whychoose.jpeg"
              alt="Luxury interior design"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
