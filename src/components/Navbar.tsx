"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#food-gallery' },
    { name: 'Events', href: '/#events' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Delivery', href: '/#delivery' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full py-6 px-8 z-50
  bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm text-[#1c5302]">

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold whitespace-nowrap">
          Rumah Restaurant
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden text-lg md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="font-semibold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <ul className="flex flex-col space-y-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.name} className="border-b border-white/10 pb-2">
              <Link 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/90 font-medium block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;