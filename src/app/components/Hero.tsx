import Image from "next/image";

interface HeroProps {
  heroTitle: string;
  heroBottom: string;
  heroImage: string;
}

const Hero: React.FC<HeroProps> = ({ heroTitle, heroBottom, heroImage }) => {
  return (
    <div className="relative min-h-[100svh] w-full flex flex-col items-center justify-between px-4 py-12 sm:py-20">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="z-10 text-center text-white max-w-4xl mx-auto mt-52 sm:mt-24">
        <h1 className="text-4xl sm:text-6xl font-semibold">{heroTitle}</h1>
      </div>

      <div className="relative z-10 text-center w-full px-4">
        <p className="text-sm sm:text-base md:text-lg text-gray-100/90 max-w-2xl mx-auto font-bold">
          {heroBottom}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-12 w-full max-w-2xl mx-auto px-4">
          <a
            href="http://mekanodesign.com/"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#C9AE17] text-white text-sm font-medium rounded hover:bg-yellow-400 transition-colors sm:min-w-[240px]"
          >
            Book Your Free Consultation Today!
          </a>
          <a
            href="http://mekanodesign.com/"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border border-white text-white text-sm font-medium rounded hover:bg-white/10 transition-colors sm:min-w-[240px]"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
