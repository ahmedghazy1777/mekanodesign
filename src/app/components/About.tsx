import React from "react";

const WaveBackground = () => (
  <svg
    className="absolute top-0 left-0 w-full h-full opacity-20"
    viewBox="0 0 1000 300"
  >
    <path
      d="M0 150 Q 250 100 500 150 Q 750 200 1000 150 L 1000 300 L 0 300 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    />
    <path
      d="M0 180 Q 250 130 500 180 Q 750 230 1000 180 L 1000 300 L 0 300 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    />
  </svg>
);

const StatCard = ({ number, text }: any) => (
  <div className="bg-[#897111] flex flex-col items-start justify-center p-4 rounded-lg h-36">
    <div className="text-3xl font-bold  text-white mb-3">{number}</div>
    <div className="text-sm text-gray-200 font-medium">{text}</div>
  </div>
);

const About = () => {
  return (
    <main className="relative  about text-white overflow-hidden flex flex-col items-center justify-center h-[80vh]">
      <div className="relative max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-light mb-12 text-center font-serif">
          About Mekano Design
        </h1>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              Founded in 2007, Mekano Design has been a leader in the interior
              design industry, dedicated to transforming spaces into unique and
              inspiring environments. Well over 150 completed projects stand as
              testament to our commitment to excellence and innovation. Style
              and respect is to blend creativity and functionality, ensuring
              that each project reflects our clients' lifestyles and aspirations
              while expressing creativity and sophistication.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our skilled team of designers and architects takes pride in
              understanding the unique mandate and preferences of each project,
              allowing us to create designs that resonate on a personal level.
              As we continue to grow, our passion for excellence and commitment
              to client satisfaction remain at the core of our offering to the
              design industry.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 h-fit">
            <StatCard number="2007" text="Year of Establishment" />
            <StatCard number="80" text="Specialist Staff" />
            <StatCard number="150" text="Completed Project" />
            <StatCard number="4" text="Ongoing Project" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
