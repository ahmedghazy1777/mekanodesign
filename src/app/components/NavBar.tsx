"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NavBar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center fixed top-0 justify-between px-6 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-lg shadow-lg" : "bg-black/30"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-yellow-500">
        <Image
          src="/logo-golden.png"
          alt="Logo"
          width={100}
          height={100}
          className=" w-32 h-20 object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          Home
        </Link>

        {/* Custom Services Dropdown */}
        <div className="relative">
          <button
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="text-white hover:text-yellow-500 transition-colors"
          >
            Services
          </button>
          {isServicesOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-[200px] bg-black/90 p-6 rounded-md"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="grid gap-3">
                <Link
                  href="/services/web"
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/mobile"
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  Mobile Development
                </Link>
                <Link
                  href="/services/design"
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  UI/UX Design
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link
          href="/portfolio"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          Portfolio
        </Link>

        <Link
          href="/blogs"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          Our Blogs
        </Link>

        <Link
          href="/about"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          About Us
        </Link>

        <Link
          href="/contact"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* CTA Button */}
      <Button
        variant="outline"
        className="border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors"
      >
        Explore Now
      </Button>
    </nav>
  );
}
