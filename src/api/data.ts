import { wordpressUrl } from "@/config";
import {
  expertiseData,
  heroData,
  steps,
  testimonials,
  whyChooseUsData,
} from "@/mock/data";
interface HeroData {
  heroTitle: string;
  heroBottom: string;
  heroImage: string;
}
export interface AboutData {
  id: number;
  title: string;
  value: string;
}
export interface TestimonialsData {
  id: number;
  title: string;
  description: string;
  full_name: string;
  place: string;
  profile_image: string;
}

export async function getHeroData(): Promise<HeroData> {
  try {
    const res = await fetch(`${wordpressUrl}/hero?acf_format=standard`, {
      next: {
        revalidate: 0,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch hero data");
    const data = await res.json();
    if (data.length === 0) {
      return heroData;
    }
    return {
      heroTitle: data[0].acf.title,
      heroBottom: data[0].acf.sub_title,
      heroImage: data[0].acf.background,
    };
  } catch (error) {
    console.log(error);
    return heroData;
  }
}

export const getTransformationData = async () => {
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

export async function getAboutData(): Promise<AboutData[]> {
  try {
    const res = await fetch(
      `${wordpressUrl}/aboutsection?acf_format=standard`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch about data");

    const data = await res.json();

    return data.map(
      (item: {
        id: number;
        acf: {
          title: string;
          value: string;
        };
      }) => ({
        id: item?.id || 1,
        title: item?.acf?.title || "Mekano Design",
        value: item?.acf?.value || "2007",
      })
    );
  } catch (error) {
    console.error("Error fetching about data:", error);
    return [];
  }
}

// api/data.ts

export interface WhyChooseUsData {
  id: number;
  title: string;
  description: string;
}

export async function getWhyChooseUsData(): Promise<WhyChooseUsData[]> {
  try {
    const res = await fetch(
      `${wordpressUrl}/why-choose-mekano-de?acf_format=standard`,
      {
        next: {
          revalidate: 60, // Revalidate the data every 60 seconds
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch why choose us data");

    const data = await res.json();

    return data.map(
      (item: {
        id: number;
        acf: {
          title: string;
          description: string;
        };
      }) => ({
        id: item.id,
        title: item.acf.title,
        description: item.acf.description,
      })
    );
  } catch (error) {
    console.error("Error fetching why choose us data:", error);
    return whyChooseUsData;
  }
}

export interface ExpertiseData {
  id: number;
  title: string;
  description: string;
}

export async function getExpertiseData(): Promise<ExpertiseData[]> {
  try {
    const res = await fetch(
      `${wordpressUrl}/our-expertise?acf_format=standard`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch expertise data");

    const data = await res.json();
    return data.map(
      (item: {
        id: number;
        acf: {
          title: string;
          description: string;
        };
      }) => ({
        id: item.id,
        title: item.acf.title,
        description: item.acf.description,
      })
    );
  } catch (error) {
    console.error("Error fetching expertise data:", error);
    return expertiseData;
  }
}

export interface ExpertiseImageData {
  image: string;
}

export async function getExpertiseImageData(): Promise<ExpertiseImageData> {
  try {
    const res = await fetch(
      `${wordpressUrl}/expertiseimage?acf_format=standard`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch expertise image data");

    const data = await res.json();

    return {
      image: data[0]?.acf?.image || "/expertise.jpeg",
    };
  } catch (error) {
    console.error("Error fetching expertise image data:", error);
    return {
      image: "/expertise.jpeg",
    };
  }
}

export async function getStepsImage(): Promise<string> {
  try {
    const res = await fetch(`${wordpressUrl}/stepsimage?acf_format=standard`);

    if (!res.ok) throw new Error("Failed to fetch steps image");
    const data = await res.json();
    return data[0]?.acf?.image || "/steps.jpeg";
  } catch (error) {
    console.error("Error fetching steps image:", error);
    return "/steps.jpeg";
  }
}

export async function getWhyChooseUsImage(): Promise<string> {
  try {
    const res = await fetch(
      `${wordpressUrl}/whychoosemekanoimage?acf_format=standard`
    );
    if (!res.ok) throw new Error("Failed to fetch why choose us image");

    const data = await res.json();
    return data[0]?.acf?.image || "/whychoose.jpeg";
  } catch (error) {
    console.error("Error fetching why choose us image:", error);
    return "/whychoose.jpeg";
  }
}
export async function getStepsData(): Promise<
  {
    title: string;
    description: string;
    number: string;
  }[]
> {
  try {
    const res = await fetch(`${wordpressUrl}/step-section?acf_format=standard`);
    if (!res.ok) throw new Error("Failed to fetch steps data");
    const data = await res.json();

    return data.map(
      (
        item: {
          id: number;
          acf: {
            title: string;
            description: string;
          };
        },
        index: number
      ) => ({
        title: item.acf.title,
        description: item.acf.description,
        number: `0${index + 1}.`,
      })
    );
  } catch (error) {
    console.error("Error fetching steps data:", error);
    return steps;
  }
}
export async function getTestimonialsData(): Promise<TestimonialsData[]> {
  try {
    const res = await fetch(`${wordpressUrl}/testimonial?acf_format=standard`);
    if (!res.ok) throw new Error("Failed to fetch testimonials data");
    const data = await res.json();
    return data.map(
      (
        item: {
          acf: {
            title: string;
            description: string;
            full_name: string;
            place: string;
            profile_image: string;
          };
        },
        index: number
      ) => ({
        id: index + 1,
        title: item.acf.title,
        description: item.acf.description,
        full_name: item.acf.full_name,
        place: item.acf.place,
        profile_image: item.acf.profile_image,
      })
    );
  } catch (error) {
    console.error("Error fetching testimonials data:", error);
    return testimonials;
  }
}
