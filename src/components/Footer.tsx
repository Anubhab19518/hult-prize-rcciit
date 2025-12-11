// src/components/Footer.tsx
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#191919] text-[#FFFFFF] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LEFT SECTION */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Hult Prize" className="h-10" />
               <span className="h-8 w-px bg-white"></span>
              <h4 className="font-semibold text-gallery text-sm">
                RCC Institute of Information Technology
              </h4>
            </div>

            <p className="mt-4 text-gallery/70 max-w-md leading-relaxed">
              Empowering the next generation of social entrepreneurs at RCCIIT to
              build meaningful, scalable solutions for global challenges.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gallery/80">
              <li><a href="#home" className="hover:text-heritage">Home</a></li>
              <li><a href="#about" className="hover:text-heritage">About Us</a></li>
              <li><a href="#squad" className="hover:text-heritage">Meet Our Squad</a></li>
              <li><a href="#partner" className="hover:text-heritage">Partner With Us</a></li>
              <li><a href="#resources" className="hover:text-heritage">Resources</a></li>
              <li><a href="#contact" className="hover:text-heritage">Contact</a></li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram">
                <Instagram className="text-gallery hover:text-heritage" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="text-gallery hover:text-heritage" />
              </a>
            </div>
          </div>
        </div>

        {/* BORDER LINE */}
        <div className="border-t border-gallery/10 mt-12 pt-6 text-center text-gallery/50 text-sm">
          © {year} Hult Prize at RCCIIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
