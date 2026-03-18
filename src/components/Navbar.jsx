import { useState, useEffect } from "react";

const links = ["Home","About","Experience","Portfolio","Services","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        .nav-link {
          font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500;
          color:rgba(245,243,255,0.52); cursor:pointer;
          padding:6px 12px; border-radius:6px;
          transition:color 0.2s, background 0.2s;
          background:none; border:none; letter-spacing:0.2px;
        }
        .nav-link:hover { color:#e9d5ff; background:rgba(124,58,237,0.08); }
        .hm { display:flex; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; display:none; }
        .hm span { display:block; width:22px; height:2px; background:rgba(245,243,255,0.8); transition:all 0.3s; transform-origin:center; }
        .hm.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
        .hm.open span:nth-child(2){opacity:0;}
        .hm.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
        @media(max-width:768px){ .d-links{display:none!important;} .hm{display:flex!important;} .hire-btn{display:none!important;} }
      `}</style>

      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:1000,
        padding:'0 24px',
        background: scrolled ? 'rgba(5,3,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.1)' : '1px solid transparent',
        transition:'all 0.3s',
      }}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
          {/* Logo */}
          <button onClick={()=>scrollTo('home')} style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:20,cursor:'pointer',letterSpacing:'-0.5px',background:'none',border:'none',color:'white'}}>
            M<span style={{color:'#a855f7'}}>A</span>
          </button>

          {/* Desktop links */}
          <div className="d-links" style={{display:'flex',gap:2,alignItems:'center'}}>
            {links.map(l=>(
              <button key={l} className="nav-link" onClick={()=>scrollTo(l)}>{l}</button>
            ))}
          </div>

          {/* Hire me */}
          <a className="hire-btn" href="#contact" onClick={e=>{e.preventDefault();scrollTo('contact')}} style={{
            fontFamily:'Syne,sans-serif', fontSize:13, fontWeight:700,
            padding:'8px 20px', background:'rgba(124,58,237,0.14)',
            border:'1px solid rgba(124,58,237,0.28)', borderRadius:8,
            color:'#c4b5fd', cursor:'pointer', transition:'all 0.2s', textDecoration:'none', display:'inline-block',
          }}
            onMouseEnter={e=>{e.target.style.background='rgba(124,58,237,0.25)';e.target.style.borderColor='rgba(168,85,247,0.5)';}}
            onMouseLeave={e=>{e.target.style.background='rgba(124,58,237,0.14)';e.target.style.borderColor='rgba(124,58,237,0.28)';}}
          >Hire Me</a>

          {/* Hamburger */}
          <button className={`hm ${menuOpen?'open':''}`} onClick={()=>setMenuOpen(!menuOpen)}>
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{position:'fixed',top:64,left:0,right:0,bottom:0,background:'rgba(5,3,15,0.97)',backdropFilter:'blur(20px)',zIndex:999,padding:'32px 24px',display:'flex',flexDirection:'column',gap:4}}>
          {links.map(l=>(
            <button key={l} className="nav-link" onClick={()=>scrollTo(l)} style={{textAlign:'left',fontSize:18,padding:'14px 16px',width:'100%'}}>
              {l}
            </button>
          ))}
          <a href="#contact" onClick={e=>{e.preventDefault();scrollTo('contact');setMenuOpen(false)}} style={{display:'block',marginTop:16,padding:'14px 20px',background:'linear-gradient(135deg,#7c3aed,#a855f7)',color:'white',fontFamily:'Syne,sans-serif',fontWeight:700,borderRadius:10,textAlign:'center',textDecoration:'none',fontSize:15}}>
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
