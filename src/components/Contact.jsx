import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contacts = [
    { icon: '✉', label: 'Email', value: 'affan@example.com', href: 'mailto:affan@example.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/affan', href: '#' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/affan', href: '#' },
    { icon: '🎨', label: 'Behance', value: 'behance.net/affan', href: '#' },
  ];

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative' }}>
      <style>{`
        .contact-wrap {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 60px;
          align-items: start;
        }
        @media(max-width:768px){ .contact-wrap{grid-template-columns:1fr;gap:48px;} }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media(max-width:520px){ .form-row{grid-template-columns:1fr;} }

        .cinput {
          width:100%; background:rgba(124,58,237,0.04);
          border:1px solid rgba(124,58,237,0.16);
          border-radius:10px; padding:13px 16px;
          color:white; font-family:'DM Sans',sans-serif;
          font-size:14px; outline:none;
          transition:border-color 0.2s, box-shadow 0.2s;
          box-sizing:border-box;
        }
        .cinput:focus{border-color:rgba(168,85,247,0.45);box-shadow:0 0 0 3px rgba(124,58,237,0.09);}
        .cinput::placeholder{color:rgba(196,181,253,0.28);}

        .clink {
          display:flex;align-items:center;gap:14px;
          padding:14px 18px;
          background:rgba(124,58,237,0.05);
          border:1px solid rgba(124,58,237,0.13);
          border-radius:10px;cursor:pointer;
          text-decoration:none;
          transition:border-color 0.22s, background 0.22s;
          margin-bottom:10px;
        }
        .clink:hover{border-color:rgba(124,58,237,0.32);background:rgba(124,58,237,0.09);}

        .send-btn {
          width:100%;padding:14px;
          background:linear-gradient(135deg,#7c3aed,#a855f7);
          border:none;border-radius:10px;
          color:white;font-family:'Syne',sans-serif;
          font-size:15px;font-weight:700;cursor:pointer;
          transition:all 0.25s;
          box-shadow:0 6px 20px rgba(124,58,237,0.28);
          margin-top:4px;
        }
        .send-btn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(124,58,237,0.42);}
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#a855f7', marginBottom: 12, fontFamily: 'DM Sans,sans-serif' }}>Get In Touch</p>
        <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 52 }}>
          Let's start a<br /><span style={{ color: '#a855f7' }}>conversation</span>
        </h2>

        <div className="contact-wrap">

          {/* Left — info */}
          <div>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 15, color: 'rgba(196,181,253,0.55)', lineHeight: 1.8, marginBottom: 36 }}>
              Whether it's a project, an internship opportunity, or just a hello — my inbox is always open. I respond within 24 hours.
            </p>

            {contacts.map(c => (
              <a key={c.label} href={c.href} className="clink">
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(124,58,237,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 10, color: 'rgba(196,181,253,0.35)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 2 }}>{c.label}</p>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'rgba(245,243,255,0.72)' }}>{c.value}</p>
                </div>
              </a>
            ))}

            <div style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 100, padding: '8px 18px' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', display: 'inline-block' }} />
              <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'rgba(196,181,253,0.65)' }}>Available for new opportunities</span>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: 'rgba(13,10,26,0.7)', border: '1px solid rgba(124,58,237,0.14)', borderRadius: 16, padding: '32px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', color: 'rgba(196,181,253,0.45)', fontSize: 14 }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div className="form-row" style={{ marginBottom: 14 }}>
                  <input className="cinput" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  <input className="cinput" type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
                <input className="cinput" placeholder="Subject — e.g. Internship, Project, Collab" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} style={{ marginBottom: 14 }} />
                <textarea className="cinput" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required style={{ minHeight: 130, resize: 'vertical', marginBottom: 18 }} />
                <button type="submit" className="send-btn">Send Message →</button>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 11, color: 'rgba(196,181,253,0.25)', textAlign: 'center', marginTop: 12 }}>
                  No spam. I usually reply within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
