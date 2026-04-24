import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cart={cart} />
      <Hero />
      <Stats />
      <MainSection cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;


