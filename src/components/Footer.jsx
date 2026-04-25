import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#08142d] text-white pt-20 pb-8 border-t-2 border-purple-600 overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 md:gap-12 pb-16">

          {/* Logo */}
          <div className="w-full md:w-[40%] lg:w-1/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              DigiTools
            </h2>

            <p className="text-gray-400 leading-7 text-sm md:text-base">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div className="w-full sm:w-[45%] md:w-1/5">
            <h4 className="text-xl md:text-2xl font-semibold mb-6">
              Product
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-full sm:w-[45%] md:w-1/5">
            <h4 className="text-xl md:text-2xl font-semibold mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full sm:w-[45%] md:w-1/5">
            <h4 className="text-xl md:text-2xl font-semibold mb-6">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social Links (FIXED iPad issue) */}
          <div className="w-full sm:w-[45%] md:w-1/5">
            <h4 className="text-xl md:text-2xl font-semibold mb-6">
              Social Links
            </h4>

            <div className="flex flex-wrap gap-4 md:gap-6">

              <div className="w-10 md:w-12 h-10 md:h-12 bg-white rounded-full flex items-center justify-center text-black text-lg md:text-xl cursor-pointer hover:scale-110 transition">
                <FaInstagram />
              </div>

              <div className="w-10 md:w-12 h-10 md:h-12 bg-white rounded-full flex items-center justify-center text-black text-lg md:text-xl cursor-pointer hover:scale-110 transition">
                <FaFacebookF />
              </div>

              <div className="w-10 md:w-12 h-10 md:h-12 bg-white rounded-full flex items-center justify-center text-black text-lg md:text-xl cursor-pointer hover:scale-110 transition">
                <FaXTwitter />
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <hr className="border-gray-700" />

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">

          <p className="text-center md:text-left">
            © 2026 DigiTools. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;