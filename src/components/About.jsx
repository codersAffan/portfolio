const techStack = [
  { name:'React', icon:'⚛️' },
  { name:'JavaScript', icon:'𝗝𝗦' },
  { name:'HTML5', icon:'🌐' },
  { name:'CSS3', icon:'🎨' },
  { name:'Tailwind', icon:'💨' },
  { name:'Figma', icon:'🖼️' },
  { name:'Adobe XD', icon:'✏️' },
  { name:'Photoshop', icon:'🖌️' },
  { name:'Illustrator', icon:'🔷' },
  { name:'GSAP', icon:'⚡' },
  { name:'Git', icon:'🌿' },
  { name:'Vite', icon:'⚡' },
];

export default function About() {
  return (
    <section id="about" style={{padding:'100px 0',background:'rgba(13,10,26,0.7)',position:'relative'}}>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        @media(max-width:768px){ .about-grid{grid-template-columns:1fr;gap:48px;} }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        @media(max-width:400px){ .stack-grid{grid-template-columns:repeat(3,1fr);} }

        .stack-item {
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          gap:6px;padding:14px 8px;
          background:rgba(124,58,237,0.06);
          border:1px solid rgba(124,58,237,0.13);
          border-radius:10px;
          transition:all 0.22s;cursor:default;
        }
        .stack-item:hover {
          background:rgba(124,58,237,0.13);
          border-color:rgba(168,85,247,0.35);
          transform:translateY(-3px);
        }
        .stack-icon { font-size:20px; line-height:1; }
        .stack-name { font-family:'DM Sans',sans-serif;font-size:11px;color:rgba(196,181,253,0.65);text-align:center; }

        .pill {
          display:inline-flex;align-items:center;gap:7px;
          background:rgba(124,58,237,0.07);border:1px solid rgba(124,58,237,0.15);
          border-radius:8px;padding:8px 14px;
          font-family:'DM Sans',sans-serif;font-size:13px;color:rgba(245,243,255,0.7);
          margin:4px;
        }
      `}</style>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
        <div className="about-grid">

          {/* Left — text */}
          <div>
            <p style={{fontSize:11,letterSpacing:'3px',textTransform:'uppercase',color:'#a855f7',marginBottom:12,fontFamily:'DM Sans,sans-serif'}}>Who I Am</p>
            <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.12,marginBottom:24}}>
              Designer who codes.<br/>
              <span style={{color:'#a855f7'}}>Developer</span> who designs.
            </h2>

            <p style={{color:'rgba(196,181,253,0.58)',lineHeight:1.85,marginBottom:18,fontFamily:'DM Sans,sans-serif',fontSize:15}}>
              I'm Affan — a Second Year BSc IT student operating at the crossroads of <strong style={{color:'rgba(245,243,255,0.8)'}}>code, design, and product thinking</strong>. I don't just build things that work — I build things people actually want to use.
            </p>
            <p style={{color:'rgba(196,181,253,0.58)',lineHeight:1.85,marginBottom:32,fontFamily:'DM Sans,sans-serif',fontSize:15}}>
              Alongside tech, I actively study entrepreneurship, business strategy, and finance — so every decision I make is grounded in both user value and real-world impact.
            </p>

            <div style={{display:'flex',flexWrap:'wrap',gap:0,marginBottom:32}}>
              {[
                {icon:'🎓',text:'SY BSc IT — Mumbai'},
                {icon:'💼',text:'Open to Internships'},
                {icon:'🚀',text:'Aspiring Founder'},
                {icon:'🎯',text:'Product-Minded Dev'},
              ].map(p=>(
                <div key={p.text} className="pill">
                  <span>{p.icon}</span>{p.text}
                </div>
              ))}
            </div>

            {/* What I solve */}
            <div style={{background:'rgba(124,58,237,0.06)',border:'1px solid rgba(124,58,237,0.15)',borderRadius:12,padding:'22px 24px'}}>
              <p style={{fontFamily:'Syne,sans-serif',fontSize:14,fontWeight:700,color:'#e9d5ff',marginBottom:14}}>Problems I solve</p>
              {[
                '"Our website doesn\'t convert" → I fix that with UX + copy + CTA design',
                '"Our brand looks unprofessional" → I create identity that builds trust',
                '"The app is hard to use" → I redesign for clarity and flow',
                '"We need a dev who gets design" → That\'s exactly me',
              ].map(item=>(
                <div key={item} style={{display:'flex',gap:10,alignItems:'flex-start',marginBottom:9}}>
                  <span style={{color:'#a855f7',marginTop:3,flexShrink:0,fontSize:12}}>◆</span>
                  <span style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'rgba(196,181,253,0.65)',lineHeight:1.55}}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stack */}
          <div>
            <p style={{fontSize:11,letterSpacing:'3px',textTransform:'uppercase',color:'#a855f7',marginBottom:20,fontFamily:'DM Sans,sans-serif'}}>My Stack</p>
            <div className="stack-grid">
              {techStack.map(t=>(
                <div key={t.name} className="stack-item">
                  <span className="stack-icon">{t.icon}</span>
                  <span className="stack-name">{t.name}</span>
                </div>
              ))}
            </div>

            {/* Currently exploring */}
            <div style={{marginTop:28,padding:'20px 22px',background:'rgba(124,58,237,0.05)',border:'1px solid rgba(124,58,237,0.12)',borderRadius:12}}>
              <p style={{fontFamily:'Syne,sans-serif',fontSize:13,fontWeight:700,color:'rgba(245,243,255,0.6)',marginBottom:12,letterSpacing:'0.5px'}}>Currently Exploring</p>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                {['Next.js','TypeScript','Framer Motion','Business Strategy','Startup Finance'].map(t=>(
                  <span key={t} style={{background:'rgba(124,58,237,0.1)',border:'1px solid rgba(124,58,237,0.2)',color:'#c4b5fd',padding:'4px 12px',borderRadius:6,fontSize:12,fontFamily:'DM Sans,sans-serif'}}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
