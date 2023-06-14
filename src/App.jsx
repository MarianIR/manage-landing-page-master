import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Simplify from "./Simplify";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Simplify />
      <Footer />
    </>
  );
};

export default App;
