import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import PromoSlider from '@/components/PromoSlider';

export default function Home() {
  const topProducts = products.filter(p => p.isTopProduct);

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(1100px 520px at 88% -8%, var(--green-tint), transparent 60%), linear-gradient(180deg, var(--mint-2), var(--paper) 70%)',
      }}>
        {/* tick watermark */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, opacity: .05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill='none' stroke='%230E2A3F' stroke-width='2.4' d='M26 41 l9 9 19-21'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'linear-gradient(180deg,#000,transparent 80%)',
          maskImage: 'linear-gradient(180deg,#000,transparent 80%)',
        }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56, alignItems: 'center', padding: '64px 0 76px' }} className="hero-inner">
            {/* Left copy */}
            <div style={{ maxWidth: 560 }}>
              <span className="eyebrow">Safety Today, Secure Tomorrow</span>
              <h1 style={{ fontSize: 'clamp(40px,5vw,62px)', marginTop: 20 }}>
                Protect every worker with{' '}
                <span style={{ color: 'var(--green-deep)', position: 'relative', whiteSpace: 'nowrap' }}>
                  trusted
                  <span style={{
                    position: 'absolute', left: 0, right: 0, bottom: '.08em',
                    height: '.18em', borderRadius: 4,
                    background: 'linear-gradient(90deg,var(--green),rgba(14,159,110,.25))',
                    opacity: .5,
                  }} />
                </span>{' '}
                safety gear.
              </h1>
              <p style={{ fontSize: 18.5, color: 'var(--ink-soft)', marginTop: 22, maxWidth: 520, lineHeight: 1.6 }}>
                Your trusted partner for quality safety products — rubber &amp; nitrile gloves, examination gloves, safety masks, walking sticks and more, sourced and certified to keep you protected.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
                <Link href="/products" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999,
                  background: 'var(--green)', color: '#fff',
                  boxShadow: '0 10px 22px -10px rgba(14,159,110,.8)',
                  transition: 'background .2s, transform .18s',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2.3 4.6a1 1 0 0 0 .9 1.4H19"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>
                  </svg>
                  Explore Products
                </Link>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999,
                  background: '#fff', color: 'var(--ink)',
                  border: '1px solid var(--line-strong)',
                  transition: 'border-color .2s, transform .18s',
                }}>
                  Talk to Sales
                </Link>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
                {[['1000+', 'Trusted Clients'], ['50K+', 'Workers Protected'], ['100%', 'Quality Assured']].map(([n, l]) => (
                  <div key={l} style={{
                    background: 'rgba(255,255,255,.7)', border: '1px solid var(--line)',
                    borderRadius: 'var(--r)', padding: '16px 20px', minWidth: 130,
                    backdropFilter: 'blur(6px)',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--green-deep)', letterSpacing: '-.02em' }}>{n}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden',
                background: 'radial-gradient(120% 100% at 50% 0%, #fff, var(--green-tint))',
                border: '1px solid var(--line)', boxShadow: 'var(--shadow-lg)',
                aspectRatio: '4/4.3', display: 'grid', placeItems: 'center', padding: 34,
              }}>
                <Image
                  src="/products/latex-gloves-blue.png"
                  alt="TickMark Safety Products"
                  width={400}
                  height={400}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', position: 'relative', zIndex: 1 }}
                  priority
                />
              </div>

              {/* Badge TL */}
              <div className="float-a" style={{
                position: 'absolute', top: 24, left: -26, zIndex: 3,
                display: 'flex', alignItems: 'center', gap: 12,
                background: '#fff', border: '1px solid var(--line)',
                borderRadius: 16, padding: '13px 16px', boxShadow: 'var(--shadow-md)',
                maxWidth: 210,
              }}>
                <span style={{ width: 38, height: 38, borderRadius: 11, display: 'grid', placeItems: 'center', background: 'var(--green-tint)', color: 'var(--green-deep)', flex: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 21, height: 21 }}>
                    <path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>Certified Quality</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>ISO &amp; CE compliant</div>
                </div>
              </div>

              {/* Badge BR */}
              <div className="float-b" style={{
                position: 'absolute', bottom: 30, right: -26, zIndex: 3,
                display: 'flex', alignItems: 'center', gap: 12,
                background: '#fff', border: '1px solid var(--line)',
                borderRadius: 16, padding: '13px 16px', boxShadow: 'var(--shadow-md)',
                maxWidth: 230,
              }}>
                <span style={{ width: 38, height: 38, borderRadius: 11, display: 'grid', placeItems: 'center', background: 'var(--green-tint)', color: 'var(--green-deep)', flex: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 21, height: 21 }}>
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
                  </svg>
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>Available Online</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>Amazon · Flipkart · Meesho</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .hero-inner { grid-template-columns: 1fr !important; gap: 48px !important; padding: 44px 0 60px !important; }
          }
        `}</style>
      </section>

      {/* ── CERT STRIP ── */}
      <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', gap: 40, padding: '22px 32px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>Compliant with</span>
          <div style={{ display: 'flex', gap: 34, alignItems: 'center', flexWrap: 'wrap' }}>
            {['ISO 9001', 'CE Marked', 'EN 374', 'ASTM D6319', 'FDA Grade'].map(cert => (
              <span key={cert} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontWeight: 700, color: 'var(--ink-soft)', fontSize: 15 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, color: 'var(--green)' }}>
                  <path d="M9.55 17.6 4.4 12.45l1.4-1.4 3.75 3.75 8.25-8.25 1.4 1.4z"/>
                </svg>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      <PromoSlider />

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: '96px 0', background: 'linear-gradient(180deg,#fff,var(--mint-2))', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Why TickMark</span>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,46px)', marginTop: 14 }}>Safety you can verify, trust you can feel.</h2>
            <p style={{ fontSize: 18, color: 'var(--ink-soft)', marginTop: 16 }}>Every product is sourced, tested and certified so the people who depend on it stay protected.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginTop: 54 }} className="why-grid">
            {[
              {
                title: 'Quality Assured',
                body: 'All our products meet the highest safety standards and quality certifications you can trust.',
                icon: <><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/><path d="m8.5 12 2.3 2.3L15.5 9.5"/></>,
              },
              {
                title: 'Healthcare Grade',
                body: 'Medical-grade, powder-free materials trusted by clinics and labs — safe on skin, dependable under pressure.',
                icon: <><path d="M19 14c1.5-1.5 3-3.5 3-6a3 3 0 0 0-6 0 3 3 0 0 0-6 0c0 2.5 1.5 4.5 3 6l3 3z"/><path d="M3 21h6M3 17h4"/></>,
              },
              {
                title: 'Easy Access',
                body: 'Available on major platforms like Amazon, Flipkart and Meesho for your convenience.',
                icon: <><path d="M3 7h13v10H3zM16 10h4l1 3v4h-5z"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></>,
              },
              {
                title: 'Trusted Brand',
                body: 'A reliable name in safety products, trusted by thousands of customers across the country.',
                icon: <><path d="M21 11.5a8.5 8.5 0 1 1-4.5-7.5L21 5"/><path d="M21 3v3h-3"/></>,
              },
            ].map(({ title, body, icon }) => (
              <div key={title} className="why-card" style={{
                position: 'relative', background: '#fff', border: '1px solid var(--line)',
                borderRadius: 'var(--r-lg)', padding: '30px 26px 28px',
                boxShadow: 'var(--shadow-sm)', overflow: 'hidden',
              }}>
                <div style={{ width: 58, height: 58, borderRadius: 16, display: 'grid', placeItems: 'center', background: 'var(--green-tint)', color: 'var(--green-deep)', marginBottom: 20 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" style={{ width: 30, height: 30 }}>{icon}</svg>
                </div>
                <h3 style={{ fontSize: 21 }}>{title}</h3>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', marginTop: 10 }}>{body}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 1080px) { .why-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media (max-width: 560px) { .why-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── TOP PRODUCTS ── */}
      <section style={{ padding: '96px 0', background: '#fff', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <span className="eyebrow">Top Products</span>
              <h2 style={{ fontSize: 'clamp(30px,3.6vw,46px)', marginTop: 14 }}>Trusted gear, ready to ship.</h2>
            </div>
            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999,
              background: 'var(--ink)', color: '#fff', transition: 'background .2s',
            }}>
              View All Products
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 54 }} className="prod-grid">
            {topProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <style>{`
            @media (max-width: 1080px) { .prod-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media (max-width: 560px) { .prod-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── SHOP BY CATEGORY ── */}
      <section style={{ padding: '96px 0', background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: .06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='2.4' d='M30 46 l10 10 21-23'/%3E%3C/svg%3E")`,
          backgroundSize: '90px 90px',
        }} />
        <div className="wrap" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 54 }}>
            <span className="eyebrow" style={{ color: '#5fe0a8', justifyContent: 'center' }}>Shop by Category</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(30px,3.6vw,46px)', marginTop: 14 }}>Find exactly what your workplace needs.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, gridAutoRows: 170 }} className="bento-grid">
            {[
              { label: 'Health', desc: 'Medical & Examination', sub: 'Nitrile gloves · Caps · Heating pads', bg: 'linear-gradient(135deg,#13344b,#0a2030)', cat: 'medical-supplies', wide: true },
              { label: 'Safety', desc: 'Industrial PPE', sub: '', bg: 'linear-gradient(135deg,#0E7D56,#0a5e41)', cat: 'gloves', wide: false },
              { label: 'Hygiene', desc: 'Cleanroom & Care', sub: '', bg: 'linear-gradient(135deg,#155e75,#0c4a5e)', cat: 'protective-wear', wide: false },
            ].map(({ label, desc, sub, bg, cat, wide }) => (
              <Link key={label} href={`/products?category=${cat}`} className="bento-tile" style={{
                position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', cursor: 'pointer',
                border: '1px solid rgba(255,255,255,.12)', background: bg,
                gridColumn: wide ? 'span 2' : 'span 1',
              }}>
                <div style={{ position: 'absolute', bottom: 20, left: 22, right: 22, zIndex: 3 }}>
                  <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#5fe0a8', marginBottom: 7 }}>{label}</span>
                  <h3 style={{ color: '#fff', fontSize: wide ? 22 : 20 }}>{desc}</h3>
                  {sub && <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.72)', marginTop: 5 }}>{sub}</div>}
                </div>
                <div style={{
                  position: 'absolute', top: 18, right: 18, zIndex: 3,
                  width: 40, height: 40, borderRadius: 12, display: 'grid', placeItems: 'center',
                  background: 'rgba(255,255,255,.14)', color: '#fff', border: '1px solid rgba(255,255,255,.2)',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <style>{`
            @media (max-width: 860px) { .bento-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media (max-width: 560px) { .bento-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ padding: '96px 0', background: 'var(--mint)' }}>
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
              <h2 style={{ color: '#fff', fontSize: 'clamp(28px,3.4vw,42px)', maxWidth: 620 }}>Ready to get started?</h2>
              <p style={{ color: 'rgba(255,255,255,.88)', marginTop: 12, fontSize: 17, position: 'relative' }}>Browse our complete catalog of safety products — bulk pricing and certification docs available on request.</p>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', position: 'relative' }}>
              <Link href="/products" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999,
                background: '#fff', color: 'var(--green-deep)', transition: 'transform .18s, box-shadow .25s',
              }}>Shop Now</Link>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999,
                background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.6)',
                transition: 'background .2s, transform .18s',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                  <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"/>
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
