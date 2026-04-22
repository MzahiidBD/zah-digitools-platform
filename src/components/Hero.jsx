import React from "react";
import banner from "../assets/banner.png";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-6 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 mt-4 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
              Explore Products
            </button>

            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={banner}
            alt="banner"
            className="w-full rounded-xl shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;