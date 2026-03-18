import { useState } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const webProjects = [
  {
    id:'w1', cat:'Client', title:'Zara Boutique — E-Commerce Site',
    desc:'Full storefront with product listing, cart, and checkout UI. Focused on mobile-first and fast loading.',
    tags:['React','CSS','Responsive'], liveUrl:'#', sourceUrl:'#',
    emoji:'🛍️', color:'#7c3aed',
  },
  {
    id:'w2', cat:'Personal', title:'Dev Portfolio v1',
    desc:'My first personal portfolio — clean scroll animations, dark theme, and fully responsive layout.',
    tags:['HTML','CSS','JS'], liveUrl:'#', sourceUrl:'#',
    emoji:'🌐', color:'#a855f7',
  },
  {
    id:'w3', cat:'Client', title:'TechStart SaaS Landing',
    desc:'High-conversion landing page for a B2B SaaS tool. Includes animated sections and CTA optimization.',
    tags:['React','GSAP','Vite'], liveUrl:'#', sourceUrl:'#',
    emoji:'🚀', color:'#9333ea',
  },
  {
    id:'w4', cat:'Personal', title:'Weather Dashboard',
    desc:'Real-time weather app with location search, 7-day forecast, and animated weather icons.',
    tags:['React','API','CSS Grid'], liveUrl:'#', sourceUrl:'#',
    emoji:'🌤️', color:'#6d28d9',
  },
];

const uxProjects = [
  {
    id:'u1', cat:'Client', title:'FinTrack — Finance App',
    desc:'Complete mobile app redesign for personal finance management. Full UX audit, user flows, wireframes, and hi-fi Figma prototype.',
    tags:['Figma','UX Audit','Prototyping','User Research'],
    emoji:'💰', color:'#a855f7',
    problem:'Users couldn\'t track spending habits effectively due to confusing navigation.',
    solution:'Simplified info architecture, introduced spending categories, weekly summaries.',
    outcome:'42% improvement in task completion rate during usability testing.',
  },
  {
    id:'u2', cat:'Personal', title:'Recipe App — UX Case Study',
    desc:'Self-initiated project exploring how people discover and save recipes. Research → wireframes → prototype → test → iterate.',
    tags:['Figma','User Research','Wireframing','Testing'],
    emoji:'🍳', color:'#7c3aed',
    problem:'Popular recipe apps overwhelm users with ads and unnecessary steps.',
    solution:'Minimal interface focused on the recipe itself — no clutter, fast access.',
    outcome:'Prototype tested with 8 users, all rated experience 4.5/5 or higher.',
  },
  {
    id:'u3', cat:'Client', title:'EduPlatform Dashboard Redesign',
    desc:'Redesigned a student dashboard for an ed-tech startup. Improved onboarding, progress tracking, and notification clarity.',
    tags:['Figma','Design System','Dashboard','UX'],
    emoji:'📚', color:'#9333ea',
    problem:'Students reported feeling lost and couldn\'t track their learning progress.',
    solution:'Unified progress indicators, grouped modules, redesigned onboarding flow.',
    outcome:'Client reported 30% drop in support tickets post-launch.',
  },
];

const graphicProjects = [
  {
    id:'g1', cat:'Client', title:'Brew & Co — Café Branding',
    desc:'Complete brand identity for a specialty coffee shop. Logo, color system, packaging mockups, menu design, and Instagram kit.',
    tags:['Illustrator','Branding','Logo','Print'],
    emoji:'☕', color:'#7c3aed',
    views:2840, likes:312, shares:87,
  },
  {
    id:'g2', cat:'Personal', title:'Type Poster Series',
    desc:'3-piece typographic poster series exploring motion and stillness. Personal creative project using experimental typography.',
    tags:['Photoshop','Typography','Poster'],
    emoji:'🔤', color:'#a855f7',
    views:1540, likes:198, shares:44,
  },
  {
    id:'g3', cat:'Client', title:'Neon Gym — Social Media Kit',
    desc:'Full social media content system for a gym brand. 30+ templates, story formats, highlight covers, and reel covers.',
    tags:['Canva','Illustrator','Social','Templates'],
    emoji:'💪', color:'#9333ea',
    views:3210, likes:445, shares:122,
  },
  {
    id:'g4', cat:'Personal', title:'Minimal Icon System',
    desc:'Custom 40-icon set in a consistent minimal style. Built for a dark-theme web app. Available as SVG.',
    tags:['Illustrator','Icons','SVG','System'],
    emoji:'✦', color:'#6d28d9',
    views:980, likes:134, shares:29,
  },
];

