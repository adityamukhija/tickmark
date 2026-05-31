'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

type DesignCat = 'all' | 'health' | 'safety' | 'hygiene';

function getDesignCat(p: Product): DesignCat {
  if (p.category === 'medical-supplies' || p.category === 'walking-sticks') return 'health';
  if (p.subcategory === 'examination') return 'health';
  if (p.subcategory === 'industrial') return 'safety';
  if (p.subcategory === 'domestic') return 'hygiene';
  if (p.category === 'masks') return 'hygiene';
  if (p.category === 'protective-wear') return 'hygiene';
  return 'safety';
}

const CHIPS: { id: DesignCat; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'health', label: 'Health' },
  { id: 'safety', label: 'Safety' },
  { id: 'hygiene', label: 'Hygiene' },
];

export default function ProductsPage() {
  const [active, setActive] = useState<DesignCat>('all');

  const filtered = products.filter(p => active === 'all' || getDesignCat(p) === active);

  return (
    <div>
      {/* Page hero */}
      <section style={{
        position: 'relative', overflow: 'hidden', padding: '64px 0 56px',
        borderBottom: '1px solid var(--line)',
        background: 'radial-gradient(900px 420px at 80% -20%,var(--green-tint),transparent 60%),linear-gradient(180deg,var(--mint-2),var(--paper))',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, opacity: .05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill='none' stroke='%230E2A3F' stroke-width='2.4' d='M26 41 l9 9 19-21'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }} />
        <div className="wrap" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13.5, color: 'var(--ink-soft)', marginBottom: 14 }}>
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
            <span style={{ color: 'var(--ink-faint)' }}>/</span>
            <span>Products</span>
          </div>
          <span className="eyebrow">Our Catalogue</span>
          <h1 style={{ fontSize: 'clamp(34px,4.4vw,54px)', marginTop: 14 }}>Quality safety products for every workplace.</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', marginTop: 16, maxWidth: 620 }}>
            From medical-grade examination gloves to industrial PPE — browse our full range, all quality-assured and available on Amazon, Flipkart and Meesho.
          </p>

          {/* Filter chips */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 34 }}>
            {CHIPS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                style={{
                  fontWeight: 600, fontSize: 14,
                  padding: '10px 20px', borderRadius: 999, cursor: 'pointer',
                  transition: 'all .2s',
                  background: active === id ? 'var(--ink)' : '#fff',
                  color: active === id ? '#fff' : 'var(--ink-soft)',
                  border: `1px solid ${active === id ? 'var(--ink)' : 'var(--line-strong)'}`,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section style={{ padding: '54px 0 96px' }}>
        <div className="wrap">
          <p style={{ fontSize: 14, color: 'var(--ink-faint)', marginBottom: 32 }}>
            Showing <strong style={{ color: 'var(--ink)' }}>{filtered.length}</strong> {filtered.length === 1 ? 'product' : 'products'}
          </p>
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="products-grid">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--ink-soft)' }}>No products in this category.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="wrap">
          <div style={{
            position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-xl)',
            background: 'linear-gradient(135deg,var(--green-deep),var(--green))',
            color: '#fff', padding: '60px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: 40, flexWrap: 'wrap',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <div style={{ position: 'absolute', right: -60, top: -60, width: 340, height: 340, borderRadius: '50%', background: 'rgba(255,255,255,.10)' }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>Need bulk quantities or a custom order?</h2>
              <p style={{ color: 'rgba(255,255,255,.88)', marginTop: 12, fontSize: 17 }}>Get tailored pricing, certification documents and dedicated support within 24 hours.</p>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', position: 'relative' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999,
                background: '#fff', color: 'var(--green-deep)',
              }}>Request a Quote</Link>
              <a href="tel:+919911677477" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999,
                background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.6)',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                  <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"/>
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1080px) { .products-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .products-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
