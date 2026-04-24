import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#08142d] text-white pt-20 pb-8 border-t-2 border-purple-600">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-16 pb-16">

          {/* Logo */}
          <div className="md:w-1/5">
            <h2 className="text-5xl font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 leading-7">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div className="md:w-1/5">
            <h4 className="text-2xl font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:w-1/5">
            <h4 className="text-2xl font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:w-1/5">
            <h4 className="text-2xl font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:w-1/5">
            <h4 className="text-2xl font-semibold mb-6">Social Links</h4>

            <div className="flex gap-6">

              {/* Instagram */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-xl cursor-pointer hover:scale-110 transition">
                <FaInstagram />
              </div>

              {/* Facebook */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-xl cursor-pointer hover:scale-110 transition">
                <FaFacebookF />
              </div>

              {/* X (Twitter) */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-xl cursor-pointer hover:scale-110 transition">
                <FaXTwitter />
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <hr className="border-gray-700" />

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-8">
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