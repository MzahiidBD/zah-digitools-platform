import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import StepsSection from "./components/StepsSection";
import PricingSection from "./components/PricingSection";

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
    </div>
  );
}

export default App;