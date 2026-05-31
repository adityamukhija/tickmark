import type { Metadata } from "next";
import { Space_Grotesk, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "TickMark - Quality Safety & Healthcare Products",
  description: "Your trusted partner for quality safety products including rubber gloves, masks, and walking sticks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${publicSans.variable}`}>
        {/* Top utility bar */}
        <div style={{ background: 'var(--ink)', color: '#cfe0d8', fontSize: 13, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
          <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 40, gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
              <a href="tel:+919911677477" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap', color: 'inherit' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, color: 'var(--green)' }}>
                  <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"/>
                </svg>
                +91 99116 77477
              </a>
              <a href="https://wa.me/919911677477" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap', color: 'inherit' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, color: '#25D366' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <a href="mailto:tickmark@zohomail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap', color: 'inherit' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, color: 'var(--green)' }}>
                  <path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m8 7L5.5 6.8h13z"/>
                </svg>
                tickmark@zohomail.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: '#9fb6ab' }} className="hidden md:flex">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, color: 'var(--green)' }}>
                  <path d="M9.55 17.6 4.4 12.45l1.4-1.4 3.75 3.75 8.25-8.25 1.4 1.4z"/>
                </svg>
                ISO 9001 Certified
              </span>
              <a href="/products" style={{ color: '#9fb6ab' }} className="hover:text-white transition-colors">
                Shop on Flipkart &amp; Amazon
              </a>
            </div>
          </div>
        </div>
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />

        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/919911677477"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            bottom: 28,
            right: 24,
            zIndex: 999,
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#25D366',
            color: '#fff',
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0 0 0 4px rgba(37,211,102,.25), 0 8px 24px rgba(37,211,102,.4)',
            transition: 'transform .2s ease, box-shadow .2s ease',
          }}
          className="wa-float"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 30, height: 30 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
        <style>{`
          .wa-float:hover {
            transform: scale(1.1);
            box-shadow: 0 0 0 6px rgba(37,211,102,.3), 0 12px 32px rgba(37,211,102,.5) !important;
          }
          @keyframes wa-pulse {
            0%, 100% { box-shadow: 0 0 0 4px rgba(37,211,102,.25), 0 8px 24px rgba(37,211,102,.4); }
            50% { box-shadow: 0 0 0 8px rgba(37,211,102,.15), 0 8px 24px rgba(37,211,102,.4); }
          }
          .wa-float { animation: wa-pulse 2.5s ease-in-out infinite; }
          .wa-float:hover { animation: none; }
        `}</style>
      </body>
    </html>
  );
}
