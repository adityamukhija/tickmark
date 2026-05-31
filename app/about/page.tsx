import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Page hero */}
      <section style={{
        position: 'relative', overflow: 'hidden', padding: '64px 0 56px',
        borderBottom: '1px solid var(--line)',
        background: 'radial-gradient(900px 420px at 80% -20%,var(--green-tint),transparent 60%),linear-gradient(180deg,var(--mint-2),var(--paper))',
      }}>
        <div className="wrap">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13.5, color: 'var(--ink-soft)', marginBottom: 14 }}>
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
            <span style={{ color: 'var(--ink-faint)' }}>/</span>
            <span>About Us</span>
          </div>
          <span className="eyebrow">Who We Are</span>
          <h1 style={{ fontSize: 'clamp(34px,4.4vw,54px)', marginTop: 14 }}>Safety is our promise, quality is our proof.</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', marginTop: 16, maxWidth: 620 }}>
            TickMark is a trusted name in safety and healthcare products — supplying gloves, masks, mobility aids and PPE that protect thousands of workers and families every day.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="about-split">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 style={{ fontSize: 'clamp(28px,3.2vw,42px)', marginTop: 14, marginBottom: 18 }}>Built on a simple belief — everyone deserves to stay safe.</h2>
              <p style={{ color: 'var(--ink-soft)', fontSize: 16.5, marginBottom: 16, lineHeight: 1.6 }}>
                TickMark began with a clear mission: to make certified, dependable safety products easy to access for businesses and individuals alike. From the worksite to the clinic, we saw too many people relying on gear they couldn't fully trust.
              </p>
              <p style={{ color: 'var(--ink-soft)', fontSize: 16.5, marginBottom: 24, lineHeight: 1.6 }}>
                Today we supply a growing range of rubber and nitrile gloves, examination gloves, masks, caps, walking sticks and more — each one quality-assured and available across Amazon, Flipkart and Meesho. Behind every product is a promise: protection you can verify.
              </p>
              <Link href="/products" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999,
                background: 'var(--green)', color: '#fff',
                boxShadow: '0 10px 22px -10px rgba(14,159,110,.8)',
              }}>
                Explore Our Products
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
            <div style={{
              borderRadius: 'var(--r-lg)', overflow: 'hidden',
              border: '1px solid var(--line)', boxShadow: 'var(--shadow-lg)',
              aspectRatio: '4/3.4',
              background: 'radial-gradient(120% 100% at 50% 0%, var(--mint-2), var(--green-tint))',
              display: 'grid', placeItems: 'center', padding: 40,
            }}>
              <svg viewBox="0 0 200 200" style={{ width: '60%', opacity: .15 }} fill="none" stroke="var(--green)" strokeWidth={3}>
                <path d="M100 20 L40 50 L40 110 C40 150 70 175 100 185 C130 175 160 150 160 110 L160 50 Z"/>
                <path d="M75 100 L90 115 L125 80"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '96px 0', background: 'var(--mint)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', marginBottom: 54 }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What We Stand For</span>
            <h2 style={{ fontSize: 'clamp(30px,3.6vw,46px)', marginTop: 14 }}>The values behind every order.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }} className="values-grid">
            {[
              { title: 'Quality Assured', body: 'Every product meets the highest safety standards and carries recognised quality certifications.', icon: <><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/><path d="m8.5 12 2.3 2.3L15.5 9.5"/></> },
              { title: 'Easy Access', body: 'Stocked and ready on the platforms you already use — Amazon, Flipkart and Meesho.', icon: <><path d="M3 7h13v10H3zM16 10h4l1 3v4h-5z"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></> },
              { title: 'Trusted Brand', body: 'A reliable name relied on by thousands of customers and businesses across the country.', icon: <><path d="M21 11.5a8.5 8.5 0 1 1-4.5-7.5L21 5"/><path d="M21 3v3h-3"/></> },
            ].map(({ title, body, icon }) => (
              <div key={title} style={{
                background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)',
                padding: '30px 26px', boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ width: 58, height: 58, borderRadius: 16, display: 'grid', placeItems: 'center', background: 'var(--green-tint)', color: 'var(--green-deep)', marginBottom: 20 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" style={{ width: 30, height: 30 }}>{icon}</svg>
                </div>
                <h3 style={{ fontSize: 21 }}>{title}</h3>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', marginTop: 10 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div className="wrap">
          <div style={{
            background: 'var(--ink)', color: '#fff', borderRadius: 'var(--r-xl)',
            padding: '48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
            gap: 24, textAlign: 'center', boxShadow: 'var(--shadow-lg)',
          }} className="stats-band">
            {[['1000+', 'Trusted Clients'], ['50K+', 'Workers Protected'], ['100%', 'Quality Assured'], ['4.6★', 'Average Rating']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px,4vw,52px)', color: '#5fe0a8', letterSpacing: '-.02em' }}>{n}</div>
                <div style={{ color: '#aec3ce', fontSize: 14.5, marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 96px', background: 'var(--mint)' }}>
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
              <h2 style={{ color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>Let's keep your team protected.</h2>
              <p style={{ color: 'rgba(255,255,255,.88)', marginTop: 12, fontSize: 17 }}>Talk to us about bulk supply, certifications and recurring orders.</p>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', position: 'relative' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999, background: '#fff', color: 'var(--green-deep)' }}>Contact Us</Link>
              <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999, background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.6)' }}>Browse Products</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .about-split { grid-template-columns: 1fr !important; gap: 36px !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .stats-band { grid-template-columns: repeat(2,1fr) !important; padding: 36px 28px !important; }
        }
      `}</style>
    </div>
  );
}
