"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = ["/1.png", "/3.png"];
const INTERVAL_MS = 5000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Prevent double interval in React Strict Mode
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL_MS);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {IMAGES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Hero slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black leading-tight font-figtree drop-shadow-lg">
          Hult Prize X RCC 
          <br />
          <span className="text-heritage">
            Institute of Information Technology
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-100 drop-shadow-md">
          A student-powered platform where innovation meets purpose, enabling solutions to real-world problems aligned with the UN Sustainable Development Goals.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#about"
            className="bg-heritage text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
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
