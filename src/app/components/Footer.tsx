import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Logo and Text */}
          <div className="max-w-md">
            <Image
              src="/logo.png"
              alt="Mekano Logo"
              className="mb-6"
              width={120}
              height={40}
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Mekano Design is an award-winning luxury interior design company
              based in Dubai providing comprehensive design solutions to suited
              international clients across multiple sectors. Our team comprises
              artists and passionate leaders who are committed to delivering
              exceptional and unique design-driven projects.
            </p>
          </div>

          {/* Right Column - Newsletter */}
          <div className="md:flex md:justify-end">
            <div className="max-w-xs w-full">
              <h3 className="text-sm font-medium mb-4">JOIN OUR NEWSLETTER</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 bg-transparent border-b border-gray-600 text-white text-sm py-2 focus:outline-none focus:border-white"
                />
                <button className="ml-4 text-sm text-gray-400 hover:text-white">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-xs">
            Copyright © 2024 Mekano Design - Interior Design Company in Dubai |
            All Rights Reserved
          </p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.4,3.6C18.2,1.3,15.2,0,12,0C5.4,0,0,5.4,0,12c0,2.1,0.5,4.2,1.6,6L0,24l6.2-1.6c1.8,1,3.8,1.5,5.8,1.5c6.6,0,12-5.4,12-12C24,8.8,22.7,5.8,20.4,3.6z M12,22c-1.8,0-3.5-0.5-5-1.4l-0.4-0.2L2.9,21.5l1.1-3.7l-0.2-0.4C2.8,15.8,2.2,13.9,2.2,12c0-5.4,4.4-9.8,9.8-9.8c2.6,0,5.1,1,6.9,2.9s2.9,4.3,2.9,6.9C21.8,17.6,17.4,22,12,22z" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
