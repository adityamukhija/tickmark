'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const nav = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        padding: stuck ? '10px 0' : '18px 0',
        transition: 'padding .25s ease',
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            background: 'rgba(255,255,255,.85)',
            backdropFilter: 'saturate(160%) blur(14px)',
            WebkitBackdropFilter: 'saturate(160%) blur(14px)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--r-xl)',
            padding: '12px 12px 12px 22px',
            boxShadow: stuck ? 'var(--shadow-md)' : 'var(--shadow-sm)',
            transition: 'box-shadow .25s ease',
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="TickMark home">
            <Image
              src="/logo.png"
              alt="TickMark"
              width={210}
              height={42}
              style={{ height: 42, width: 'auto', objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="hidden md:flex">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  position: 'relative',
                  fontWeight: 600,
                  fontSize: 15,
                  color: isActive(href) ? 'var(--green-deep)' : 'var(--ink-soft)',
                  padding: '10px 16px',
                  borderRadius: 999,
                  transition: 'color .2s, background .2s',
                }}
                className="hover:bg-black/5"
              >
                {label}
                {isActive(href) && (
                  <span style={{
                    position: 'absolute',
                    left: 16, right: 16, bottom: 4,
                    height: 2, borderRadius: 2,
                    background: 'var(--green)',
                  }} />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link
              href="/contact"
              className="hidden md:inline-flex"
              style={{
                alignItems: 'center',
                gap: 10,
                fontWeight: 700,
                fontSize: 15,
                padding: '12px 22px',
                borderRadius: 999,
                border: '1px solid var(--line-strong)',
                background: '#fff',
                color: 'var(--ink)',
                transition: 'transform .18s, box-shadow .25s, border-color .2s',
                whiteSpace: 'nowrap',
              }}
            >
              Get a Quote
            </Link>
            <Link
              href="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontWeight: 700,
                fontSize: 15,
                padding: '12px 22px',
                borderRadius: 999,
                background: 'var(--green)',
                color: '#fff',
                boxShadow: '0 10px 22px -10px rgba(14,159,110,.8)',
                transition: 'background .2s, transform .18s',
                whiteSpace: 'nowrap',
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
              </svg>
              Shop Now
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              aria-label="Menu"
              style={{
                display: 'grid',
                placeItems: 'center',
                width: 46, height: 46,
                borderRadius: 14,
                background: 'var(--ink)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" style={{ width: 22, height: 22 }}>
                {mobileOpen
                  ? <path d="M6 18L18 6M6 6l12 12"/>
                  : <path d="M3 6h18M3 12h18M3 18h18"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            marginTop: 8,
            background: 'rgba(255,255,255,.95)',
            backdropFilter: 'blur(14px)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--r-lg)',
            padding: '12px 8px',
            boxShadow: 'var(--shadow-md)',
          }}>
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  borderRadius: 12,
                  fontWeight: 600,
                  color: isActive(href) ? 'var(--green-deep)' : 'var(--ink-soft)',
                  background: isActive(href) ? 'var(--green-tint)' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                margin: '8px 8px 4px',
                padding: '12px 16px',
                borderRadius: 12,
                fontWeight: 700,
                background: 'var(--green)',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
