import React from "react";

const Stats = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center text-white">

        <div className="md:border-r md:border-white/30">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="mt-2 text-sm opacity-80">Active Users</p>
        </div>

        <div className="md:border-r md:border-white/30">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="mt-2 text-sm opacity-80">Premium Tools</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="mt-2 text-sm opacity-80">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;