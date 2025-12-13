"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { TEAM } from '../utils/data';

export default function Squad() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Fallback if TEAM is undefined/empty
  const safeTeam = TEAM || [];

  return (
    <section id="squad" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-purple">Meet Our Team</h2>
          <div className="w-20 h-1.5 bg-heritage mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {safeTeam.map((m, idx) => (
            <div
              key={idx}
              className="group border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              onMouseEnter={() => setHoveredId(idx)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container with Hover Quote */}
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-heritage transition-colors">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className={`object-cover transition-opacity duration-300 ${hoveredId === idx ? 'opacity-20' : 'opacity-100'}`}
                />
                
                {/* Hover Quote Overlay */}
                <div
                  className={`absolute inset-0 bg-heritage/90 flex items-center justify-center p-4 transition-opacity duration-300 ${hoveredId === idx ? 'opacity-100' : 'opacity-0'}`}
                >
                  <p className="text-white text-sm font-semibold italic">
                    "{m.quote || 'Driving impact through innovation'}"
                  </p>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-midnight">{m.name}</h3>

              {/* Role */}
              {m.role && (
                <p className="text-heritage font-semibold text-sm uppercase mt-2 tracking-wide">
                  {m.role}
                </p>
              )}

              {/* LinkedIn Icon */}
              {m.linkedin && m.linkedin !== '#' && (
                <a
                  href={m.linkedin.startsWith('http') ? m.linkedin : `https://${m.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center w-10 h-10 border-2 border-heritage rounded-full text-heritage hover:bg-heritage hover:text-white transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}