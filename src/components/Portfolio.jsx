import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import webData from "../data/webProjects.json";
import uxData from "../data/uxProjects.json";
import graphicData from "../data/graphicProjects.json";
gsap.registerPlugin(ScrollTrigger);

// ── Image with fallback gradient ──────────────────────────────────────────
function ProjectImage({ src, alt, gradient, style }) {
  const [err, setErr] = useState(false);
  if (err || !src) {
    return <div style={{ ...style, background: gradient || "linear-gradient(135deg,#f3f0ff,#ede9fe)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: 11, color: "#a855f7", fontFamily: "'DM Sans',sans-serif", opacity: 0.6 }}>Image coming soon</span>
    </div>;
  }
  return <img src={src} alt={alt} onError={() => setErr(true)} style={{ ...style, objectFit: "cover" }} />;
}

const GRADIENTS = ["linear-gradient(135deg,#f3f0ff,#ddd6fe)", "linear-gradient(135deg,#ede9fe,#c4b5fd44)", "linear-gradient(135deg,#faf5ff,#e9d5ff66)", "linear-gradient(135deg,#f5f3ff,#ddd6fe88)"];

// ── Web Project Card ──────────────────────────────────────────────────────
function WebCard({ p, idx }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: idx * 0.1, scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } });
  }, [idx]);

  return (
    <div ref={ref} style={{ opacity: 0, background: "white", border: "1px solid #e5e0fa", borderRadius: 18, overflow: "hidden", transition: "all 0.28s" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(124,58,237,0.14)"; e.currentTarget.style.borderColor = "#c4b5fd"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = "#e5e0fa"; }}
    >
      <div style={{ position: "relative" }}>
        <ProjectImage src={p.image} alt={p.title} gradient={GRADIENTS[idx % 4]} style={{ width: "100%", height: 200, display: "block" }} />
        <span style={{ position: "absolute", top: 12, left: 12, background: "white", border: "1px solid #e5e0fa", color: p.category === "Client" ? "#7c3aed" : "#9333ea", fontSize: 11, padding: "3px 10px", borderRadius: 6, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, letterSpacing: "0.5px" }}>
          {p.category}
        </span>
        <span style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.9)", color: "#7c6fa0", fontSize: 11, padding: "3px 10px", borderRadius: 6, fontFamily: "'DM Sans',sans-serif" }}>{p.year}</span>
      </div>
      <div style={{ padding: "20px 22px" }}>
        <p style={{ fontSize: 11, color: "#a855f7", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, marginBottom: 4 }}>{p.role}</p>
        <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 700, color: "#18103a", marginBottom: 8 }}>{p.title}</h3>
        <p style={{ fontSize: 13, color: "#7c6fa0", lineHeight: 1.65, marginBottom: 14 }}>{p.description}</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 16 }}>
          {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#7c3aed", color: "white", padding: "9px", borderRadius: 9, fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 700, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#9333ea"} onMouseLeave={e => e.currentTarget.style.background = "#7c3aed"}>
            <img src="/icons/link.svg" alt="Live" style={{ width: 14, height: 14, filter: "brightness(0) invert(1)" }} /> Live
          </a>
          <a href={p.sourceUrl} target="_blank" rel="noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#f5f3ff", color: "#7c3aed", border: "1px solid #e5e0fa", padding: "9px", borderRadius: 9, fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 700, textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#ede9fe"; e.currentTarget.style.borderColor = "#c4b5fd"; }} onMouseLeave={e => { e.currentTarget.style.background = "#f5f3ff"; e.currentTarget.style.borderColor = "#e5e0fa"; }}>
            <img src="/icons/github.svg" alt="Source" style={{ width: 14, height: 14 }} /> Source
          </a>
        </div>
      </div>
    </div>
  );
}

