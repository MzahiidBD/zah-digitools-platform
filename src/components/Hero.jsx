import React from "react";
import banner from "../assets/banner.png";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50 py-10 md:py-16 lg:py-20 overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left */}
        <div className="text-center md:text-left">

          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs md:text-sm">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            New AI Tools Available
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-5 leading-tight">
            Supercharge Your Digital Workflow
          </h1>

          <p className="text-gray-500 mt-4 text-sm md:text-base">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">

            <button className="bg-purple-600 text-white px-5 py-2 rounded-full">
              Explore Products
            </button>

            <button className="border border-purple-600 text-purple-600 px-5 py-2 rounded-full">
              ▶ Watch Demo
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img src={banner} className="w-full max-w-sm md:max-w-full" />
        </div>

      </div>

    </section>
  );
};

export default Hero;