'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-50/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Double Bay Newsagency
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/services', label: 'Services' },
              { href: '/diaries', label: 'Diaries & Planners' },
              { href: '/printing', label: 'Printing Services' },
              { href: '/local-business', label: 'Local Business' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-orange-700 rounded-lg transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-orange-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-orange-700 focus:outline-none transition-colors duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-3'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50/95 backdrop-blur-sm border-t border-gray-200">
          {[
            { href: '/services', label: 'Services' },
            { href: '/diaries', label: 'Diaries & Planners' },
            { href: '/printing', label: 'Printing Services' },
            { href: '/local-business', label: 'Local Business' },
            { href: '/contact', label: 'Contact' },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-orange-700 hover:bg-orange-100 rounded-lg transition-all duration-300 transform hover:translate-x-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 