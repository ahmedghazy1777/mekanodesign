"use client";
import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";

interface TransformationData {
  villas: string[];
  offices: string[];
  showrooms: string[];
}

const Transformation = ({ villas, offices, showrooms }: TransformationData) => {
  const [activeCategory, setActiveCategory] = useState("villa");

  const transformations = useMemo(
    () => ({
      villa: [
        {
          id: 1,
          image: villas[0] || "villa/1.webp",
          className: "col-span-2 row-span-1",
        },
        {
          id: 2,
          image: villas[1] || "villa/2.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 3,
          image: villas[2] || "villa/3.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 4,
          image: villas[3] || "villa/4.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 5,
          image: villas[4] || "villa/5.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 6,
          image: villas[5] || "villa/6.webp",
          className: "col-span-2 row-span-1",
        },
      ],
      offices: [
        {
          id: 1,
          image: offices[0] || "office/1.webp",
          className: "col-span-2 row-span-1",
        },
        {
          id: 2,
          image: offices[1] || "office/2.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 3,
          image: offices[2] || "office/3.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 4,
          image: offices[3] || "office/4.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 5,
          image: offices[4] || "office/5.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 6,
          image: offices[5] || "office/6.webp",
          className: "col-span-2 row-span-1",
        },
      ],
      showrooms: [
        {
          id: 1,
          image: showrooms[0] || "showroom/1.webp",
          className: "col-span-2 row-span-1",
        },
        {
          id: 2,
          image: showrooms[1] || "showroom/2.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 3,
          image: showrooms[2] || "showroom/3.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 4,
          image: showrooms[3] || "showroom/4.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 5,
          image: showrooms[4] || "showroom/5.webp",
          className: "col-span-1 row-span-1",
        },
        {
          id: 6,
          image: showrooms[5] || "showroom/6.webp",
          className: "col-span-2 row-span-1",
        },
      ],
    }),
    [villas, offices, showrooms]
  );

  const categories = useMemo(
    () => [
      { id: "villa", label: "Villa" },
      { id: "offices", label: "Offices" },
      { id: "showrooms", label: "Showrooms" },
    ],
    []
  );

  const CategoryButton = useCallback(
    ({
      label,
      isActive,
      onClick,
    }: {
      id: string;
      label: string;
      isActive: boolean;
      onClick: () => void;
    }) => (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded transition-colors duration-300 ${
          isActive ? "bg-[#C9AE17] text-white" : "hover:bg-gray-100"
        }`}
      >
        {label}
      </button>
    ),
    []
  );

  const GalleryItem = useCallback(
    ({
      image,
      className,
      id,
      category,
    }: {
      image: string;
      className: string;
      id: number;
      category: string;
    }) => (
      <div className={`relative group overflow-hidden rounded-lg ${className}`}>
        <Image
          src={image}
          alt={`Transformation project ${id} in category ${category}`}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
      </div>
    ),
    []
  );

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Our Transformations Speak for Themselves
        </h2>
        <p className="text-gray-800 text-sm text-center leading-relaxed max-w-2xl mx-auto py-4">
          Our portfolio showcases the diverse range of projects we have
          completed, from luxurious villas to modern offices and chic showrooms.
          Each transformation is a testament to our commitment to excellence and
          creativity.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              {...category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {transformations[activeCategory as keyof typeof transformations]?.map(
          (item) => (
            <GalleryItem key={item.id} {...item} category={activeCategory} />
          )
        )}
      </div>

      <div className="text-center mt-8">
        <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-2 rounded hover:bg-yellow-500 hover:text-white transition-colors duration-300">
          Inquire now
        </button>
      </div>
    </section>
  );
};

export default Transformation;
