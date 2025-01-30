import { Metadata } from "next";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Expertise from "./components/Expertise";
import Transformation from "./components/Transformation";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { wordpressUrl } from "@/config";
import { Suspense } from "react";

// Define the types for your data
interface HeroData {
  heroTitle: string;
  heroBottom: string;
  heroImage: string;
}

// This function will be called at build time
export async function generateStaticParams() {
  // If you have dynamic routes, define them here
  return [];
}

// This function fetches data at build time
async function getHeroData(): Promise<HeroData> {
  try {
    const res = await fetch(`${wordpressUrl}/hero?acf_format=standard`, {
      next: {
        revalidate: 3600, // Revalidate every hour
      },
    });

    if (!res.ok) throw new Error("Failed to fetch hero data");
    const data = await res.json();

    return {
      heroTitle: data[0]?.acf?.title || "Default Title",
      heroBottom: data[0]?.acf?.sub_title || "Default Subtitle",
      heroImage: data[0]?.acf?.background || "/fallback.jpeg",
    };
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return {
      heroTitle: "Default Title",
      heroBottom: "Default Subtitle",
      heroImage: "/fallback.jpeg",
    };
  }
}

// Generate metadata statically
export async function generateMetadata(): Promise<Metadata> {
  const heroData = await getHeroData();

  return {
    title: `MekanoDesign - ${heroData.heroTitle}`,
    description: heroData.heroBottom,
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#C9AE17",
  };
}

export default async function Home() {
  const heroData = await getHeroData();

  return (
    <main className="h-screen">
      <NavBar />
      <Hero {...heroData} />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <WhyChooseUs />
        <Expertise />
        <Transformation />
        <Steps />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
