'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SLIDES = [
  { type: 'image' as const },
  {
    type: 'promo' as const,
    bg: 'linear-gradient(120deg,#0E7D56,#0a5e41)',
    eyebrow: 'Industrial PPE',
    heading: 'Built to protect, every shift.',
    href: '/products?category=gloves',
    btnLabel: 'Shop Safety',
  },
  {
    type: 'promo' as const,
    bg: 'linear-gradient(120deg,#173d57,#0b2536)',
    eyebrow: 'Healthcare Range',
    heading: 'Medical-grade, clinic-trusted.',
    href: '/products?category=medical-supplies',
    btnLabel: 'Shop Health',
  },
];

const DUR = 5200;

export default function PromoSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
  const t0Ref = useRef<number>(0);
  const total = SLIDES.length;

  const go = useCallback((n: number) => {
    const next = ((n % total) + total) % total;
    setIdx(next);
    if (trackRef.current) trackRef.current.style.transform = `translateX(-${next * 100}%)`;
  }, [total]);

  const tick = useCallback((now: number) => {
    if (!t0Ref.current) t0Ref.current = now;
    const p = Math.min((now - t0Ref.current) / DUR, 1);
    if (barRef.current) barRef.current.style.width = `${p * 100}%`;
    if (p >= 1) {
      t0Ref.current = now;
      setIdx(prev => {
        const next = (prev + 1) % total;
        if (trackRef.current) trackRef.current.style.transform = `translateX(-${next * 100}%)`;
        return next;
      });
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [total]);

  const play = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    t0Ref.current = 0;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    if (!paused) play(); else stop();
    return stop;
  }, [paused, play, stop]);

  const next = () => { go(idx + 1); play(); };
  const prev = () => { go(idx - 1); play(); };

  return (
    <section style={{ padding: '60px 0', background: 'linear-gradient(180deg,var(--paper),var(--mint))' }}>
      <div className="wrap">
        <div
          style={{ position: 'relative', borderRadius: 'var(--r-xl)', overflow: 'hidden', border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', background: '#fff' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onKeyDown={e => { if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); }}
          tabIndex={0}
        >
          {/* Track */}
          <div
            ref={trackRef}
            style={{ display: 'flex', transition: 'transform .6s cubic-bezier(.65,.05,.2,1)', willChange: 'transform' }}
          >
            {SLIDES.map((slide, i) => (
              <div key={i} style={{ flex: '0 0 100%', position: 'relative', aspectRatio: '930/186', background: '#fff' }}>
                {slide.type === 'image' ? (
                  <Image
                    src="/hero-bg.png"
                    alt="TickMark safety products"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={i === 0}
                  />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, background: slide.bg, display: 'flex', alignItems: 'center', padding: '0 7%', overflow: 'hidden' }}>
                    {/* tick watermark */}
                    <div style={{
                      position: 'absolute', inset: 0, opacity: .1,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='2.4' d='M24 36 l8 8 16-18'/%3E%3C/svg%3E")`,
                      backgroundSize: '70px 70px',
                    }} />
                    <div style={{ position: 'relative', zIndex: 2, maxWidth: '70%' }}>
                      <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#9af0c9', marginBottom: 8 }}>
                        {slide.eyebrow}
                      </span>
                      <h3 style={{ color: '#fff', fontSize: 'clamp(18px,2.5vw,30px)', lineHeight: 1.05, fontFamily: 'var(--font-display)', fontWeight: 600, margin: 0 }}>
                        {slide.heading}
                      </h3>
                      <Link href={slide.href} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'clamp(10px,1.5vw,18px)',
                        fontWeight: 700, fontSize: 14, padding: '10px 20px', borderRadius: 999,
                        background: '#fff', color: slide.bg.includes('0E7D56') ? 'var(--green-deep)' : 'var(--ink)',
                        transition: 'opacity .2s',
                      }}>
                        {slide.btnLabel}
                      </Link>
                    </div>
                    {/* circle accent */}
                    <div style={{ position: 'absolute', right: '-6%', top: '50%', transform: 'translateY(-50%)', width: '46%', aspectRatio: '1', borderRadius: '50%', background: 'rgba(255,255,255,.07)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            style={{
              position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)',
              width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--line)',
              background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(6px)',
              color: 'var(--ink)', display: 'grid', placeItems: 'center', cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)', zIndex: 6, transition: 'background .2s, color .2s',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next slide"
            style={{
              position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)',
              width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--line)',
              background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(6px)',
              color: 'var(--ink)', display: 'grid', placeItems: 'center', cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)', zIndex: 6, transition: 'background .2s, color .2s',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Counter */}
          <div style={{
            position: 'absolute', top: 14, right: 16, zIndex: 6,
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#fff',
            background: 'rgba(8,24,36,.5)', backdropFilter: 'blur(6px)',
            padding: '6px 12px', borderRadius: 999, letterSpacing: '.04em',
          }}>
            <b style={{ color: '#5fe0a8' }}>{String(idx + 1).padStart(2, '0')}</b>
            {' / '}
            {String(total).padStart(2, '0')}
          </div>

          {/* Dots */}
          <div style={{ position: 'absolute', left: '50%', bottom: 16, transform: 'translateX(-50%)', display: 'flex', gap: 10, alignItems: 'center', zIndex: 6 }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { go(i); play(); }}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === idx ? 34 : 12, height: 12, borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0,
                  background: i === idx ? 'var(--green)' : 'rgba(255,255,255,.55)',
                  transition: 'width .3s ease, background .3s',
                  boxShadow: '0 0 0 1px rgba(8,24,36,.15)',
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ position: 'absolute', left: 0, bottom: 0, height: 4, width: '100%', background: 'rgba(255,255,255,.25)', zIndex: 6 }}>
            <i ref={barRef} style={{ display: 'block', height: '100%', width: 0, background: 'var(--green)', transition: 'width .1s linear' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
