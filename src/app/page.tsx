import { Metadata } from "next";
import Hero from "./components/Hero";

import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Expertise from "./components/Expertise";

import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Suspense } from "react";
import {
  getHeroData,
  getTransformationData,
  getAboutData,
  getWhyChooseUsData,
  getExpertiseImageData,
  getExpertiseData,
  getStepsImage,
  getWhyChooseUsImage,
  getStepsData,
  getTestimonialsData,
} from "@/api/data";
import Transformation from "./components/Transformation";

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata(): Promise<Metadata> {
  const heroData = await getHeroData();
  return {
    title: `MekanoDesign - ${heroData.heroTitle}`,
    description: heroData.heroBottom,
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#C9AE17",
  };
}

export const runtime = "edge";
export default async function Home() {
  const heroData = await getHeroData();
  const transformationData = await getTransformationData();
  const aboutData = await getAboutData();
  const whyChooseUsData = await getWhyChooseUsData();
  const expertiseImageData = await getExpertiseImageData();
  const expertiseData = await getExpertiseData();
  const stepsImage = await getStepsImage();
  const whyChooseUsImage = await getWhyChooseUsImage();
  const stepsData = await getStepsData();
  const testimonials = await getTestimonialsData();
  console.log(testimonials);
  return (
    <main className="h-screen">
      {/* <NavBar /> */}
      <Hero {...heroData} />
      <Suspense fallback={<div>Loading...</div>}>
        <About aboutData={aboutData} />
        <WhyChooseUs
          whyChooseUsData={whyChooseUsData}
          whyChooseUsImage={whyChooseUsImage}
        />
        <Expertise
          expertiseImageData={expertiseImageData}
          expertiseData={expertiseData}
        />
        <Transformation {...transformationData} />
        <Steps stepsImage={stepsImage} stepsData={stepsData} />
        <Testimonials testimonials={testimonials} />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
