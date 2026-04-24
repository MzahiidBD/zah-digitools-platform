import React from "react";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const StepsSection = () => {
  return (
    <section className="w-full bg-[#f8f8fc] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Get Started In 3 Steps
          </h2>

          <p className="text-gray-500 mt-4">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">
            
            <div className="absolute top-5 right-5 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              01
            </div>

            <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-8">
              <img src={userIcon} alt="user" className="w-12 h-12" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Create Account
            </h3>

            <p className="text-gray-500">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">

            <div className="absolute top-5 right-5 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              02
            </div>

            <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-8">
              <img src={packageIcon} alt="package" className="w-12 h-12" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Choose Products
            </h3>

            <p className="text-gray-500">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">

            <div className="absolute top-5 right-5 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              03
            </div>

            <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-8">
              <img src={rocketIcon} alt="rocket" className="w-12 h-12" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Start Creating
            </h3>

            <p className="text-gray-500">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepsSection;
