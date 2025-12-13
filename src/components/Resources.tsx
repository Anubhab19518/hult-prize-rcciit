"use client";
import React from 'react';
import { Construction, FileText, Presentation, Video } from 'lucide-react';

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor - Faint Hult "H" shape or gradient blob */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky via-purple to-heritage"></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* HEADING */}
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-midnight">Resources & Toolkits</h2>
          <div className="w-20 h-1.5 bg-heritage mt-4 rounded-full"></div>
        </div>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We are currently curating a comprehensive library of guides, pitch deck templates, 
          and case studies to help you build your social venture.
        </p>

        {/* Construction Zone Visual */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 shadow-sm relative">
          
          {/* The "Coming Soon" Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sun text-midnight font-bold px-8 py-2 rounded-full shadow-md flex items-center gap-2 border-2 border-white">
            <Construction size={20} />
            <span>Under Construction</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100 cursor-not-allowed">
            {/* Teaser 1 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <FileText className="text-purple w-8 h-8" />
              </div>
              <h4 className="font-semibold text-gray-400">Student Guide</h4>
            </div>

            {/* Teaser 2 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Presentation className="text-heritage w-8 h-8" />
              </div>
              <h4 className="font-semibold text-gray-400">Pitch Templates</h4>
            </div>

            {/* Teaser 3 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Video className="text-sky w-8 h-8" />
              </div>
              <h4 className="font-semibold text-gray-400">Workshops</h4>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-10 italic">
            Check back soon! We're uploading files as we speak.
          </p>
        </div>

      </div>
    </section>
  );
}