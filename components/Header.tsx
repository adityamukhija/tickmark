'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-emerald-50/30 via-teal-50/30 to-cyan-50/30 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with layered background */}
          <Link href="/" className="flex items-center transition-all group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-white/50 to-emerald-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-2 bg-white/80 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
              <Image
                src="/products/ name.png"
                alt="TickMark"
                width={180}
                height={45}
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 relative ${
                  isActive(link.href)
                    ? 'text-emerald-700 bg-white/80 shadow-md'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-white/60 hover:shadow-sm'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-sm"></span>
                )}
              </Link>
            ))}
            
            {/* Call to Action Button - Layered */}
            <div className="ml-4 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-lg opacity-75 group-hover:opacity-100 blur group-hover:blur-sm transition duration-300"></div>
              <Link
                href="/products"
                className="relative px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-white/60 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t-2 border-white/40">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive(link.href)
                      ? 'text-emerald-700 bg-white/80 shadow-sm'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-white/60'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg text-center shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
