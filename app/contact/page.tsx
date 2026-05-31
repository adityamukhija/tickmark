'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'General enquiry', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', topic: 'General enquiry', message: '' });
  };

  const field = (id: keyof typeof form, label: string, type = 'text', placeholder = '') => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
      <label htmlFor={id} style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{label}</label>
      <input
        id={id} type={type} placeholder={placeholder}
        value={form[id]}
        onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
        required={['name', 'email', 'message'].includes(id)}
        style={{
          fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ink)',
          border: '1px solid var(--line-strong)', borderRadius: 12, padding: '13px 15px',
          background: 'var(--paper)', width: '100%', outline: 'none',
        }}
      />
    </div>
  );

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
            <span>Contact Us</span>
          </div>
          <span className="eyebrow">Get In Touch</span>
          <h1 style={{ fontSize: 'clamp(34px,4.4vw,54px)', marginTop: 14 }}>We'd love to hear from you.</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', marginTop: 16, maxWidth: 620 }}>
            Questions about a product, bulk pricing, or certifications? Send us a message and our team will get back within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section style={{ padding: '56px 0 96px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 48, alignItems: 'start' }} className="contact-grid">
            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                {
                  title: 'Call us', body: '+91 99116 77477', sub: 'Mon–Sat, 9am–7pm IST', href: 'tel:+919911677477',
                  icon: <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"/>,
                },
                {
                  title: 'Email us', body: 'tickmark@zohomail.com', sub: 'We reply within 24 hours', href: 'mailto:tickmark@zohomail.com',
                  icon: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
                },
                {
                  title: 'Visit us', body: 'TickMark Safety Products', sub: 'India', href: null,
                  icon: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>,
                },
                {
                  title: 'WhatsApp', body: '+91 99116 77477', sub: 'Chat with us instantly', href: 'https://wa.me/919911677477',
                  icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>,
                  isWhatsApp: true,
                },
                {
                  title: 'Buy online', body: 'Amazon, Flipkart & Meesho', sub: 'Delivered across India', href: '/products',
                  icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></>,
                },
              ].map(({ title, body, sub, href, icon, isWhatsApp }: { title: string; body: string; sub: string; href: string | null; icon: React.ReactNode; isWhatsApp?: boolean }) => (
                <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r)', padding: 22, boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ width: 48, height: 48, borderRadius: 14, display: 'grid', placeItems: 'center', background: isWhatsApp ? '#e8fdf0' : 'var(--green-tint)', color: isWhatsApp ? '#25D366' : 'var(--green-deep)', flex: 'none' }}>
                    <svg viewBox="0 0 24 24" fill={isWhatsApp ? 'currentColor' : 'none'} stroke={isWhatsApp ? 'none' : 'currentColor'} strokeWidth={isWhatsApp ? 0 : 2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>{icon}</svg>
                  </span>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, margin: '0 0 4px' }}>{title}</h4>
                    <p style={{ fontSize: 14.5, color: 'var(--ink-soft)' }}>
                      {href
                        ? <a href={href} className="hover:text-green-700" {...(isWhatsApp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{body}</a>
                        : body}
                      <br/><span style={{ color: 'var(--ink-faint)' }}>{sub}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 34, boxShadow: 'var(--shadow-md)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginBottom: 6 }}>Send us a message</h2>
              <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginBottom: 24 }}>Fill in the form and we'll be in touch shortly.</p>

              {sent ? (
                <p style={{ fontWeight: 600, color: 'var(--green-deep)', textAlign: 'center', padding: '24px 0' }}>
                  ✓ Thanks! Your message has been sent — we'll be in touch soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                    {field('name', 'Full name', 'text', 'Your name')}
                    {field('email', 'Email', 'email', 'you@company.com')}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                    {field('phone', 'Phone', 'tel', '+91 ...')}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
                      <label htmlFor="topic" style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>Topic</label>
                      <select
                        id="topic"
                        value={form.topic}
                        onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
                        style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 12, padding: '13px 15px', background: 'var(--paper)', outline: 'none' }}
                      >
                        {['General enquiry', 'Bulk / wholesale order', 'Product question', 'Certifications', 'Other'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
                    <label htmlFor="message" style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>Message</label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      required
                      placeholder="Tell us what you need..."
                      rows={5}
                      style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 12, padding: '13px 15px', background: 'var(--paper)', resize: 'vertical', minHeight: 120, outline: 'none', width: '100%' }}
                    />
                  </div>
                  <button type="submit" style={{
                    display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: 10,
                    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
                    padding: '14px 24px', borderRadius: 999, cursor: 'pointer', border: 'none',
                    background: 'var(--green)', color: '#fff',
                    boxShadow: '0 10px 22px -10px rgba(14,159,110,.8)',
                  }}>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
