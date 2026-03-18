const achievements = [
  { icon:'🏆', title:'10+ Projects Delivered', sub:'Web, UI/UX, and graphic design projects shipped to real users' },
  { icon:'⭐', title:'3 Domains Mastered', sub:'Frontend Dev · UI/UX · Graphic Design — all production-level' },
  { icon:'📚', title:'Self-Taught Stack', sub:'Built every skill from scratch through projects, not just courses' },
  { icon:'🤝', title:'Client Satisfaction', sub:'Clean deliverables, on time, within scope — every project' },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{padding:'100px 0',background:'rgba(13,10,26,0.5)',position:'relative'}}>
      <style>{`
        .ach-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;}
        .ach-card{background:rgba(124,58,237,0.05);border:1px solid rgba(124,58,237,0.12);border-radius:14px;padding:26px 22px;transition:all 0.25s;text-align:center;cursor:default;}
        .ach-card:hover{border-color:rgba(168,85,247,0.3);background:rgba(124,58,237,0.1);transform:translateY(-4px);}
      `}</style>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
        <p style={{fontSize:11,letterSpacing:'3px',textTransform:'uppercase',color:'#a855f7',marginBottom:12,fontFamily:'DM Sans,sans-serif'}}>Recognition</p>
        <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.1,marginBottom:48}}>
          Achievements &<br/><span style={{color:'#a855f7'}}>Impact</span>
        </h2>

        <div className="ach-grid">
          {achievements.map((a,i)=>(
            <div key={i} className="ach-card">
              <div style={{fontSize:34,marginBottom:14}}>{a.icon}</div>
              <h3 style={{fontFamily:'Syne,sans-serif',fontSize:16,fontWeight:700,marginBottom:8}}>{a.title}</h3>
              <p style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'rgba(196,181,253,0.5)',lineHeight:1.6}}>{a.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
