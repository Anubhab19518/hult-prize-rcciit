// app/page.tsx
import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Squad from "../src/components/Squad";
import Partner from "../src/components/Partner";
import Resources from "../src/components/Resources";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

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
