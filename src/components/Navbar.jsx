
import React from "react";
import cartIcon from "../assets/products/shopping-cart.png";

const Navbar = ({ cart }) => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          
          {/* Cart Icon + Count */}
          <div className="relative cursor-pointer">
            <img 
              src={cartIcon} 
              alt="cart" 
              className="w-6 h-6 hover:scale-110 transition"
            />

            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 py-[2px] rounded-full">
              {cart.length}
            </span>
          </div>

          <button className="text-gray-600 hover:text-purple-600">
            Login
          </button>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
