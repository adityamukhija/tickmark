import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

function getCategoryTag(product: Product): string {
  if (product.category === 'medical-supplies' || product.category === 'walking-sticks') return 'Health';
  if (product.subcategory === 'examination') return 'Health';
  if (product.subcategory === 'industrial') return 'Safety';
  if (product.subcategory === 'domestic') return 'Hygiene';
  if (product.category === 'masks') return 'Hygiene';
  if (product.category === 'protective-wear') return 'Hygiene';
  return 'Safety';
}

export default function ProductCard({ product }: { product: Product }) {
  const tag = getCategoryTag(product);
  const hasBuyLink = product.links.flipkart && product.links.flipkart !== 'https://flipkart.com/product/example';

  return (
    <article className="pcard" style={{
      display: 'flex', flexDirection: 'column',
      background: '#fff', border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)', overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)', cursor: 'pointer',
    }}>
      <Link href={`/products/${product.id}`} style={{ display: 'contents' }}>
        {/* Thumbnail */}
        <div className="pcard-thumb" style={{
          position: 'relative', aspectRatio: '1/1',
          display: 'grid', placeItems: 'center', padding: 26,
          background: 'radial-gradient(120% 100% at 50% 0%, var(--mint-2), var(--green-tint))',
          overflow: 'hidden',
        }}>
          <span style={{
            position: 'absolute', top: 14, left: 14,
            fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
            color: 'var(--green-deep)', background: '#fff',
            border: '1px solid var(--line)', padding: '5px 11px', borderRadius: 999,
          }}>{tag}</span>

          {product.colors && product.colors.length > 1 && (
            <span style={{
              position: 'absolute', top: 14, right: 14,
              fontSize: 12, fontWeight: 600, color: 'var(--ink-soft)',
              background: 'rgba(255,255,255,.85)', padding: '5px 10px',
              borderRadius: 999, border: '1px solid var(--line)',
            }}>{product.colors.length} colors</span>
          )}

          <Image
            src={product.image}
            alt={product.name}
            width={240}
            height={240}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'drop-shadow(0 12px 18px rgba(14,42,63,.16))' }}
          />
        </div>

        {/* Body */}
        <div style={{ padding: '22px 22px 8px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h3 style={{ fontSize: 18, lineHeight: 1.25, fontFamily: 'var(--font-display)' }}>{product.name}</h3>
          <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 10, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {product.description}
          </p>
          {product.colors && product.colors.length > 0 && (
            <div style={{ display: 'flex', gap: 7, marginTop: 16, flexWrap: 'wrap' }}>
              {product.colors.slice(0, 6).map((c) => (
                <span key={c.name} title={c.name} style={{
                  width: 18, height: 18, borderRadius: '50%',
                  background: c.hex, border: '1px solid var(--line-strong)', display: 'block',
                }} />
              ))}
              {product.colors.length > 6 && (
                <span style={{ fontSize: 11, color: 'var(--ink-faint)', alignSelf: 'center' }}>+{product.colors.length - 6}</span>
              )}
            </div>
          )}
        </div>
      </Link>

      {/* Footer action */}
      <div style={{ padding: '16px 22px 22px' }}>
        {hasBuyLink ? (
          <a
            href={product.links.flipkart}
            target="_blank"
            rel="noopener noreferrer"
            className="pcard-buy"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontWeight: 700, fontSize: 14,
              background: 'var(--green)', color: '#fff',
              padding: '11px 18px', borderRadius: 999, transition: 'background .2s',
            }}
          >
            Buy Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
              <path d="M7 17 17 7M9 7h8v8"/>
            </svg>
          </a>
        ) : (
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontWeight: 700, fontSize: 14, background: '#fff', color: 'var(--ink)',
            border: '1px solid var(--line-strong)', padding: '11px 18px', borderRadius: 999,
          }}>
            Enquire
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}
