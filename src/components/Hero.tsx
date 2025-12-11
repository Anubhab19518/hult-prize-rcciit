"use client";
import React, { useEffect, useRef, useState } from "react";

const IMAGES = ["/1.png", "/2.png", "/3.png"]; 
const INTERVAL_MS = 5000;
const FADE_MS = 900; // should match CSS duration (ms)

export default function Hero() {
  // currentIndex determines which image is "active"
  const [currentIndex, setCurrentIndex] = useState(0);
  // which layer shows the current image (0 or 1). We swap layers to crossfade.
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const timerRef = useRef<number | null>(null);

  // Preload images
  useEffect(() => {
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // advance function
  const advance = () => {
    setCurrentIndex((i) => (i + 1) % IMAGES.length);
    setActiveLayer((l) => (l === 0 ? 1 : 0));
  };

  // interval setup/cleanup
  useEffect(() => {
    // use window.setInterval so the id is numeric in TS
    timerRef.current = window.setInterval(advance, INTERVAL_MS) as unknown as number;
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // When currentIndex changes, we also remove any pending timers (debounce)
  // Not strictly required but stabilizes behavior when user navigates etc.
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(advance, INTERVAL_MS) as unknown as number;
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  // compute srcs for both layers:
  // activeLayer shows images[currentIndex], the other shows previous image
  const activeSrc = IMAGES[currentIndex];
  const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
  const previousSrc = IMAGES[prevIndex];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Layer 0 */}
        <div
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-[900ms] ease-in-out ${
            activeLayer === 0 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${activeLayer === 0 ? activeSrc : previousSrc}')`,
          }}
        />
        {/* Layer 1 */}
        <div
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-[900ms] ease-in-out ${
            activeLayer === 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${activeLayer === 1 ? activeSrc : previousSrc}')`,
          }}
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-black leading-tight font-figtree">
          Hult Prize at
          <br />
          RCC Institute of Information Technology
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          A campus hub for impact-driven innovation — where students design solutions aligned
          with the UN Sustainable Development Goals and build sustainable ventures.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#about" className="bg-heritage px-6 py-3 rounded-full font-semibold text-white">
            Learn More
          </a>
          <a href="#contact" className="border border-white px-6 py-3 rounded-full">
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
