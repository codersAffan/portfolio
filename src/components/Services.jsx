import { useEffect, useRef, useState } from "react";

const services = [
  { icon:'⚛️', title:'Frontend Development', desc:'React web apps with clean code, smooth animations, and mobile-first responsive layouts.', features:['React JS / Vite','Component Architecture','GSAP Animations','Performance Optimization'] },
  { icon:'🎨', title:'UI/UX Design', desc:'User research to hi-fi prototypes. I design interfaces that reduce friction and increase conversions.', features:['User Research & Flows','Wireframing','Figma Prototyping','Design Systems'] },
  { icon:'✦', title:'Graphic Design', desc:'Brand identities, social media kits, and marketing materials that make your brand unforgettable.', features:['Logo & Brand Identity','Social Media Design','Marketing Collateral','Print Design'] },
  { icon:'🚀', title:'Landing Pages', desc:'High-converting pages built to turn visitors into customers — designed and coded from scratch.', features:['Conversion-Focused Design','CTA Optimization','Fast Load Times','A/B Ready Layouts'] },
];

const steps = [
  { num:'01', title:'Discover', desc:'I listen, ask, and research to understand your users, goals, and constraints.' },
  { num:'02', title:'Define', desc:'Scope the problem. Set success metrics. Align on deliverables and timeline.' },
  { num:'03', title:'Design', desc:'Wireframes → visual design → prototype. Iterate fast with your feedback.' },
  { num:'04', title:'Develop', desc:'Clean, maintainable code. Every interaction, every pixel, intentional.' },
  { num:'05', title:'Deliver', desc:'Handoff, documentation, and post-launch support. No ghosting.' },
];

function ProcessStep({ step, index }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      display:'flex', flexDirection:'column', alignItems:'center', flex:1, minWidth:140,
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
    }}>
      {/* Step circle */}
      <div style={{
        width:52, height:52, borderRadius:'50%',
        background: vis ? 'linear-gradient(135deg,#7c3aed,#a855f7)' : 'rgba(124,58,237,0.1)',
        border: '1px solid rgba(124,58,237,0.3)',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontFamily:'Syne,sans-serif', fontSize:13, fontWeight:800, color:'white',
        transition: `background 0.5s ease ${index * 0.1 + 0.2}s`,
        boxShadow: vis ? `0 0 20px rgba(124,58,237,0.35)` : 'none',
        marginBottom:12, flexShrink:0, zIndex:1, position:'relative',
      }}>{step.num}</div>
      <h4 style={{fontFamily:'Syne,sans-serif',fontSize:14,fontWeight:700,marginBottom:6,textAlign:'center'}}>{step.title}</h4>
      <p style={{fontFamily:'DM Sans,sans-serif',fontSize:12,color:'rgba(196,181,253,0.5)',lineHeight:1.55,textAlign:'center'}}>{step.desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{padding:'100px 0',position:'relative'}}>
      <style>{`
        .srv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;}
        .srv-card{background:rgba(13,10,26,0.7);border:1px solid rgba(124,58,237,0.13);border-radius:15px;padding:30px 26px;transition:all 0.28s;position:relative;overflow:hidden;}
        .srv-card::after{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(168,85,247,0.45),transparent);transform:scaleX(0);transition:transform 0.4s;}
        .srv-card:hover{border-color:rgba(124,58,237,0.32);transform:translateY(-5px);box-shadow:0 18px 42px rgba(0,0,0,0.35);}
        .srv-card:hover::after{transform:scaleX(1);}
        .proc-wrap{display:flex;gap:0;align-items:flex-start;position:relative;}
        .proc-line{position:absolute;top:26px;left:52px;right:52px;height:1px;background:linear-gradient(90deg,rgba(124,58,237,0.35),rgba(168,85,247,0.2));z-index:0;}
        @media(max-width:640px){.proc-wrap{flex-direction:column;align-items:flex-start;gap:24px;} .proc-line{display:none;}}
      `}</style>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
        {/* Header */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:20,marginBottom:56}}>
          <div>
            <p style={{fontSize:11,letterSpacing:'3px',textTransform:'uppercase',color:'#a855f7',marginBottom:12,fontFamily:'DM Sans,sans-serif'}}>What I Do</p>
            <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.1}}>Services<br/><span style={{color:'#a855f7'}}>I Offer</span></h2>
          </div>
          <p style={{maxWidth:340,color:'rgba(196,181,253,0.45)',fontSize:15,lineHeight:1.7,fontFamily:'DM Sans,sans-serif'}}>
            Whether you need a stunning UI, a sharp brand, or a conversion-ready website — I've got it covered.
          </p>
        </div>

        {/* Service cards */}
        <div className="srv-grid" style={{marginBottom:80}}>
          {services.map((s,i)=>(
            <div key={i} className="srv-card">
              <div style={{fontSize:34,marginBottom:18}}>{s.icon}</div>
              <h3 style={{fontFamily:'Syne,sans-serif',fontSize:19,fontWeight:700,marginBottom:10}}>{s.title}</h3>
              <p style={{fontFamily:'DM Sans,sans-serif',fontSize:14,color:'rgba(196,181,253,0.52)',lineHeight:1.7,marginBottom:20}}>{s.desc}</p>
              <div style={{borderTop:'1px solid rgba(124,58,237,0.1)',paddingTop:18}}>
                {s.features.map(f=>(
                  <div key={f} style={{display:'flex',gap:9,alignItems:'center',marginBottom:8}}>
                    <span style={{color:'#7c3aed',fontSize:9,flexShrink:0}}>◆</span>
                    <span style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'rgba(196,181,253,0.62)'}}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div>
          <p style={{fontSize:11,letterSpacing:'3px',textTransform:'uppercase',color:'#a855f7',marginBottom:12,fontFamily:'DM Sans,sans-serif',textAlign:'center'}}>How I Work</p>
          <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(22px,3vw,36px)',fontWeight:700,textAlign:'center',marginBottom:48}}>My <span style={{color:'#a855f7'}}>Process</span></h3>

          <div style={{background:'rgba(124,58,237,0.04)',border:'1px solid rgba(124,58,237,0.12)',borderRadius:20,padding:'48px 40px',position:'relative',overflow:'hidden'}}>
            {/* bg glow */}
            <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:400,height:200,background:'radial-gradient(ellipse,rgba(124,58,237,0.08),transparent)',borderRadius:'50%',pointerEvents:'none'}}/>
            <div className="proc-wrap" style={{position:'relative',zIndex:1}}>
              <div className="proc-line"/>
              {steps.map((s,i)=>(
                <ProcessStep key={i} step={s} index={i}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
