"use client";
import React from 'react';
import Image from 'next/image';
import { Target, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        // subtle vertical gradient based on Hult colors
        background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(236,32,136,0.03) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-purple font-figtree">
            About Us
          </h2>
          <div className="w-24 h-1.5 bg-heritage rounded-full mt-4 mb-8"></div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The <span className="font-bold text-midnight">Hult Prize</span> is the world’s largest student movement for social impact. 
            We empower students at RCCIIT to build startups that address global challenges 
            aligned with the <span className="font-semibold text-heritage">UN Sustainable Development Goals (SDGs)</span>.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our chapter serves as the launchpad for your journey—providing the mentorship, 
            network, and stage you need to turn a wild idea into a sustainable venture.
          </p>

          {/* Feature List with Icons */}
          <div className="space-y-6">
            
            <div className="flex items-start gap-4">
              <div className="bg-purple/10 p-3 rounded-full text-purple">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-midnight text-lg">Community & Mentorship</h4>
                <p className="text-gray-600 text-sm">Connect with alumni, industry experts, and like-minded peers.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-sky/10 p-3 rounded-full text-sky">
                <Target size={24} />
              </div>
              <div>
                <h4 className="font-bold text-midnight text-lg">Impact Workshops</h4>
                <p className="text-gray-600 text-sm">Learn design thinking, business modeling, and pitch perfection.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-heritage/10 p-3 rounded-full text-heritage">
                <Trophy size={24} />
              </div>
              <div>
                <h4 className="font-bold text-midnight text-lg">The Competition</h4>
                <p className="text-gray-600 text-sm">Win the On-Campus round to fast-track your team to the Regional Summits.</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="relative">
          {/* Decorative Blob */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-sun/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Make sure banner.png exists in your public folder! */}
            <Image 
              src="/Banner.png" 
              alt="Hult Prize Students Celebrating" 
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-heritage max-w-[200px]">
            <p className="text-sm font-bold text-midnight">
              "Changing the world through social enterprise."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}