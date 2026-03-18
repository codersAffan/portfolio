import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  { icon: "/icons/link.svg", label: "Email",    value: "affan@example.com",       href: "mailto:affan@example.com" },
  { icon: "/icons/linkedin.svg", label: "LinkedIn", value: "linkedin.com/in/affan",    href: "#" },
  { icon: "/icons/github.svg", label: "GitHub",   value: "github.com/affan",         href: "#" },
  { icon: "/icons/behance.svg", label: "Behance",  value: "behance.net/affan",        href: "#" },
];

export default function Contact() {
  const [form, setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [busy, setBusy]   = useState(false);
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const leftRef    = useRef(null);
  const rightRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(leftRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 78%", once: true }, delay: 0.1 }
      );
      gsap.fromTo(rightRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 78%", once: true }, delay: 0.2 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => { setSent(true); setBusy(false); setForm({ name: "", email: "", subject: "", message: "" }); }, 1000);
    setTimeout(() => setSent(false), 5000);
  };

  const inputStyle = {
    width: "100%", background: "#fafaf9",
    border: "1.5px solid #e5e0fa", borderRadius: 10,
    padding: "13px 16px", color: "#18103a",
    fontFamily: "'DM Sans',sans-serif", fontSize: 14,
    outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };
  const inputFocus = (e) => { e.target.style.borderColor = "#a855f7"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.08)"; };
  const inputBlur  = (e) => { e.target.style.borderColor = "#e5e0fa"; e.target.style.boxShadow = "none"; };

  return (
    <section id="contact" ref={sectionRef} className="section" style={{ background: "#ffffff" }}>
      <style>{`
        @media(max-width:768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media(max-width:520px) { .form-row { grid-template-columns: 1fr !important; } }
        .contact-link {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px; background: #fafaf9;
          border: 1px solid #e5e0fa; border-radius: 12px;
          text-decoration: none; transition: all 0.22s; margin-bottom: 10px;
        }
        .contact-link:hover { background: #f3f0ff; border-color: #c4b5fd; transform: translateX(4px); }
        .contact-link-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: #f3f0ff; border: 1px solid #e5e0fa;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; flex-shrink: 0;
        }
      `}</style>

      <div className="container" ref={sectionRef}>
        {/* Header */}
        <div ref={headerRef} style={{ opacity: 0, marginBottom: 56 }}>
          <span className="label">Get In Touch</span>
          <h2 className="section-title">
            Let's start a<br /><span>conversation</span>
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60, alignItems: "start" }}>

          {/* ── LEFT ── */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <p style={{ fontSize: 15, color: "#7c6fa0", lineHeight: 1.8, marginBottom: 36 }}>
              Whether it's a project, an internship opportunity, or just a hello — my inbox is always open. I reply within 24 hours.
            </p>

            {/* Contact links */}
            {contactLinks.map(c => (
              <a key={c.label} href={c.href} className="contact-link">
                <div className="contact-link-icon"><img src={c.icon} alt={c.label} style={{ width: 24, height: 24 }} /></div>
                <div>
                  <p style={{ fontSize: 10, color: "#7c6fa0", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 2, fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>{c.label}</p>
                  <p style={{ fontSize: 13, color: "#18103a", fontFamily: "'DM Sans',sans-serif" }}>{c.value}</p>
                </div>
              </a>
            ))}

            {/* Availability */}
            <div style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: 8, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 100, padding: "9px 18px" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#166534", fontWeight: 500 }}>Available for new opportunities</span>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div ref={rightRef} style={{ opacity: 0 }}>
            <div style={{ background: "#fafaf9", border: "1px solid #e5e0fa", borderRadius: 20, padding: "36px 32px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#f0fdf4", border: "2px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 20px" }}>✅</div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700, color: "#18103a", marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ fontSize: 14, color: "#7c6fa0" }}>I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Name + Email row */}
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, color: "#7c6fa0", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, display: "block", marginBottom: 6 }}>Your Name *</label>
                      <input
                        style={inputStyle} placeholder="e.g. Sarah Chen"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={inputFocus} onBlur={inputBlur} required
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, color: "#7c6fa0", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, display: "block", marginBottom: 6 }}>Email Address *</label>
                      <input
                        type="email" style={inputStyle} placeholder="hello@company.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={inputFocus} onBlur={inputBlur} required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ fontSize: 12, color: "#7c6fa0", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, display: "block", marginBottom: 6 }}>Subject</label>
                    <input
                      style={inputStyle} placeholder="Internship · Project · Collab · Just saying hi"
                      value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      onFocus={inputFocus} onBlur={inputBlur}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 22 }}>
                    <label style={{ fontSize: 12, color: "#7c6fa0", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, display: "block", marginBottom: 6 }}>Message *</label>
                    <textarea
                      style={{ ...inputStyle, minHeight: 130, resize: "vertical" }}
                      placeholder="Tell me about your project, timeline, and what you're looking to achieve..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={inputFocus} onBlur={inputBlur} required
                    />
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={busy} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "14px", opacity: busy ? 0.7 : 1 }}>
                    {busy ? "Sending…" : "Send Message →"}
                  </button>
                  <p style={{ fontSize: 11, color: "#7c6fa0", textAlign: "center", marginTop: 12 }}>
                    No spam, ever. Usually reply within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
