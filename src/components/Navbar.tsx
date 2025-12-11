'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'squad', label: 'Meet Our Squad' },
  { id: 'partner', label: 'Partner With Us' },
  { id: 'resources', label: 'Resources' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-[#191919]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Hult Prize" className="h-10 w-auto" />
          <span className="h-8 w-px bg-white"></span>
          <span className="text-gallery text-sm text-[#FFFFFF]">RCC Institute of Information Technology</span>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((n) => (
            <a 
              key={n.id} 
              href={`#${n.id}`} 
              onClick={() => handleLinkClick(n.id)}
              className={`transition ${activeLink === n.id ? 'text-[#EC2088]' : 'text-white hover:text-[#EC2088]'}`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} aria-label="menu" className="text-white">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-blackish/95 border-t border-gallery/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((n) => (
              <a 
                key={n.id} 
                href={`#${n.id}`} 
                onClick={() => handleLinkClick(n.id)}
                className={`py-2 transition ${activeLink === n.id ? 'text-[#EC2088]' : 'text-white'}`}
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
