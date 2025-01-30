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

export async function generateStaticParams() {
  return [];
}

async function getHeroData(): Promise<HeroData> {
  try {
    const res = await fetch(`${wordpressUrl}/hero?acf_format=standard`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
    console.log(res);
    if (!res.ok) throw new Error("Failed to fetch hero data");
    const data = await res.json();
    if (data.length === 0) {
      return {
        heroTitle: "Default Title",
        heroBottom: "Default Subtitle",
        heroImage: "/fallback.jpeg",
      };
    }
    return {
      heroTitle:
        data[0]?.acf?.title ||
        "Transform Your Space with Premium Interior Design in the UAE.",
      heroBottom:
        data[0]?.acf?.sub_title ||
        "Luxury designs tailored to your style, delivered with precision and elegance",
      heroImage: data[0]?.acf?.background || "/hero.jpg",
    };
  } catch (error) {
    console.log(error);
    return {
      heroTitle: "Default Title",
      heroBottom: "Default Subtitle",
      heroImage: "/fallback.jpeg",
    };
  }
}
const getTransformationData = async () => {
  try {
    const villas = await fetch(
      `${wordpressUrl}/villa-images?acf_format=standard`,
      {
        next: {
          revalidate: 0,
        },
      }
    );
    const villasData = await villas.json();
    const offices = await fetch(
      `${wordpressUrl}/office-images?acf_format=standard`,
      {
        next: {
          revalidate: 0,
        },
      }
    );
    const officesData = await offices.json();
    const showrooms = await fetch(
      `${wordpressUrl}/showroom-images?acf_format=standard`,
      {
        next: {
          revalidate: 0,
        },
      }
    );
    const showroomsData = await showrooms.json();
    return {
      villas: [
        villasData[0].acf?.image1,
        villasData[0].acf?.image2,
        villasData[0].acf?.image3,
        villasData[0].acf?.image4,
        villasData[0].acf?.image5,
        villasData[0].acf?.image6,
      ],
      offices: [
        officesData[0].acf?.image1,
        officesData[0].acf?.image2,
        officesData[0].acf?.image3,
        officesData[0].acf?.image4,
        officesData[0].acf?.image5,
        officesData[0].acf?.image6,
      ],
      showrooms: [
        showroomsData[0].acf?.image1,
        showroomsData[0].acf?.image2,
        showroomsData[0].acf?.image3,
        showroomsData[0].acf?.image4,
        showroomsData[0].acf?.image5,
        showroomsData[0].acf?.image6,
      ],
    };
  } catch (error) {
    console.error("Error fetching transformation data:", error);
    return {
      villas: [],
      offices: [],
      showrooms: [],
    };
  }
};

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
  // const transformationData = await getTransformationData();
  // console.log(transformationData);
  return (
    <main className="h-screen">
      <NavBar />
      <Hero {...heroData} />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <WhyChooseUs />
        <Expertise />
        {/* <Transformation {...transformationData} /> */}
        <Steps />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
