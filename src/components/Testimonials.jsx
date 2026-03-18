const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Founder, Zara Boutique',
    avatar: 'RS',
    text: 'Affan redesigned our entire website from scratch. The new landing page doubled our inquiry rate within the first month. He understood our brand better than we did.',
    rating: 5,
    color: '#a855f7',
  },
  {
    name: 'Karan Mehta',
    role: 'CEO, TechStart',
    avatar: 'KM',
    text: 'What stood out was how Affan combined design sensibility with business thinking. He didn\'t just build what we asked — he improved it. The SaaS landing page exceeded our conversion targets.',
    rating: 5,
    color: '#7c3aed',
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Head, Neon Gym',
    avatar: 'PN',
    text: 'Our social media engagement went up 3x after Affan created our content kit. Super professional, fast turnaround, and genuinely passionate about the work.',
    rating: 5,
    color: '#9333ea',
  },
  {
    name: 'Arjun Desai',
    role: 'Product Manager, EduPlatform',
    avatar: 'AD',
    text: 'The dashboard redesign was exactly what our students needed. Affan ran proper user research, presented findings clearly, and delivered a design that actually solved the problem.',
    rating: 5,
    color: '#6d28d9',
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '100px 0', position: 'relative' }}>
      <style>{`
        .test-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;}
        .test-card{background:rgba(13,10,26,0.8);border:1px solid rgba(124,58,237,0.13);border-radius:16px;padding:28px 26px;transition:all 0.28s;position:relative;overflow:hidden;}
        .test-card::before{content:'"';position:absolute;top:-10px;right:20px;font-size:100px;color:rgba(124,58,237,0.06);font-family:'Syne',sans-serif;font-weight:800;line-height:1;pointer-events:none;}
        .test-card:hover{border-color:rgba(124,58,237,0.3);transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.35);}
        .avatar{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:13px;font-weight:800;flex-shrink:0;}
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#a855f7', marginBottom: 12, fontFamily: 'DM Sans,sans-serif' }}>Social Proof</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 52 }}>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, lineHeight: 1.1 }}>
            What Clients<br /><span style={{ color: '#a855f7' }}>Say About Me</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)', borderRadius: 10, padding: '12px 20px' }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1, 2, 3, 4, 5].map(i => <span key={i} style={{ color: '#f59e0b', fontSize: 16 }}>★</span>)}
            </div>
            <div>
              <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 18, fontWeight: 800, color: '#e9d5ff' }}>5.0</div>
              <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 11, color: 'rgba(196,181,253,0.45)' }}>Average Rating</div>
            </div>
          </div>
        </div>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="test-card">
              <Stars count={t.rating} />
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 14, color: 'rgba(196,181,253,0.65)', lineHeight: 1.75, marginBottom: 22, fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 18, borderTop: '1px solid rgba(124,58,237,0.08)' }}>
                <div className="avatar" style={{ background: `${t.color}20`, border: `1px solid ${t.color}30`, color: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontFamily: 'Syne,sans-serif', fontSize: 14, fontWeight: 700, color: '#e9d5ff' }}>{t.name}</p>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: 'rgba(196,181,253,0.4)', marginTop: 1 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
