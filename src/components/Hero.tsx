"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Make sure 1.png, 2.png, and 3.png are in your /public folder!
const IMAGES = ["/1.png", "/2.png", "/3.png"]; 
const INTERVAL_MS = 5000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Layer */}
      {IMAGES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0} // Load the first image immediately
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black leading-tight font-figtree drop-shadow-lg">
          Hult Prize at
          <br />
          <span className="text-heritage">RCC Institute of Information Technology</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-100 drop-shadow-md">
          A campus hub for impact-driven innovation — where students design solutions aligned
          with the UN Sustainable Development Goals.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#about" 
            className="bg-heritage hover:bg-purple text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            Learn More
          </a>
          <a 
            href="#contact" 
            className="border-2 border-white text-white hover:bg-white hover:text-midnight px-8 py-4 rounded-full font-bold transition-all shadow-lg"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}