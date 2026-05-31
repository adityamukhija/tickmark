import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: '#9fb6ab', padding: '56px 0 30px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }} className="footer-cols">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: 16 }}>
              <Image src="/logo.png" alt="TickMark" width={200} height={40} style={{ height: 40, width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p style={{ fontSize: 14.5, maxWidth: 300, color: '#9fb6ab', lineHeight: 1.6 }}>
              Your trusted partner for quality safety products. Protecting workplaces across the country, one shift at a time.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {[
                { href: 'https://instagram.com/tickmark', label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { href: 'https://linkedin.com/company/tickmark', label: 'LinkedIn', d: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z' },
                { href: 'https://facebook.com/tickmark', label: 'Facebook', d: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12' },
              ].map(({ href, label, d }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width: 42, height: 42, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.08)', color: '#cfe0d8', transition: 'background .2s, color .2s' }}
                  className="hover:bg-green-600 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 19, height: 19 }}><path d={d}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: 15, margin: '0 0 16px', letterSpacing: '.02em' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[['/', 'Home'], ['/products', 'Products'], ['/about', 'About Us'], ['/contact', 'Contact Us']].map(([href, label]) => (
                <li key={href}><Link href={href} style={{ fontSize: 14.5 }} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: 15, margin: '0 0 16px', letterSpacing: '.02em' }}>Categories</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[['gloves', 'Gloves'], ['masks', 'Masks & PPE'], ['protective-wear', 'Protective Wear'], ['medical-supplies', 'Medical Supplies']].map(([cat, label]) => (
                <li key={cat}><Link href={`/products?category=${cat}`} style={{ fontSize: 14.5 }} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: 15, margin: '0 0 16px', letterSpacing: '.02em' }}>Get in touch</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              <li><a href="tel:+919911677477" style={{ fontSize: 14.5 }} className="hover:text-white transition-colors">+91 99116 77477</a></li>
              <li>
                <a href="https://wa.me/919911677477" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14.5, display: 'inline-flex', alignItems: 'center', gap: 7 }} className="hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15, color: '#25D366', flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li><a href="mailto:tickmark@zohomail.com" style={{ fontSize: 14.5 }} className="hover:text-white transition-colors">tickmark@zohomail.com</a></li>
              <li><Link href="/products" style={{ fontSize: 14.5 }} className="hover:text-white transition-colors">Shop on Flipkart</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', marginTop: 44, paddingTop: 22, display: 'flex', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap', fontSize: 13.5 }}>
          <span>© {new Date().getFullYear()} TickMark. All rights reserved.</span>
          <span>Privacy · Terms · Returns</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
