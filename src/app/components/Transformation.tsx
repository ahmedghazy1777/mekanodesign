"use client";
import React, { useState } from "react";
const Transformation = () => {
  const [activeCategory, setActiveCategory] = useState("villa");

  const transformations: {
    [key: string]: { id: number; className: string; image: string }[];
  } = {
    villa: [
      { id: 1, image: "/villa/1.png", className: "col-span-2 row-span-1" },
      { id: 2, image: "/villa/2.png", className: "col-span-1 row-span-1" },
      { id: 3, image: "/villa/3.png", className: "col-span-1 row-span-1" },
      { id: 4, image: "/villa/4.png", className: "col-span-1 row-span-1" },
      { id: 5, image: "/villa/5.png", className: "col-span-1 row-span-1" },
      { id: 6, image: "/villa/6.png", className: "col-span-2 row-span-1" },
    ],
    offices: [
      { id: 1, image: "/offices/1.png", className: "col-span-2 row-span-1" },
      { id: 2, image: "/offices/2.png", className: "col-span-1 row-span-1" },
      { id: 3, image: "/offices/3.png", className: "col-span-1 row-span-1" },
      { id: 4, image: "/offices/4.png", className: "col-span-1 row-span-1" },
      { id: 5, image: "/offices/5.png", className: "col-span-1 row-span-1" },
      { id: 6, image: "/offices/6.png", className: "col-span-2 row-span-1" },
    ],
    showrooms: [
      { id: 1, image: "/showrooms/1.png", className: "col-span-2 row-span-1" },
      { id: 2, image: "/showrooms/2.png", className: "col-span-1 row-span-1" },
      { id: 3, image: "/showrooms/3.png", className: "col-span-1 row-span-1" },
      { id: 4, image: "/showrooms/4.png", className: "col-span-1 row-span-1" },
      { id: 5, image: "/showrooms/5.png", className: "col-span-1 row-span-1" },
      { id: 6, image: "/showrooms/6.png", className: "col-span-2 row-span-1" },
    ],
  };

  const categories = [
    { id: "villa", label: "Villa" },
    { id: "offices", label: "Offices" },
    { id: "showrooms", label: "Showrooms" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Our Transformations Speak for Themselves
        </h1>
        <div className="flex justify-center gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-[#C9AE17] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {transformations[activeCategory].map(
          (item: { id: number; image: string; className: string }) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-lg ${item.className}`}
            >
              <img
                src={item.image}
                alt={`Transformation ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
          )
        )}
      </div>

      {/* Inquiry Button */}
      <div className="text-center mt-8">
        <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-2 rounded hover:bg-yellow-500 hover:text-white transition-colors duration-300">
          Inquire now
        </button>
      </div>
    </div>
  );
};

export default Transformation;