// ── UX Case Study Card ────────────────────────────────────────────────────
function UXCard({ p, idx, onOpen }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: idx * 0.1, scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } });
  }, [idx]);

  return (
    <div ref={ref} style={{ opacity: 0, background: "white", border: "1px solid #e5e0fa", borderRadius: 18, overflow: "hidden", cursor: "pointer", transition: "all 0.28s" }}
      onClick={() => onOpen(p)}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(124,58,237,0.14)"; e.currentTarget.style.borderColor = "#c4b5fd"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = "#e5e0fa"; }}
    >
      <ProjectImage src={p.image} alt={p.title} gradient={GRADIENTS[idx % 4]} style={{ width: "100%", height: 200, display: "block" }} />
      <div style={{ padding: "22px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <span style={{ fontSize: 10, color: "#7c3aed", background: "#f3f0ff", border: "1px solid #e5e0fa", padding: "2px 9px", borderRadius: 5, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{p.category}</span>
          <span style={{ fontSize: 12, color: "#7c6fa0" }}>{p.duration}</span>
        </div>
        <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 700, color: "#18103a", marginBottom: 4 }}>{p.title}</h3>
        <p style={{ fontSize: 13, color: "#a855f7", fontFamily: "'DM Sans',sans-serif", marginBottom: 10, fontStyle: "italic" }}>{p.subtitle}</p>
        <p style={{ fontSize: 13, color: "#7c6fa0", lineHeight: 1.65, marginBottom: 14 }}>{p.overview.slice(0, 130)}...</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 16 }}>
          {p.tags.slice(0, 3).map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid #f3f0ff" }}>
          <span style={{ fontSize: 13, color: "#7c3aed", fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>Read Case Study</span>
          <span style={{ color: "#7c3aed", fontSize: 16 }}>→</span>
        </div>
      </div>
    </div>
  );
}

// ── Graphic Design Card ───────────────────────────────────────────────────
function GraphicCard({ p, idx, onOpen }) {
  const ref = useRef(null);
  const total = p.views + p.likes + p.shares + p.saves;
  useEffect(() => {
    gsap.fromTo(ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: idx * 0.1, scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } });
  }, [idx]);

  return (
    <div ref={ref} style={{ opacity: 0, background: "white", border: "1px solid #e5e0fa", borderRadius: 18, overflow: "hidden", cursor: "pointer", transition: "all 0.28s" }}
      onClick={() => onOpen(p)}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(124,58,237,0.14)"; e.currentTarget.style.borderColor = "#c4b5fd"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = "#e5e0fa"; }}
    >
      <div style={{ position: "relative" }}>
        <ProjectImage src={p.image} alt={p.title} gradient={GRADIENTS[idx % 4]} style={{ width: "100%", height: 220, display: "block" }} />
        <div style={{ position: "absolute", bottom: 10, left: 10, right: 10, display: "flex", gap: 6 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 8, padding: "6px 10px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, color: "#18103a" }}>{p.views.toLocaleString()}</div>
            <div style={{ fontSize: 10, color: "#7c6fa0" }}>Views</div>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 8, padding: "6px 10px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, color: "#18103a" }}>{p.likes}</div>
            <div style={{ fontSize: 10, color: "#7c6fa0" }}>Likes</div>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 8, padding: "6px 10px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, color: "#18103a" }}>{p.saves}</div>
            <div style={{ fontSize: 10, color: "#7c6fa0" }}>Saves</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "18px 20px" }}>
        <span style={{ fontSize: 10, color: "#7c3aed", background: "#f3f0ff", border: "1px solid #e5e0fa", padding: "2px 8px", borderRadius: 4, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{p.category}</span>
        <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700, color: "#18103a", margin: "8px 0 6px" }}>{p.title}</h3>
        <p style={{ fontSize: 13, color: "#7c6fa0", lineHeight: 1.6, marginBottom: 12 }}>{p.description}</p>
        <div style={{ background: "#f5f3ff", border: "1px solid #e5e0fa", borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, color: "#7c6fa0" }}>Total Engagement</span>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, color: "#7c3aed" }}>{total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

// ── UX Case Study Modal (full page) ───────────────────────────────────────
function UXModal({ p, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(24,16,58,0.55)", backdropFilter: "blur(14px)", zIndex: 8000, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "24px 16px", overflowY: "auto" }}>
      <div style={{ background: "white", borderRadius: 24, maxWidth: 700, width: "100%", position: "relative", boxShadow: "0 32px 80px rgba(0,0,0,0.25)", animation: "slideUp 0.3s ease", marginTop: 16, marginBottom: 16 }}>
        <style>{`@keyframes slideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}`}</style>
        {/* Header image */}
        <ProjectImage src={p.image} alt={p.title} gradient={GRADIENTS[0]} style={{ width: "100%", height: 240, borderRadius: "24px 24px 0 0", display: "block" }} />

        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, borderRadius: "50%", background: "white", border: "1px solid #e5e0fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer", color: "#3d2e6b", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>✕</button>

        <div style={{ padding: "32px 36px 40px" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <span className="tag">{p.category}</span>
            <span className="tag">{p.role}</span>
            <span className="tag">{p.duration}</span>
            <span className="tag">{p.year}</span>
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, color: "#18103a", marginBottom: 4 }}>{p.title}</h2>
          <p style={{ fontSize: 15, color: "#a855f7", fontStyle: "italic", marginBottom: 20 }}>{p.subtitle}</p>

          {/* Overview */}
          <div style={{ marginBottom: 24, padding: "18px 20px", background: "#f5f3ff", borderRadius: 12, border: "1px solid #e5e0fa" }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: "#7c3aed", marginBottom: 8, textTransform: "uppercase", letterSpacing: "1px" }}>Overview</p>
            <p style={{ fontSize: 14, color: "#3d2e6b", lineHeight: 1.75 }}>{p.overview}</p>
          </div>

          {/* Problem / Solution / Outcome */}
          {[{ icon: "/icons/link.svg", label: "Problem", content: p.problem }, { icon: "/icons/link.svg", label: "Solution", content: p.solution }, { icon: "/icons/link.svg", label: "Outcome", content: p.outcome }].map(s => (
            <div key={s.label} style={{ marginBottom: 16, padding: "16px 18px", background: "white", border: "1px solid #e5e0fa", borderRadius: 12 }}>
              <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: "#18103a", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}><img src={s.icon} alt={s.label} style={{ width: 14, height: 14 }} /> {s.label}</p>
              <p style={{ fontSize: 14, color: "#7c6fa0", lineHeight: 1.7 }}>{s.content}</p>
            </div>
          ))}

          {/* Research bullets */}
          <div style={{ marginBottom: 20, padding: "18px 20px", background: "#f5f3ff", borderRadius: 12, border: "1px solid #e5e0fa" }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: "#7c3aed", marginBottom: 12, textTransform: "uppercase", letterSpacing: "1px" }}>Research Conducted</p>
            {p.research.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                <span style={{ color: "#a855f7", flexShrink: 0 }}>▸</span>
                <p style={{ fontSize: 13, color: "#3d2e6b", lineHeight: 1.6 }}>{r}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: "#18103a", marginBottom: 12 }}>Process</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {p.process.map((step, i) => (
                <div key={step} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ background: "#7c3aed", color: "white", width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, fontFamily: "'Syne',sans-serif", flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ fontSize: 13, color: "#3d2e6b", fontFamily: "'DM Sans',sans-serif" }}>{step}</span>
                  {i < p.process.length - 1 && <span style={{ color: "#c4b5fd", marginLeft: 2 }}>→</span>}
                </div>
              ))}
            </div>
          </div>

          <a href={p.figmaUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            View Figma Prototype ↗
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Graphic Design Modal ──────────────────────────────────────────────────
function GraphicModal({ p, onClose }) {
  const total = p.views + p.likes + p.shares + p.saves;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(24,16,58,0.55)", backdropFilter: "blur(14px)", zIndex: 8000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
      onClick={onClose}>
      <div style={{ background: "white", borderRadius: 24, maxWidth: 540, width: "100%", position: "relative", boxShadow: "0 32px 80px rgba(0,0,0,0.25)", animation: "slideUp 0.3s ease" }}
        onClick={e => e.stopPropagation()}>
        <ProjectImage src={p.image} alt={p.title} gradient={GRADIENTS[0]} style={{ width: "100%", height: 220, borderRadius: "24px 24px 0 0", display: "block" }} />
        <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, width: 34, height: 34, borderRadius: "50%", background: "white", border: "1px solid #e5e0fa", cursor: "pointer", fontSize: 14, color: "#3d2e6b" }}>✕</button>
        <div style={{ padding: "28px 32px 32px" }}>
          <span className="tag" style={{ marginBottom: 10, display: "inline-block" }}>{p.category}</span>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: "#18103a", margin: "8px 0 10px" }}>{p.title}</h2>
          <p style={{ fontSize: 14, color: "#7c6fa0", lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 24 }}>
            {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
          </div>
          {/* Engagement stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 16 }}>
            {[{ icon: "/icons/eye.svg", val: p.views.toLocaleString(), label: "Views" }, { icon: "/icons/heart.svg", val: p.likes, label: "Likes" }, { icon: "/icons/link.svg", val: p.shares, label: "Shares" }, { icon: "/icons/bookmark.svg", val: p.saves, label: "Saves" }].map(s => (
              <div key={s.label} style={{ textAlign: "center", padding: "14px 8px", background: "#f5f3ff", border: "1px solid #e5e0fa", borderRadius: 10 }}>
                <img src={s.icon} alt={s.label} style={{ width: 18, height: 18, marginBottom: 4, display: "block", margin: "0 auto 4px" }} />
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 800, color: "#18103a" }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "#7c6fa0" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg,#f3f0ff,#ede9fe)", border: "1px solid #e5e0fa", borderRadius: 10, padding: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#7c6fa0" }}>Total Engagements</span>
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: "#7c3aed" }}>{total.toLocaleString()}</span>
          </div>

          {/* CTA Button */}
          <a href="https://drive.google.com/drive/folders/YOUR_FOLDER_ID" target="_blank" rel="noreferrer" style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#7c3aed", color: "white", padding: "13px 20px", borderRadius: 12, fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.2s", cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#9333ea"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(124,58,237,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#7c3aed"; e.currentTarget.style.boxShadow = ""; }}>
            <img src="/icons/link.svg" alt="View" style={{ width: 16, height: 16, filter: "brightness(0) invert(1)" }} />
            View Full Design on Drive →
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main Portfolio ────────────────────────────────────────────────────────
const TABS = ["Web Dev", "UI/UX", "Graphic Design"];
const SUB = ["All", "Client", "Personal"];

export default function Portfolio() {
  const [tab, setTab] = useState("Web Dev");
  const [sub, setSub] = useState("All");
  const [modal, setModal] = useState(null);
  const [modalType, setModalType] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%", once: true } });
  }, []);

  const getData = () => {
    const map = { "Web Dev": webData, "UI/UX": uxData, "Graphic Design": graphicData };
    let d = map[tab];
    if (sub !== "All") d = d.filter(p => p.category === sub);
    return d;
  };

  return (
    <section id="portfolio" className="section" style={{ background: "#ffffff" }}>
      <style>{`
        .port-tab { font-family:'Syne',sans-serif; font-size:14px; font-weight:700; padding:10px 22px; border-radius:10px; background:none; border:1.5px solid #e5e0fa; cursor:pointer; transition:all 0.2s; color:#7c6fa0; }
        .port-tab.active { background:#7c3aed; border-color:#7c3aed; color:white; box-shadow:0 4px 14px rgba(124,58,237,0.3); }
        .port-tab:hover:not(.active) { border-color:#c4b5fd; color:#7c3aed; background:#f3f0ff; }
        .sub-tab { font-family:'DM Sans',sans-serif; font-size:12px; font-weight:600; padding:5px 16px; border-radius:6px; background:none; border:1px solid #e5e0fa; cursor:pointer; transition:all 0.18s; color:#7c6fa0; }
        .sub-tab.active,.sub-tab:hover { background:#f3f0ff; border-color:#c4b5fd; color:#7c3aed; }
        .port-swiper { padding-bottom: 60px !important; }
        .port-swiper .swiper-slide { height: auto; }
        .port-swiper .swiper-pagination { bottom: 0 !important; }
        .port-swiper .swiper-pagination-bullet { background: #e5e0fa !important; opacity: 1 !important; }
        .port-swiper .swiper-pagination-bullet-active { background: #7c3aed !important; width: 20px !important; border-radius: 4px !important; }
      `}</style>

      <div className="container">
        <div ref={headerRef} style={{ opacity: 0 }}>
          <span className="label">My Work</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 36 }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Selected<br /><span>Portfolio</span></h2>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {TABS.map(t => <button key={t} className={`port-tab ${tab === t ? "active" : ""}`} onClick={() => { setTab(t); setSub("All"); }}>{t}</button>)}
            </div>
          </div>

          {/* Sub tabs + description */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "#7c6fa0", marginRight: 4 }}>Filter:</span>
            {SUB.map(s => <button key={s} className={`sub-tab ${sub === s ? "active" : ""}`} onClick={() => setSub(s)}>{s}</button>)}
          </div>
          <div style={{ marginBottom: 32, padding: "12px 16px", background: "#f5f3ff", border: "1px solid #e5e0fa", borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
            <img src={tab === "Web Dev" ? "/icons/react.svg" : tab === "UI/UX" ? "/icons/figma.svg" : "/icons/illustrator.svg"} alt={tab} style={{ width: 18, height: 18 }} />
            <p style={{ fontSize: 13, color: "#7c6fa0" }}>
              {tab === "Web Dev" && "Each project includes a live preview and source code link."}
              {tab === "UI/UX" && "Click any card to read the full UX case study — problem, research, solution, and outcomes."}
              {tab === "Graphic Design" && "Real engagement metrics for each post. Click to see the full stats breakdown."}
            </p>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          spaceBetween={22}
          pagination={{ clickable: true, dynamicBullets: false }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="port-swiper"
        >
          {getData().map((p, i) =>
            <SwiperSlide key={p.id}>
              {tab === "Web Dev" ? <WebCard p={p} idx={i} /> :
                tab === "UI/UX" ? <UXCard p={p} idx={i} onOpen={m => { setModal(m); setModalType("ux"); }} /> :
                  <GraphicCard p={p} idx={i} onOpen={m => { setModal(m); setModalType("graphic"); }} />
              }
            </SwiperSlide>
          )}
          {getData().length === 0 && 
            <SwiperSlide>
              <div style={{ width: "100%", color: "#7c6fa0", padding: "48px 0", textAlign: "center" }}>No projects in this filter yet.</div>
            </SwiperSlide>
          }
        </Swiper>
      </div>

      {modal && modalType === "ux" && <UXModal p={modal} onClose={() => setModal(null)} />}
      {modal && modalType === "graphic" && <GraphicModal p={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