// ─── SUB-COMPONENTS ─────────────────────────────────────────────────────────

function WebCard({ p, onClick }) {
  return (
    <div onClick={onClick} style={{
      background:'rgba(13,10,26,0.8)',border:'1px solid rgba(124,58,237,0.13)',
      borderRadius:14,padding:'24px',cursor:'pointer',transition:'all 0.28s',
      display:'flex',flexDirection:'column',
    }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(124,58,237,0.35)';e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='0 18px 40px rgba(0,0,0,0.4)'}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(124,58,237,0.13)';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}
    >
      <div style={{height:110,borderRadius:8,background:`linear-gradient(135deg,${p.color}20,${p.color}08)`,border:`1px solid ${p.color}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:40,marginBottom:18,position:'relative'}}>
        {p.emoji}
        <span style={{position:'absolute',top:8,right:8,fontSize:10,background:p.cat==='Client'?'rgba(168,85,247,0.2)':'rgba(76,29,149,0.2)',border:`1px solid ${p.color}30`,color:'#c4b5fd',padding:'2px 8px',borderRadius:4,fontFamily:'DM Sans,sans-serif',letterSpacing:'1px',textTransform:'uppercase'}}>
          {p.cat}
        </span>
      </div>
      <h3 style={{fontFamily:'Syne,sans-serif',fontSize:16,fontWeight:700,marginBottom:8}}>{p.title}</h3>
      <p style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'rgba(196,181,253,0.55)',lineHeight:1.65,marginBottom:14,flex:1}}>{p.desc}</p>
      <div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:16}}>
        {p.tags.map(t=><span key={t} style={{background:'rgba(124,58,237,0.08)',border:'1px solid rgba(124,58,237,0.18)',color:'rgba(196,181,253,0.65)',padding:'3px 9px',borderRadius:5,fontSize:10,fontFamily:'DM Sans,sans-serif'}}>{t}</span>)}
      </div>
      <div style={{display:'flex',gap:10}}>
        <a href={p.liveUrl} onClick={e=>e.stopPropagation()} style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:6,background:'linear-gradient(135deg,#7c3aed,#a855f7)',color:'white',padding:'9px',borderRadius:8,fontFamily:'Syne,sans-serif',fontSize:12,fontWeight:700,textDecoration:'none',transition:'opacity 0.2s'}} onMouseEnter={e=>e.currentTarget.style.opacity='0.85'} onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
          🔗 Live Preview
        </a>
        <a href={p.sourceUrl} onClick={e=>e.stopPropagation()} style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:6,background:'transparent',border:'1px solid rgba(124,58,237,0.3)',color:'rgba(245,243,255,0.7)',padding:'9px',borderRadius:8,fontFamily:'Syne,sans-serif',fontSize:12,fontWeight:600,textDecoration:'none',transition:'all 0.2s'}} onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(168,85,247,0.5)';e.currentTarget.style.color='#e9d5ff'}} onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(124,58,237,0.3)';e.currentTarget.style.color='rgba(245,243,255,0.7)'}}>
          🐙 Source
        </a>
      </div>
    </div>
  );
}

function UXCard({ p, onClick }) {
  return (
    <div onClick={onClick} style={{
      background:'rgba(13,10,26,0.8)',border:'1px solid rgba(124,58,237,0.13)',
      borderRadius:14,padding:'26px',cursor:'pointer',transition:'all 0.28s',
    }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(124,58,237,0.35)';e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='0 18px 40px rgba(0,0,0,0.4)'}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(124,58,237,0.13)';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}
    >
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
        <span style={{fontSize:32}}>{p.emoji}</span>
        <span style={{fontSize:10,background:p.cat==='Client'?'rgba(168,85,247,0.15)':'rgba(76,29,149,0.15)',border:'1px solid rgba(124,58,237,0.25)',color:'#c4b5fd',padding:'3px 10px',borderRadius:4,fontFamily:'DM Sans,sans-serif',letterSpacing:'1px',textTransform:'uppercase'}}>{p.cat}</span>
      </div>
      <h3 style={{fontFamily:'Syne,sans-serif',fontSize:17,fontWeight:700,marginBottom:8}}>{p.title}</h3>
      <p style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'rgba(196,181,253,0.55)',lineHeight:1.65,marginBottom:16}}>{p.desc}</p>
      <div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:16}}>
        {p.tags.map(t=><span key={t} style={{background:'rgba(124,58,237,0.08)',border:'1px solid rgba(124,58,237,0.18)',color:'rgba(196,181,253,0.65)',padding:'3px 9px',borderRadius:5,fontSize:10,fontFamily:'DM Sans,sans-serif'}}>{t}</span>)}
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:12,borderTop:'1px solid rgba(124,58,237,0.08)'}}>
        <span style={{fontFamily:'DM Sans,sans-serif',fontSize:12,color:'rgba(196,181,253,0.4)'}}>View Case Study</span>
        <span style={{color:'#a855f7',fontSize:14}}>→</span>
      </div>
    </div>
  );
}

function GraphicCard({ p, onClick }) {
  const total = p.views + p.likes + p.shares;
  return (
    <div onClick={onClick} style={{
      background:'rgba(13,10,26,0.8)',border:'1px solid rgba(124,58,237,0.13)',
      borderRadius:14,overflow:'hidden',cursor:'pointer',transition:'all 0.28s',
    }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(124,58,237,0.35)';e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='0 18px 40px rgba(0,0,0,0.4)'}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(124,58,237,0.13)';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}
    >
      <div style={{height:130,background:`linear-gradient(135deg,${p.color}25,${p.color}0a)`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:48,position:'relative'}}>
        {p.emoji}
        <span style={{position:'absolute',top:10,left:10,fontSize:10,background:'rgba(5,3,15,0.7)',border:'1px solid rgba(124,58,237,0.25)',color:'#c4b5fd',padding:'3px 8px',borderRadius:4,fontFamily:'DM Sans,sans-serif',letterSpacing:'1px',textTransform:'uppercase'}}>{p.cat}</span>
      </div>
      <div style={{padding:'20px 22px'}}>
        <h3 style={{fontFamily:'Syne,sans-serif',fontSize:16,fontWeight:700,marginBottom:8}}>{p.title}</h3>
        <p style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'rgba(196,181,253,0.55)',lineHeight:1.6,marginBottom:14}}>{p.desc}</p>
        <div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:16}}>
          {p.tags.map(t=><span key={t} style={{background:'rgba(124,58,237,0.08)',border:'1px solid rgba(124,58,237,0.18)',color:'rgba(196,181,253,0.65)',padding:'3px 9px',borderRadius:5,fontSize:10,fontFamily:'DM Sans,sans-serif'}}>{t}</span>)}
        </div>
        {/* Engagement stats */}
        <div style={{display:'flex',gap:0,borderTop:'1px solid rgba(124,58,237,0.08)',paddingTop:14}}>
          {[
            {icon:'👁️',val:p.views.toLocaleString(),label:'Views'},
            {icon:'❤️',val:p.likes,label:'Likes'},
            {icon:'🔗',val:p.shares,label:'Shares'},
          ].map((s,i)=>(
            <div key={s.label} style={{flex:1,textAlign:'center',borderRight:i<2?'1px solid rgba(124,58,237,0.08)':'none'}}>
              <div style={{fontFamily:'Syne,sans-serif',fontSize:15,fontWeight:700,color:'#e9d5ff'}}>{s.val}</div>
              <div style={{fontFamily:'DM Sans,sans-serif',fontSize:10,color:'rgba(196,181,253,0.4)',marginTop:2}}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:12,padding:'8px',background:'rgba(124,58,237,0.06)',borderRadius:8,textAlign:'center'}}>
          <span style={{fontFamily:'DM Sans,sans-serif',fontSize:12,color:'rgba(196,181,253,0.5)'}}>
            Total Engagement: <strong style={{color:'#c4b5fd'}}>{total.toLocaleString()}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── MODALS ─────────────────────────────────────────────────────────────────

function ModalWrap({ children, onClose }) {
  return (
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(5,3,15,0.88)',backdropFilter:'blur(14px)',zIndex:7000,display:'flex',alignItems:'center',justifyContent:'center',padding:24,animation:'mFade 0.2s ease'}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#0d0a1a',border:'1px solid rgba(124,58,237,0.22)',borderRadius:20,maxWidth:580,width:'100%',maxHeight:'85vh',overflowY:'auto',padding:'36px',position:'relative',animation:'mSlide 0.3s ease'}}>
        <button onClick={onClose} style={{position:'absolute',top:16,right:16,background:'none',border:'none',color:'rgba(196,181,253,0.35)',fontSize:20,cursor:'pointer',lineHeight:1}}>✕</button>
        {children}
      </div>
      <style>{`@keyframes mFade{from{opacity:0}to{opacity:1}} @keyframes mSlide{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  );
}

function UXModal({ p, onClose }) {
  return (
    <ModalWrap onClose={onClose}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
        <span style={{fontSize:40}}>{p.emoji}</span>
        <div>
          <span style={{fontSize:10,color:'#a855f7',fontFamily:'DM Sans,sans-serif',letterSpacing:'2px',textTransform:'uppercase',display:'block',marginBottom:4}}>{p.cat} · Case Study</span>
          <h2 style={{fontFamily:'Syne,sans-serif',fontSize:22,fontWeight:700}}>{p.title}</h2>
        </div>
      </div>
      <div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:24}}>
        {p.tags.map(t=><span key={t} style={{background:'rgba(124,58,237,0.1)',border:'1px solid rgba(124,58,237,0.22)',color:'#c4b5fd',padding:'4px 11px',borderRadius:6,fontSize:12,fontFamily:'DM Sans,sans-serif'}}>{t}</span>)}
      </div>
      {[
        {label:'🔍 Problem',text:p.problem},
        {label:'💡 Solution',text:p.solution},
        {label:'📈 Outcome',text:p.outcome},
      ].map(s=>(
        <div key={s.label} style={{marginBottom:20,padding:'16px 18px',background:'rgba(124,58,237,0.05)',border:'1px solid rgba(124,58,237,0.12)',borderRadius:10}}>
          <p style={{fontFamily:'Syne,sans-serif',fontSize:13,fontWeight:700,color:'#c4b5fd',marginBottom:8}}>{s.label}</p>
          <p style={{fontFamily:'DM Sans,sans-serif',fontSize:14,color:'rgba(196,181,253,0.65)',lineHeight:1.7}}>{s.text}</p>
        </div>
      ))}
      <p style={{fontFamily:'DM Sans,sans-serif',fontSize:12,color:'rgba(196,181,253,0.3)',textAlign:'center',fontStyle:'italic',marginTop:8}}>
        Full Figma prototype & research documentation available on request.
      </p>
    </ModalWrap>
  );
}

function GraphicModal({ p, onClose }) {
  const total = p.views + p.likes + p.shares;
  return (
    <ModalWrap onClose={onClose}>
      <div style={{height:180,borderRadius:12,background:`linear-gradient(135deg,${p.color}30,${p.color}0a)`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:72,marginBottom:24,border:`1px solid ${p.color}20`}}>
        {p.emoji}
      </div>
      <span style={{fontSize:10,color:'#a855f7',fontFamily:'DM Sans,sans-serif',letterSpacing:'2px',textTransform:'uppercase',display:'block',marginBottom:8}}>{p.cat} · Graphic Design</span>
      <h2 style={{fontFamily:'Syne,sans-serif',fontSize:22,fontWeight:700,marginBottom:10}}>{p.title}</h2>
      <p style={{fontFamily:'DM Sans,sans-serif',fontSize:14,color:'rgba(196,181,253,0.6)',lineHeight:1.7,marginBottom:20}}>{p.desc}</p>
      <div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:24}}>
        {p.tags.map(t=><span key={t} style={{background:'rgba(124,58,237,0.1)',border:'1px solid rgba(124,58,237,0.22)',color:'#c4b5fd',padding:'4px 11px',borderRadius:6,fontSize:12,fontFamily:'DM Sans,sans-serif'}}>{t}</span>)}
      </div>
      {/* Engagement */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:16}}>
        {[{icon:'👁️',val:p.views.toLocaleString(),label:'Views'},{icon:'❤️',val:p.likes,label:'Likes'},{icon:'🔗',val:p.shares,label:'Shares'}].map(s=>(
          <div key={s.label} style={{textAlign:'center',padding:'16px 8px',background:'rgba(124,58,237,0.07)',border:'1px solid rgba(124,58,237,0.14)',borderRadius:10}}>
            <div style={{fontSize:20,marginBottom:4}}>{s.icon}</div>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:20,fontWeight:800,color:'#e9d5ff'}}>{s.val}</div>
            <div style={{fontFamily:'DM Sans,sans-serif',fontSize:11,color:'rgba(196,181,253,0.45)',marginTop:2}}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{padding:'14px',background:'linear-gradient(135deg,rgba(124,58,237,0.12),rgba(168,85,247,0.08))',border:'1px solid rgba(124,58,237,0.2)',borderRadius:10,textAlign:'center'}}>
        <span style={{fontFamily:'Syne,sans-serif',fontSize:18,fontWeight:800,color:'#e9d5ff'}}>{total.toLocaleString()}</span>
        <span style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'rgba(196,181,253,0.5)',marginLeft:8}}>Total Engagements</span>
      </div>
    </ModalWrap>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

