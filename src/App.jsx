import React from "react";
import Hero from "./componants/Hero";
import About from "./componants/About";
import Navbar from "./componants/Navbar";
import Features from "./componants/Features";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
