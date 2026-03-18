import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: "/icons/react.svg", title: "Frontend Development", desc: "React apps with clean code, smooth animations, and mobile-first layouts.", features: ["React JS / Vite", "Component Architecture", "GSAP Animations", "Performance Optimisation"] },
  { icon: "/icons/figma.svg", title: "UI/UX Design", desc: "Research to hi-fi prototypes. Interfaces that reduce friction and increase conversions.", features: ["User Research & Flows", "Wireframing", "Figma Prototyping", "Design Systems"] },
  { icon: "/icons/illustrator.svg", title: "Graphic Design", desc: "Brand identities, social media kits, and marketing materials that make brands memorable.", features: ["Logo & Brand Identity", "Social Media Design", "Marketing Collateral", "Print Design"] },
  { icon: "/icons/vite.svg", title: "Landing Pages", desc: "High-converting pages designed and coded to turn visitors into customers.", features: ["Conversion-Focused Design", "CTA Optimisation", "Fast Load Times", "A/B Ready Layouts"] },
];

const steps = [
  { num: "01", title: "Discover", desc: "Listen, research, and understand your users, goals, and constraints." },
  { num: "02", title: "Define", desc: "Scope the problem, set success metrics, align on deliverables." },
  { num: "03", title: "Design", desc: "Wireframes → visual design → prototype. Iterate with your feedback." },
  { num: "04", title: "Develop", desc: "Clean, maintainable code. Every interaction, intentional." },
  { num: "05", title: "Deliver", desc: "Handoff, documentation, post-launch support. No ghosting." },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const stepRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%", once: true } });

      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(card, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: i * 0.1, scrollTrigger: { trigger: card, start: "top 85%", once: true } });
      });

      // Animate the connecting line
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "power2.inOut", transformOrigin: "left center", scrollTrigger: { trigger: lineRef.current, start: "top 85%", once: true } });
      }

      // Step circles animate in sequence
      stepRefs.current.forEach((step, i) => {
        const circle = step?.querySelector(".step-circle");
        const text = step?.querySelector(".step-text");
        gsap.fromTo(circle, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)", delay: i * 0.15, scrollTrigger: { trigger: step, start: "top 88%", once: true } });
        gsap.fromTo(text, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: i * 0.15 + 0.15, scrollTrigger: { trigger: step, start: "top 88%", once: true } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section" style={{ background: "#f5f3ff" }}>
      <style>{`
        .srv-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 20px; margin-bottom: 80px; }
        .srv-card { background: white; border: 1px solid #e5e0fa; border-radius: 16px; padding: 28px 24px; transition: all 0.28s; position: relative; overflow: hidden; }
        .srv-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #7c3aed, #a855f7); transform: scaleX(0); transform-origin: left; transition: transform 0.4s; }
        .srv-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(124,58,237,0.12); border-color: #c4b5fd; }
        .srv-card:hover::before { transform: scaleX(1); }
        .process-steps { display: flex; gap: 0; align-items: flex-start; position: relative; }
        @media(max-width:640px) { .process-steps { flex-direction: column; gap: 24px; } .proc-line-wrap { display: none !important; } }
      `}</style>

      <div className="container">
        {/* Header */}
        <div ref={headerRef} style={{ opacity: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
          <div>
            <span className="label">What I Do</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Services<br /><span>I Offer</span></h2>
          </div>
          <p style={{ maxWidth: 340, color: "#7c6fa0", fontSize: 15, lineHeight: 1.75 }}>
            Need a stunning UI, a sharp brand, or a conversion-ready website? I've got it covered.
          </p>
        </div>

        {/* Service cards */}
        <div className="srv-grid">
          {services.map((s, i) => (
            <div key={i} className="srv-card" ref={el => cardRefs.current[i] = el} style={{ opacity: 0 }}>
              <img src={s.icon} alt={s.title} style={{ width: 36, height: 36, marginBottom: 18 }} />
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 19, fontWeight: 700, color: "#18103a", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#7c6fa0", lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
              <div style={{ borderTop: "1px solid #f3f0ff", paddingTop: 16 }}>
                {s.features.map(f => (
                  <div key={f} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                    <span style={{ color: "#7c3aed", fontSize: 9 }}>◆</span>
                    <span style={{ fontSize: 13, color: "#7c6fa0" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="label" style={{ display: "block", textAlign: "center" }}>How I Work</span>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: "#18103a" }}>My <span style={{ color: "#7c3aed" }}>Process</span></h3>
          </div>

          <div style={{ background: "white", border: "1px solid #e5e0fa", borderRadius: 20, padding: "48px 40px", position: "relative", overflow: "hidden" }}>
            {/* Connecting line */}
            <div className="proc-line-wrap" style={{ position: "absolute", top: "calc(48px + 26px)", left: "calc(40px + 26px)", right: "calc(40px + 26px)", height: 2, background: "#f3f0ff", zIndex: 0 }}>
              <div ref={lineRef} style={{ height: "100%", background: "linear-gradient(90deg, #7c3aed, #a855f7)", borderRadius: 2 }} />
            </div>

            <div className="process-steps">
              {steps.map((s, i) => (
                <div key={i} ref={el => stepRefs.current[i] = el} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                  <div className="step-circle" style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 800, color: "white",
                    boxShadow: "0 4px 16px rgba(124,58,237,0.3)",
                    marginBottom: 14, flexShrink: 0,
                    border: "3px solid white",
                  }}>{s.num}</div>
                  <div className="step-text" style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700, color: "#18103a", marginBottom: 6 }}>{s.title}</p>
                    <p style={{ fontSize: 12, color: "#7c6fa0", lineHeight: 1.55, maxWidth: 120, margin: "0 auto" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
