"use client";
import React from 'react';
import { CheckCircle2, Send } from 'lucide-react'; // Make sure you installed lucide-react!

export default function Partner() {
  return (
    <section id="partner" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE: Content */}
        <div>
          {/* HEADING - Matching Squad.tsx style */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-purple">Partner With Us</h2>
            <div className="w-20 h-1.5 bg-heritage mt-4 rounded-full"></div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We invite companies, NGOs, and ecosystem partners to collaborate with the 
            Hult Prize at RCCIIT. Join us in shaping the next generation of social entrepreneurs 
            through mentorship, sponsorship, and workshops.
          </p>

          {/* Benefits List with Icons */}
          <div className="space-y-4">
            {[
              "Sponsorship & Brand Visibility",
              "Mentorship & Workshop Opportunities",
              "Jury Participation in Quarter-Finals",
              "Access to Student Ventures & Talent"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-heritage w-6 h-6 flex-shrink-0" />
                <span className="text-midnight font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Contact Info Mini-Card */}
          <div className="mt-10 p-6 bg-white border-l-4 border-heritage rounded-r-xl shadow-sm">
            <h4 className="font-bold text-midnight text-lg">Direct Contact</h4>
            <p className="text-gray-600 mt-1">hultprizercciit@gmail.com</p>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>

          <h3 className="text-2xl font-bold text-midnight mb-6 relative z-10">Send a Proposal</h3>
          
          <form className="space-y-5 relative z-10">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="Full Name" 
              />
            </div>

            {/* Org Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Organization / Brand</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="Company Name" 
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Official Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="email@company.com" 
              />
            </div>

            {/* Dropdown */}
            <div>
              <label htmlFor="partnership-type" className="block text-sm font-semibold text-gray-700 mb-2">Partnership Type</label>
              <div className="relative">
                <select id="partnership-type" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer">
                  <option>Sponsorship</option>
                  <option>Mentorship</option>
                  <option>Workshops / Training</option>
                  <option>Other Collaboration</option>
                </select>
                {/* Custom arrow alignment if needed, standard select works for now */}
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                placeholder="How would you like to collaborate?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-midnight hover:bg-purple text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>Submit Proposal</span>
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}