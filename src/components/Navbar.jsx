import React, { useState } from "react";
import cartIcon from "../assets/products/shopping-cart.png";

const Navbar = ({ cart }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b relative z-50 overflow-x-hidden">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 py-4">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-gray-600 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Cart */}
          <div className="relative cursor-pointer">
            <img src={cartIcon} alt="cart" className="w-5 md:w-6 h-5 md:h-6" />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-[2px] rounded-full">
              {cart.length}
            </span>
          </div>

          {/* Desktop Buttons */}
          <button className="hidden md:block text-gray-600 hover:text-purple-600">
            Login
          </button>

          <button className="hidden md:block bg-purple-600 text-white px-4 md:px-5 py-2 rounded-full hover:bg-purple-700">
            Get Started
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-white shadow-lg border-t z-[999]">

          <ul className="flex flex-col gap-4 p-5 text-gray-700 font-medium">

            <li onClick={() => setOpen(false)}>Products</li>
            <li onClick={() => setOpen(false)}>Features</li>
            <li onClick={() => setOpen(false)}>Pricing</li>
            <li onClick={() => setOpen(false)}>Testimonials</li>
            <li onClick={() => setOpen(false)}>FAQ</li>

            <button className="text-left text-gray-600">Login</button>

            <button className="bg-purple-600 text-white py-2 rounded-full">
              Get Started
            </button>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;