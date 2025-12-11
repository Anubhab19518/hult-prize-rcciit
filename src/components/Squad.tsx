"use client";
import React, { useState } from 'react';
import { TEAM } from '../utils/data';

export default function Squad(){
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="squad" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-midnight text-[#8A2890]">Meet Our Team</h2>
          <div className="w-16 h-1 bg-[#EC2088] mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((m, idx) => (
            <div
              key={idx}
              className="border-2 border-heritage rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              onMouseEnter={() => setHoveredId(idx)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container with Hover Quote */}
              <div className="relative w-40 h-40 mb-6">
                <img
                  src={m.img}
                  alt={m.name}
                  className={`w-full h-full rounded-full object-cover transition-opacity duration-300 ${hoveredId === idx ? 'opacity-0' : 'opacity-100'}`}
                />
                {/* Hover Quote Overlay */}
                <div
                  className={`absolute inset-0 rounded-full bg-heritage flex items-center justify-center p-4 transition-opacity duration-300 ${hoveredId === idx ? 'opacity-100' : 'opacity-0'}`}
                >
                  <p className="text-[#EC2088] text-sm font-semibold italic">"{m.quote || 'Driving impact through innovation'}"</p>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-midnight">{m.name}</h3>

              {/* Role - Only show if defined */}
              {m.role && (
                <p className="text-heritage font-semibold text-sm uppercase mt-2 tracking-wide">{m.role}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
