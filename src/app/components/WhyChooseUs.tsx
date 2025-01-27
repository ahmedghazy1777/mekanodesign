import React from "react";
import { Home, Clock, Users, Diamond } from "lucide-react";

const FeatureItem = ({ icon: Icon, title }: any) => (
  <div className="flex flex-col items-center gap-4">
    <div className="text-[#D4AF37]">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-black text-sm font-medium text-center max-w-[120px]">
      {title}
    </h3>
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
            <FeatureItem icon={Home} title="Tailored Designs for Every Space" />
            <FeatureItem icon={Clock} title="Timely Project Completion" />
            <FeatureItem
              icon={Users}
              title="Expert Designers with Global Experience"
            />
            <FeatureItem
              icon={Diamond}
              title="Premium Materials and Finishes"
            />
          </div>

          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/whychoose.jpeg"
              alt="Luxury interior design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