const TABS = ['Web Dev', 'UI/UX', 'Graphic Design'];
const SUB_TABS = ['All', 'Client', 'Personal'];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Web Dev');
  const [subTab, setSubTab] = useState('All');
  const [selected, setSelected] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const getFiltered = () => {
    let data = activeTab === 'Web Dev' ? webProjects : activeTab === 'UI/UX' ? uxProjects : graphicProjects;
    if (subTab !== 'All') data = data.filter(p => p.cat === subTab);
    return data;
  };

  const openModal = (p, type) => { setSelected(p); setSelectedType(type); };
  const closeModal = () => { setSelected(null); setSelectedType(null); };

  return (
    <section id="portfolio" style={{padding:'100px 0',background:'rgba(13,10,26,0.5)',position:'relative'}}>
      <style>{`
        .port-tab { font-family:'Syne',sans-serif;font-size:14px;font-weight:600;padding:10px 22px;border-radius:9px;background:none;border:1px solid transparent;cursor:pointer;transition:all 0.22s;color:rgba(196,181,253,0.45); }
        .port-tab.active,.port-tab:hover{background:rgba(124,58,237,0.14);border-color:rgba(124,58,237,0.3);color:#e9d5ff;}
        .sub-tab{font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500;padding:5px 16px;border-radius:6px;background:none;border:1px solid rgba(124,58,237,0.12);cursor:pointer;transition:all 0.2s;color:rgba(196,181,253,0.4);}
        .sub-tab.active,.sub-tab:hover{background:rgba(124,58,237,0.1);border-color:rgba(124,58,237,0.28);color:#c4b5fd;}
        .proj-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;}
        @media(max-width:640px){.proj-grid{grid-template-columns:1fr;}}
      `}</style>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
        <p style={{fontSize:11,letterSpacing:'3px',textTransform:'uppercase',color:'#a855f7',marginBottom:12,fontFamily:'DM Sans,sans-serif'}}>My Work</p>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:20,marginBottom:36}}>
          <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(28px,4vw,44px)',fontWeight:700,lineHeight:1.1}}>
            Selected<br/><span style={{color:'#a855f7'}}>Portfolio</span>
          </h2>
          {/* Main tabs */}
          <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
            {TABS.map(t=>(
              <button key={t} className={`port-tab ${activeTab===t?'active':''}`} onClick={()=>{setActiveTab(t);setSubTab('All')}}>{t}</button>
            ))}
          </div>
        </div>

        {/* Sub tabs */}
        <div style={{display:'flex',gap:8,marginBottom:28,flexWrap:'wrap',alignItems:'center'}}>
          <span style={{fontFamily:'DM Sans,sans-serif',fontSize:12,color:'rgba(196,181,253,0.35)',marginRight:4}}>Filter:</span>
          {SUB_TABS.map(t=>(
            <button key={t} className={`sub-tab ${subTab===t?'active':''}`} onClick={()=>setSubTab(t)}>{t}</button>
          ))}
        </div>

        {/* Category description */}
        <div style={{marginBottom:32,padding:'14px 18px',background:'rgba(124,58,237,0.05)',border:'1px solid rgba(124,58,237,0.1)',borderRadius:10,display:'flex',alignItems:'center',gap:12}}>
          <span style={{fontSize:20}}>{activeTab==='Web Dev'?'⚛️':activeTab==='UI/UX'?'🎨':'✦'}</span>
          <p style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'rgba(196,181,253,0.55)',lineHeight:1.5}}>
            {activeTab==='Web Dev' && 'React-built web projects with live previews and source code. Each project has a live demo and GitHub link.'}
            {activeTab==='UI/UX' && 'Full UX case studies covering problem discovery, solution design, and measurable outcomes. Click any card to read the case study.'}
            {activeTab==='Graphic Design' && 'Brand identities, posters, and social media design work. Each post shows real engagement metrics.'}
          </p>
        </div>

        {/* Cards */}
        <div className="proj-grid">
          {getFiltered().map(p => (
            activeTab === 'Web Dev' ? <WebCard key={p.id} p={p} onClick={()=>openModal(p,'web')} /> :
            activeTab === 'UI/UX' ? <UXCard key={p.id} p={p} onClick={()=>openModal(p,'ux')} /> :
            <GraphicCard key={p.id} p={p} onClick={()=>openModal(p,'graphic')} />
          ))}
        </div>

        {getFiltered().length === 0 && (
          <div style={{textAlign:'center',padding:'60px 0',color:'rgba(196,181,253,0.35)',fontFamily:'DM Sans,sans-serif'}}>
            No projects in this category yet. Check back soon!
          </div>
        )}
      </div>

      {/* Modals */}
      {selected && selectedType === 'ux' && <UXModal p={selected} onClose={closeModal} />}
      {selected && selectedType === 'graphic' && <GraphicModal p={selected} onClose={closeModal} />}
    </section>
  );
}
