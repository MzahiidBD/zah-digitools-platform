import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import StepsSection from "./components/StepsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cart={cart} />
      <Hero />
      <Stats />

      <MainSection 
        cart={cart} 
        setCart={setCart} 
      />

      <StepsSection />
      <PricingSection />
      <Footer />
      
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;