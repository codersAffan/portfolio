import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import expData from "../data/experience.json";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function ExpCard({ exp, side, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { x: side === "left" ? -50 : 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 82%", once: true },
        delay: index * 0.08,
      }
    );
  }, [side, index]);

  return (
    <div ref={cardRef} style={{ opacity: 0 }}>
      <div style={{
        background: "white", borderRadius: 16,
        border: "1px solid #e5e0fa",
        padding: "22px 24px",
        boxShadow: "0 2px 12px rgba(124,58,237,0.06)",
        transition: "all 0.28s",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#c4b5fd"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(124,58,237,0.14)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e0fa"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(124,58,237,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        {/* Left accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: exp.color, borderRadius: "16px 0 0 16px" }} />
        <div style={{ paddingLeft: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, fontFamily: "'DM Sans', sans-serif", letterSpacing: "1.5px", textTransform: "uppercase", color: exp.color, background: `${exp.color}14`, padding: "2px 9px", borderRadius: 4, fontWeight: 600 }}>{exp.type}</span>
            {exp.current && (
              <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#22c55e", fontFamily: "'DM Sans', sans-serif" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }} />Active
              </span>
            )}
          </div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: "#18103a", marginBottom: 3 }}>{exp.title}</h3>
          <p style={{ fontSize: 12, color: exp.color, marginBottom: 8, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{exp.org}</p>
          <p style={{ fontSize: 13, color: "#7c6fa0", lineHeight: 1.65, marginBottom: 12 }}>{exp.description}</p>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {exp.tags.map(t => (
              <span key={t} style={{ background: "#f5f3ff", border: "1px solid #e5e0fa", color: "#7c3aed", padding: "3px 9px", borderRadius: 5, fontSize: 11, fontFamily: "'DM Sans', sans-serif" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const dotRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%", once: true } }
      );

      // Animate the SVG path drawing
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength ? pathRef.current.getTotalLength() : 600;
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%", end: "bottom 80%", scrub: 1 }
        });
      }

      // Animate dots along the path
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2)",
            scrollTrigger: { trigger: dot, start: "top 80%", once: true }, delay: i * 0.1 }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section" style={{ background: "#f5f3ff" }}>
      <style>{`
        .exp-grid { display: grid; grid-template-columns: 1fr 60px 1fr; gap: 0; align-items: start; }
        @media(max-width:640px) { .exp-grid { grid-template-columns: 32px 1fr; } .exp-right-col { display: none; } .exp-left-col { display: none; } }
        .exp-row { display: contents; }
        .period-label { font-family: 'DM Sans', sans-serif; font-size: 12px; color: #7c6fa0; white-space: nowrap; padding-top: 10px; }
        .path-dot { flex-shrink: 0; }
      `}</style>

      <div className="container">
        <div ref={headerRef} style={{ opacity: 0, marginBottom: 64, maxWidth: 600 }}>
          <span className="label">My Journey</span>
          <h2 className="section-title">The path that<br />got me <span>here</span></h2>
          <p className="section-sub">From writing my first line of HTML to designing real products for real clients — here's how the story unfolded.</p>
        </div>

        {/* Timeline */}
        <div className="desktop-exp" style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>

          {/* Animated SVG pathway */}
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, transform: "translateX(-50%)", width: 60, pointerEvents: "none", display: "flex", justifyContent: "center" }} className="desktop-path">
            <svg width="2" height="100%" style={{ overflow: "visible" }}>
              <line x1="1" y1="0" x2="1" y2="100%" stroke="#e5e0fa" strokeWidth="2" strokeDasharray="6 4" />
              <line ref={pathRef} x1="1" y1="0" x2="1" y2="100%" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {expData.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={exp.id} className="exp-grid" style={{ gap: "0 0", marginBottom: 40, alignItems: "start" }}>
                {/* Left card or period */}
                <div className="exp-left-col" style={{ paddingRight: 28, paddingTop: 8 }}>
                  {isLeft ? (
                    <ExpCard exp={exp} side="left" index={i} />
                  ) : (
                    <div style={{ textAlign: "right", paddingTop: 12 }}>
                      <span className="period-label">{exp.period}</span>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 16, zIndex: 2 }}>
                  <div ref={el => dotRefs.current[i] = el} style={{
                    width: 16, height: 16, borderRadius: "50%",
                    background: exp.color, border: "3px solid white",
                    boxShadow: `0 0 0 3px ${exp.color}30`,
                    opacity: 0,
                  }} />
                </div>

                {/* Right card or period */}
                <div className="exp-right-col" style={{ paddingLeft: 28, paddingTop: 8 }}>
                  {!isLeft ? (
                    <ExpCard exp={exp} side="right" index={i} />
                  ) : (
                    <div style={{ paddingTop: 12 }}>
                      <span className="period-label">{exp.period}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile timeline */}
        <style>{`
          @media(min-width:641px) { .mobile-exp { display: none !important; } }
          @media(max-width:640px) { .desktop-exp { display: none !important; } }
        `}</style>
        <div className="mobile-exp">
          {expData.map((exp, i) => (
            <div key={exp.id} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 12 }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: exp.color, border: "2px solid white", boxShadow: `0 0 0 2px ${exp.color}40`, flexShrink: 0 }} />
                {i < expData.length - 1 && <div style={{ flex: 1, width: 2, background: "#e5e0fa", marginTop: 6 }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: 8 }}>
                <p style={{ fontSize: 11, color: "#7c6fa0", marginBottom: 6 }}>{exp.period}</p>
                <div style={{ background: "white", border: "1px solid #e5e0fa", borderRadius: 12, padding: "16px 18px", borderLeft: `3px solid ${exp.color}` }}>
                  <span style={{ fontSize: 10, color: exp.color, textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600 }}>{exp.type}</span>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, marginTop: 4, marginBottom: 4 }}>{exp.title}</h3>
                  <p style={{ fontSize: 12, color: "#a855f7", marginBottom: 6 }}>{exp.org}</p>
                  <p style={{ fontSize: 13, color: "#7c6fa0", lineHeight: 1.6 }}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
