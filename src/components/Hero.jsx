import { useEffect, useState } from "react";

const roles = [
  "I Build Interfaces That Convert",
  "I Turn Ideas Into Products",
  "I Design Experiences That Stick",
  "I Bridge Design & Development",
];

export default function Hero({ visitorData }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setRoleIdx(i => (i + 1) % roles.length); setVisible(true); }, 350);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', paddingTop: 80,
    }}>
      <style>{`
        @keyframes heroFade { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes orbit { from{transform:rotate(0deg) translateX(160px) rotate(0deg)} to{transform:rotate(360deg) translateX(160px) rotate(-360deg)} }
        .h-child { animation: heroFade 0.65s ease forwards; opacity:0; }
        .h-child:nth-child(1){animation-delay:0.05s}
        .h-child:nth-child(2){animation-delay:0.18s}
        .h-child:nth-child(3){animation-delay:0.3s}
        .h-child:nth-child(4){animation-delay:0.44s}
        .h-child:nth-child(5){animation-delay:0.58s}
        .role-line { transition: opacity 0.35s ease; }
        .stat-num { font-family:'Syne',sans-serif; font-size:32px; font-weight:800; color:#fff; display:block; }
        .stat-label { font-family:'DM Sans',sans-serif; font-size:12px; color:rgba(196,181,253,0.45); margin-top:2px; display:block; }
        .hero-btn-primary {
          display:inline-flex;align-items:center;gap:8px;
          background:linear-gradient(135deg,#7c3aed,#a855f7);
          color:white;padding:14px 30px;border-radius:10px;border:none;
          font-family:'Syne',sans-serif;font-size:14px;font-weight:700;cursor:pointer;
          box-shadow:0 8px 24px rgba(124,58,237,0.35);transition:all 0.25s;
        }
        .hero-btn-primary:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(124,58,237,0.5)}
        .hero-btn-outline {
          display:inline-flex;align-items:center;gap:8px;
          background:transparent;border:1px solid rgba(124,58,237,0.3);
          color:rgba(245,243,255,0.75);padding:14px 30px;border-radius:10px;
          font-family:'Syne',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.25s;
        }
        .hero-btn-outline:hover{border-color:rgba(168,85,247,0.55);color:#e9d5ff;transform:translateY(-3px)}
      `}</style>

      {/* Grid bg */}
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(124,58,237,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.04) 1px,transparent 1px)',backgroundSize:'60px 60px',pointerEvents:'none'}}/>
      {/* Glow orbs */}
      <div style={{position:'absolute',top:'15%',right:'8%',width:480,height:480,background:'radial-gradient(circle,rgba(124,58,237,0.11) 0%,transparent 70%)',borderRadius:'50%',filter:'blur(40px)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',bottom:'5%',left:'-8%',width:360,height:360,background:'radial-gradient(circle,rgba(76,29,149,0.09) 0%,transparent 70%)',borderRadius:'50%',filter:'blur(60px)',pointerEvents:'none'}}/>
      {/* Orbit dot */}
      <div style={{position:'absolute',top:'42%',right:'18%',width:6,height:6,pointerEvents:'none'}}>
        <div style={{position:'absolute',width:6,height:6,borderRadius:'50%',background:'#a855f7',animation:'orbit 10s linear infinite',boxShadow:'0 0 10px #a855f7'}}/>
      </div>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',position:'relative',zIndex:1,width:'100%'}}>

        {/* Badge */}
        <div className="h-child">
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(124,58,237,0.08)',border:'1px solid rgba(124,58,237,0.2)',borderRadius:100,padding:'7px 18px',marginBottom:32}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 8px #4ade80',display:'inline-block',animation:'float 2s ease-in-out infinite'}}/>
            <span style={{fontSize:12,color:'#c4b5fd',fontFamily:'DM Sans,sans-serif',letterSpacing:'0.5px'}}>
              {visitorData?.name ? `Hey ${visitorData.name} 👋 — ` : ''} Open to Internships & Freelance
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="h-child">
          <h1 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(38px,6.5vw,76px)',fontWeight:800,lineHeight:1.05,letterSpacing:'-2px',marginBottom:16}}>
            Hi, I'm <span style={{color:'#a855f7'}}>Affan</span>
          </h1>
        </div>

        {/* Rotating role */}
        <div className="h-child">
          <p className="role-line" style={{
            fontFamily:'Syne,sans-serif',
            fontSize:'clamp(20px,3.5vw,40px)',
            fontWeight:700,
            color:'rgba(245,243,255,0.55)',
            lineHeight:1.2,
            marginBottom:24,
            opacity: visible ? 1 : 0,
            letterSpacing:'-0.5px',
          }}>
            {roles[roleIdx]}
          </p>
        </div>

        {/* Sub */}
        <div className="h-child">
          <p style={{maxWidth:500,color:'rgba(196,181,253,0.55)',fontSize:16,lineHeight:1.8,marginBottom:40,fontFamily:'DM Sans,sans-serif'}}>
            Frontend Developer · UI/UX Designer · Graphic Designer.<br/>
            SY BSc IT student building real products, learning business, and working toward founding a startup.
          </p>
        </div>

        {/* CTAs */}
        <div className="h-child" style={{display:'flex',gap:14,flexWrap:'wrap',alignItems:'center',marginBottom:72}}>
          <button className="hero-btn-primary" onClick={()=>document.getElementById('portfolio').scrollIntoView({behavior:'smooth'})}>
            View My Work →
          </button>
          <button className="hero-btn-outline" onClick={()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
            Let's Talk
          </button>
        </div>

        {/* Stats */}
        <div className="h-child" style={{display:'flex',gap:48,flexWrap:'wrap',paddingTop:32,borderTop:'1px solid rgba(124,58,237,0.1)'}}>
          {[
            {num:'10+', label:'Projects Built'},
            {num:'3', label:'Skill Domains'},
            {num:'2+', label:'Years Experience'},
            {num:'∞', label:'Drive to Build'},
          ].map(s=>(
            <div key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{position:'absolute',bottom:28,left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:6,opacity:0.35,animation:'float 2.5s ease-in-out infinite'}}>
        <div style={{width:1,height:36,background:'linear-gradient(to bottom,transparent,#a855f7)'}}/>
        <span style={{fontSize:9,letterSpacing:'2.5px',color:'#c4b5fd',textTransform:'uppercase',fontFamily:'DM Sans,sans-serif'}}>Scroll</span>
      </div>
    </section>
  );
}
