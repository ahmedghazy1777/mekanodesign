import React from "react";
import { AboutData } from "@/api/data";

const StatCard = ({ number, text }: { number: string; text: string }) => (
  <div className="bg-[#897111] flex flex-col items-start justify-center p-4 sm:p-6 rounded-lg min-h-[120px] sm:h-36">
    <div className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
      {number}
    </div>
    <div className="text-xs sm:text-sm text-gray-200 font-medium">{text}</div>
  </div>
);

interface AboutProps {
  aboutData: AboutData[];
}

const About = ({ aboutData }: AboutProps) => {
  return (
    <main className="relative about text-white overflow-hidden flex flex-col items-center justify-center min-h-[600px] sm:min-h-[80vh] py-16 sm:py-24">
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-light mb-8 sm:mb-12 text-center">
          About Mekano Design
        </h1>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Founded in 2007, Mekano Design has been a leader in the interior
              design industry, dedicated to transforming spaces into unique and
              inspiring environments. Well over 150 completed projects stand as
              testament to our commitment to excellence and innovation. Style
              and respect is to blend creativity and functionality, ensuring
              that each project reflects our clients lifestyles and aspirations
              while expressing creativity and sophistication.
            </p>
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Our skilled team of designers and architects takes pride in
              understanding the unique mandate and preferences of each project,
              allowing us to create designs that resonate on a personal level.
              As we continue to grow, our passion for excellence and commitment
              to client satisfaction remain at the core of our offering to the
              design industry.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-fit mt-4 sm:mt-0">
            {aboutData.map((item) => (
              <StatCard key={item.id} number={item.value} text={item.title} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
