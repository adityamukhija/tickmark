'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const categoryLabels: Record<string, string> = {
  gloves: 'Gloves',
  masks: 'Masks',
  'walking-sticks': 'Walking Sticks',
  'medical-supplies': 'Medical Supplies',
  'protective-wear': 'Protective Wear',
};

const subcategoryLabels: Record<string, string> = {
  industrial: 'Industrial',
  domestic: 'Domestic',
  examination: 'Examination',
};

export default function ProductDetail({ product }: { product: Product }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialIdx = parseInt(searchParams.get('color') ?? '0', 10);
  const [selectedIdx, setSelectedIdx] = useState(isNaN(initialIdx) ? 0 : initialIdx);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const param = searchParams.get('color');
    if (param) {
      const n = parseInt(param, 10);
      if (!isNaN(n) && product.colors && n >= 0 && n < product.colors.length) {
        setSelectedIdx(n);
      }
    }
  }, [searchParams, product.colors]);

  const currentImage = () => {
    if (product.colors?.length) {
      const c = product.colors[selectedIdx];
      if (c?.image) return c.image;
    }
    return product.image;
  };

  const handleColor = (idx: number) => {
    setSelectedIdx(idx);
    setImgError(false);
    const params = new URLSearchParams(searchParams.toString());
    idx > 0 ? params.set('color', String(idx)) : params.delete('color');
    router.replace(`/products/${product.id}${params.size ? `?${params}` : ''}`, { scroll: false });
  };

  const hasBuyLink = product.links.flipkart && product.links.flipkart !== 'https://flipkart.com/product/example';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="detail-grid">

      {/* ── Left: Image ── */}
      <div style={{
        position: 'relative', aspectRatio: '1/1', borderRadius: 'var(--r-lg)',
        overflow: 'hidden', border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)',
        background: 'radial-gradient(120% 100% at 50% 0%, var(--mint-2), var(--green-tint))',
        display: 'grid', placeItems: 'center', padding: 40,
      }}>
        {!imgError ? (
          <Image
            src={currentImage()}
            alt={product.name}
            fill
            style={{ objectFit: 'contain', padding: 40, mixBlendMode: 'multiply' }}
            priority
            sizes="(max-width: 860px) 100vw, 50vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={{ color: 'var(--ink-faint)', fontSize: 14 }}>Image not available</div>
        )}

        {/* Selected colour badge */}
        {product.colors && product.colors.length > 0 && (
          <div style={{
            position: 'absolute', top: 16, right: 16,
            background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(6px)',
            border: '1px solid var(--line)', borderRadius: 999,
            padding: '6px 14px', fontSize: 13, fontWeight: 600, color: 'var(--ink)',
            boxShadow: 'var(--shadow-sm)',
          }}>
            {product.colors[selectedIdx]?.name}
          </div>
        )}
      </div>

      {/* ── Right: Info ── */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        {/* Category tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          <span style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
            color: 'var(--ink-soft)', background: 'var(--mint)', border: '1px solid var(--line)',
            padding: '5px 14px', borderRadius: 999,
          }}>
            {categoryLabels[product.category] ?? product.category}
          </span>
          {product.subcategory && (
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
              color: 'var(--green-deep)', background: 'var(--green-tint)', border: '1px solid rgba(14,159,110,.2)',
              padding: '5px 14px', borderRadius: 999,
            }}>
              {subcategoryLabels[product.subcategory] ?? product.subcategory}
            </span>
          )}
        </div>

        {/* Name */}
        <h1 style={{ fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.1, marginBottom: 20 }}>
          {product.name}
        </h1>

        {/* Description */}
        <p style={{ fontSize: 16.5, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 32 }}>
          {product.description}
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--line)', marginBottom: 32 }} />

        {/* Color options */}
        {product.colors && product.colors.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)', marginBottom: 14, letterSpacing: '.04em', textTransform: 'uppercase' }}>
              Available Colors
              <span style={{ fontWeight: 400, color: 'var(--ink-faint)', marginLeft: 8, textTransform: 'none', letterSpacing: 0 }}>
                ({product.colors.length})
              </span>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleColor(idx)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '8px 16px', borderRadius: 999, cursor: 'pointer',
                    border: `2px solid ${selectedIdx === idx ? 'var(--green)' : 'var(--line-strong)'}`,
                    background: selectedIdx === idx ? 'var(--green-tint)' : '#fff',
                    transition: 'all .18s ease',
                    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                    color: selectedIdx === idx ? 'var(--green-deep)' : 'var(--ink-soft)',
                  }}
                >
                  <span style={{
                    width: 20, height: 20, borderRadius: '50%', background: color.hex, flex: 'none',
                    border: color.hex === '#FFFFFF' || color.name.toLowerCase() === 'white' ? '1.5px solid #ddd' : '1.5px solid rgba(0,0,0,.1)',
                    boxShadow: '0 1px 3px rgba(0,0,0,.15)',
                  }} />
                  {color.name}
                  {selectedIdx === idx && (
                    <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 16, height: 16, color: 'var(--green)' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Buy Now */}
        {hasBuyLink ? (
          <a
            href={product.links.flipkart}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              padding: '16px 32px', borderRadius: 999,
              background: 'var(--green)', color: '#fff',
              fontWeight: 700, fontSize: 17,
              boxShadow: '0 10px 28px -10px rgba(14,159,110,.8)',
              transition: 'background .2s, transform .18s',
              marginBottom: 24,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-deep)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Buy Now on Flipkart
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
        ) : (
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              padding: '16px 32px', borderRadius: 999,
              background: 'var(--ink)', color: '#fff',
              fontWeight: 700, fontSize: 17, marginBottom: 24,
            }}
          >
            Enquire About This Product
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        )}

        {/* Back link */}
        <Link href="/products" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 14.5, fontWeight: 600, color: 'var(--ink-soft)',
          transition: 'color .2s',
        }}
        className="hover:text-green-700"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to All Products
        </Link>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .detail-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </div>
  );
}
