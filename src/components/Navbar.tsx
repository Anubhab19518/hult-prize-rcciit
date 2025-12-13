'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // The professional way to load images

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'squad', label: 'Meet Our Squad' },
  { id: 'partner', label: 'Partner With Us' },
  { id: 'resources', label: 'Resources' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setOpen(false);
  };

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-blackish shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {/* Ensure 'logo.png' is inside your public folder! */}
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image 
              src="/logo.png" 
              alt="Hult Prize Logo" 
              fill
              className="object-contain"
              priority // Loads this immediately since it's above the fold
            />
          </div>
          {/* Vertical Separator */}
          <span className="h-8 w-px bg-gallery/30"></span>
          
          {/* University Name - Brand Compliant */}
          <span className="text-gallery text-sm font-medium leading-tight max-w-[150px] md:max-w-none">
            RCC Institute of Information Technology
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((n) => (
            <a 
              key={n.id} 
              href={`#${n.id}`} 
              onClick={() => handleLinkClick(n.id)}
              className={`text-sm font-semibold transition-colors duration-200 ${
                activeLink === n.id 
                  ? 'text-heritage' 
                  : 'text-gallery hover:text-heritage'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)} 
            aria-label="Toggle menu" 
            className="text-gallery focus:outline-none"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-blackish/95 border-t border-gallery/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((n) => (
              <a 
                key={n.id} 
                href={`#${n.id}`} 
                onClick={() => handleLinkClick(n.id)}
                className={`py-2 text-base transition-colors ${
                  activeLink === n.id 
                    ? 'text-heritage font-bold' 
                    : 'text-gallery'
                }`}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}