"use client";
import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blackish text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* BRANDING SECTION */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              {/* Ensure this is the WHITE version of the logo for dark backgrounds */}
              <div className="relative w-14 h-14 md:w-16 md:h-16">
                <Image 
                  src="/logo.png" 
                  alt="Hult Prize Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              {/* Vertical Divider */}
              <div className="w-px h-10 bg-gray-600"></div>
              {/* University Name */}
              <p className="font-figtree font-bold leading-tight text-lg">
                RCC Institute of <br /> Information Technology
              </p>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The Hult Prize at RCCIIT empowers student entrepreneurs to solve the world's 
              toughest challenges through innovative social enterprises.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-heritage">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-heritage transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-heritage transition-colors">About Us</a></li>
              <li><a href="#squad" className="hover:text-heritage transition-colors">Meet the Team</a></li>
              <li><a href="#partner" className="hover:text-heritage transition-colors">Partner With Us</a></li>
              <li><a href="#resources" className="hover:text-heritage transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* CONTACT & SOCIALS */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-heritage">Get in Touch</h4>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-purple mt-1" />
                <span className="text-sm">Canal S Rd, Beleghata, Kolkata – 700 015</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-purple" />
                <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=hultprizercciit@gmail.com" className="text-sm hover:text-white">hultprizercciit@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-purple" />
                <span className="text-sm">+91 80138 32570</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-purple" />
                <span className="text-sm">+91 87777 23225</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/hp.rcciit/" className="bg-gray-800 p-2 rounded-full hover:bg-heritage transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/hult-prize-rcc-institute-of-information-technology" className="bg-gray-800 p-2 rounded-full hover:bg-heritage transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {year} Hult Prize at RCCIIT. All rights reserved.</p>
          <p>Designed with ❤️ by the Tech Team</p>
        </div>
      </div>
    </footer>
  );
}