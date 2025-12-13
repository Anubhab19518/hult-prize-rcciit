import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Squad from "../components/Squad";
import Partner from "../components/Partner";
import Resources from "../components/Resources";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Squad />
        <Partner />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}