import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full hero flex flex-col items-center justify-between pt-56 py-20 ">
      <div id="hero-top">
        <div className="text-center">
          <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-normal text-white leading-tight tracking-normal max-w-4xl mx-auto">
            Transform Your <span className="text-white font-bold">Space</span>{" "}
            with
            <br />
            <span className="text-white font-bold">
              Premium Interior Design
            </span>{" "}
            in
            <br className="hidden md:block" />
            the UAE.
          </h1>
        </div>
      </div>
      <div id="hero-bottom" className="">
        <div className="flex flex-col items-center  justify-center">
          <p className="text-base md:text-lg text-gray-100/90 max-w-2xl mx-auto font-bold">
            Luxury designs tailored to your style, delivered with precision and
            elegance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="px-8 py-3 bg-yellow-500 text-white text-sm font-medium rounded hover:bg-yellow-400 transition-colors min-w-[240px]">
              Book Your Free Consultation Today!
            </button>
            <button className="px-8 py-3 bg-transparent border border-white text-white text-sm font-medium rounded hover:bg-white/10 transition-colors min-w-[240px]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
