import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(236,32,136,0.10) 0%, rgba(255,255,255,0.80) 45%, rgba(18,177,231,0.10) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-5xl text-[#8A2890] font-figtree font-semibold">About Us</h2>
          <div className="w-20 h-1.5 bg-[#EC2088] rounded-full mt-4"></div>

          <p className="mt-6 text-lg text-[#191919] leading-relaxed">
            The Hult Prize is the world’s largest student movement for social impact. 
            It empowers students to build startups that address global challenges 
            aligned with the UN SDGs. Our chapter supports workshops, mentorship, 
            and the on-campus competition to help students turn ideas into 
            sustainable ventures.
          </p>

          <ul className="mt-6 space-y-2 text-[#191919]">
            <li>• Workshops, bootcamps & mentorship</li>
            <li>• Team-building & idea validation</li>
            <li>• On-campus competition and pathway to nationals</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="overflow-hidden">
          <div className="rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="/banner.png" 
              alt="Hult Prize" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
