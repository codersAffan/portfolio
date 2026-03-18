export default function CTA() {
  return (
    <section style={{ padding:'100px 0', position:'relative', overflow:'hidden' }}>
      <style>{`
        @keyframes shimmer { from { background-position: -200% center; } to { background-position: 200% center; } }
        .cta-box {
          background: linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(76,29,149,0.1) 100%);
          border: 1px solid rgba(124,58,237,0.25);
          border-radius: 24px;
          padding: 72px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-box::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.12), transparent 70%);
          pointer-events: none;
        }
        .cta-main-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: white; padding: 16px 36px;
          border-radius: 12px; border: none;
          font-family: 'Syne',sans-serif; font-size: 16px; font-weight: 700;
          cursor: pointer; transition: all 0.25s;
          box-shadow: 0 8px 24px rgba(124,58,237,0.35);
        }
        .cta-main-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(124,58,237,0.5); }
        .cta-sec-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; border: 1px solid rgba(124,58,237,0.3);
          color: rgba(245,243,255,0.75); padding: 16px 32px;
          border-radius: 12px; font-family: 'Syne',sans-serif; font-size: 15px; font-weight: 600;
          cursor: pointer; transition: all 0.25s;
        }
        .cta-sec-btn:hover { border-color: rgba(168,85,247,0.5); color: #e9d5ff; transform: translateY(-3px); }
        @media(max-width:600px) { .cta-box { padding: 48px 24px; } .cta-btns { flex-direction: column; align-items: center; } }
      `}</style>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'0 24px' }}>
        <div className="cta-box">
          {/* Decorative dots */}
          {['-top-2 -left-2','-top-2 -right-2','-bottom-2 -left-2','-bottom-2 -right-2'].map((pos,i) => (
            <div key={i} style={{
              position:'absolute', width:8, height:8, borderRadius:'50%',
              background:'rgba(168,85,247,0.4)',
              top: i < 2 ? -4 : 'auto', bottom: i >= 2 ? -4 : 'auto',
              left: i%2===0 ? -4 : 'auto', right: i%2===1 ? -4 : 'auto',
            }} />
          ))}

          <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:11, letterSpacing:'3px', textTransform:'uppercase', color:'#a855f7', marginBottom:16 }}>
            Let's Work Together
          </p>

          <h2 style={{ fontFamily:'Syne,sans-serif', fontSize:'clamp(28px,5vw,52px)', fontWeight:800, lineHeight:1.1, marginBottom:20, letterSpacing:'-1px' }}>
            Have a project in mind?<br />
            <span style={{
              background: 'linear-gradient(90deg, #a855f7, #7c3aed, #c084fc, #a855f7)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s linear infinite',
            }}>Let's build it together.</span>
          </h2>

          <p style={{ fontFamily:'DM Sans,sans-serif', color:'rgba(196,181,253,0.6)', fontSize:16, maxWidth:520, margin:'0 auto 40px', lineHeight:1.75 }}>
            Whether you're a startup, an established company, or looking to hire — I'm ready to bring your vision to life with clean design and sharp code.
          </p>

          <div className="cta-btns" style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <button className="cta-main-btn" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
              Start a Conversation →
            </button>
            <button className="cta-sec-btn" onClick={() => document.getElementById('portfolio').scrollIntoView({behavior:'smooth'})}>
              See My Work
            </button>
          </div>

          {/* Social proof */}
          <div style={{ marginTop:48, display:'flex', justifyContent:'center', gap:32, flexWrap:'wrap' }}>
            {['Open to Internships', 'Available for Freelance', 'Open to Full-time'].map(badge => (
              <div key={badge} style={{ display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#a855f7', display:'inline-block' }} />
                <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:13, color:'rgba(196,181,253,0.5)' }}>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
