'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/products/ name.png"
              alt="TickMark"
              width={200}
              height={50}
              className="h-12 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>
          <div className="flex justify-end">
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-cyan-100 transition-colors font-medium">
                Home
              </Link>
              <Link href="/products" className="text-white hover:text-cyan-100 transition-colors font-medium">
                Products
              </Link>
              <Link href="/about" className="text-white hover:text-cyan-100 transition-colors font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-white hover:text-cyan-100 transition-colors font-medium">
                Contact Us
              </Link>
            </div>
            <button
              className="md:hidden text-white hover:text-cyan-100 transition-colors"
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
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-cyan-100 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-white hover:text-cyan-100 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-cyan-100 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-cyan-100 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

