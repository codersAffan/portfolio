import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const links = ["Home", "About", "Experience", "Portfolio", "Services", "Achievements", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .nav-link {
          font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 500;
          color: #7c6fa0; padding: 7px 13px; border-radius: 8px;
          background: none; border: none; cursor: pointer;
          transition: color 0.2s, background 0.2s; letter-spacing: 0.1px;
        }
        .nav-link:hover { color: #7c3aed; background: #f3f0ff; }
        .ham { display: flex; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .ham span { display: block; width: 22px; height: 2px; background: #3d2e6b; border-radius: 2px; transition: all 0.3s; }
        .ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .ham.open span:nth-child(2) { opacity: 0; }
        .ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        @media(max-width:768px) { .d-nav { display: none !important; } .ham { display: flex !important; } .hire-cta { display: none !important; } }
      `}</style>

      <nav ref={navRef} style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 24px", opacity: 0,
        background: scrolled ? "rgba(250,250,249,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.1)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        boxShadow: scrolled ? "0 2px 16px rgba(124,58,237,0.06)" : "none",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
          {/* Logo */}
          <button onClick={() => scrollTo("home")} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, background: "none", border: "none", cursor: "pointer", color: "#18103a", letterSpacing: "-0.5px" }}>
            M<span style={{ color: "#7c3aed" }}>A</span>
          </button>

          {/* Desktop links */}
          <div className="d-nav" style={{ display: "flex", gap: 2, alignItems: "center" }}>
            {links.map(l => (
              <button key={l} className="nav-link" onClick={() => scrollTo(l)}>{l}</button>
            ))}
          </div>

          {/* Hire me */}
          <a className="hire-cta" href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "9px 22px", background: "#7c3aed", color: "white",
              borderRadius: 9, fontFamily: "'Syne', sans-serif",
              fontSize: 13, fontWeight: 700, transition: "all 0.22s",
              boxShadow: "0 3px 12px rgba(124,58,237,0.28)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#9333ea"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#7c3aed"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Hire Me ↗</a>

          {/* Hamburger */}
          <button className={`ham ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none" }}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 66, left: 0, right: 0, bottom: 0, background: "rgba(250,250,249,0.98)", backdropFilter: "blur(24px)", zIndex: 999, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 4, borderTop: "1px solid rgba(124,58,237,0.1)" }}>
          {links.map(l => (
            <button key={l} className="nav-link" onClick={() => scrollTo(l)} style={{ textAlign: "left", fontSize: 18, padding: "13px 16px", width: "100%" }}>{l}</button>
          ))}
          <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); setMenuOpen(false); }}
            style={{ display: "block", marginTop: 16, padding: "14px", background: "#7c3aed", color: "white", borderRadius: 10, textAlign: "center", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15 }}>
            Hire Me ↗
          </a>
        </div>
      )}
    </>
  );
}
