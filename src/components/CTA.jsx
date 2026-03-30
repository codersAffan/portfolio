import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef  = useRef(null);
  const boxRef      = useRef(null);
  const headRef     = useRef(null);
  const subRef      = useRef(null);
  const btnsRef     = useRef(null);
  const badgesRef   = useRef(null);
  const orbRef      = useRef(null);
  const ringRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Box slides up
      gsap.fromTo(boxRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: boxRef.current, start: "top 80%", once: true } }
      );
      // Stagger inner elements
      const tl = gsap.timeline({
        scrollTrigger: { trigger: boxRef.current, start: "top 78%", once: true }
      });
      tl.fromTo(headRef.current,  { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.2)
        .fromTo(subRef.current,   { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.4)
        .fromTo(btnsRef.current,  { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.55)
        .fromTo(badgesRef.current,{ y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }, 0.7);

      // Floating word tags
      // Removed floating word animations

      // Orb pulse
      gsap.to(orbRef.current, { scale: 1.15, opacity: 0.8, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" });

      // Ring spin
      gsap.to(ringRef.current, { rotation: 360, duration: 20, repeat: -1, ease: "none", transformOrigin: "50% 50%" });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: "#ffffff", paddingTop: 40, paddingBottom: 20 }}>
      <style>{`
        @keyframes shimmer-text {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .cta-btn-main {
          display: inline-flex; align-items: center; gap: 10px;
          background: #18103a; color: white;
          padding: 16px 36px; border-radius: 12px; border: none;
          font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 800;
          cursor: pointer; transition: all 0.25s;
          box-shadow: 0 8px 28px rgba(24,16,58,0.28);
        }
        .cta-btn-main:hover { background: #7c3aed; transform: translateY(-3px); box-shadow: 0 14px 36px rgba(124,58,237,0.4); }
        .cta-btn-sec {
          display: inline-flex; align-items: center; gap: 8px;
          background: white; color: #7c3aed;
          padding: 16px 32px; border-radius: 12px;
          border: 1.5px solid #c4b5fd;
          font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
          cursor: pointer; transition: all 0.25s;
        }
        .cta-btn-sec:hover { background: #f3f0ff; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(124,58,237,0.14); }
      `}</style>

      <div className="container">
        <div ref={boxRef} style={{
          position: "relative", overflow: "hidden",
          background: "linear-gradient(145deg, #f5f3ff 0%, #ede9fe 50%, #f3f0ff 100%)",
          border: "1px solid #c4b5fd",
          borderRadius: 28,
          padding: "100px 60px",
          textAlign: "center",
          boxShadow: "0 24px 64px rgba(124,58,237,0.12)",
          opacity: 1,
        }}>
          {/* Dot grid overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(124,58,237,0.1) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

          {/* Glow orb */}
          <div ref={orbRef} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(20px)", pointerEvents: "none" }} />

          {/* Spinning ring */}
          <div ref={ringRef} style={{ position: "absolute", top: "50%", left: "50%", width: 480, height: 480, marginTop: -240, marginLeft: -240, border: "1px dashed rgba(124,58,237,0.15)", borderRadius: "50%", pointerEvents: "none" }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: 640, margin: "0 auto" }}>
            <span className="label" style={{ display: "block", textAlign: "center", marginBottom: 16 }}>Let's Work Together</span>

            <div ref={headRef} style={{ opacity: 1, marginBottom: 20 }}>
              <h2 style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(40px,5vw,56px)",
                fontWeight: 800, lineHeight: 1.08,
                letterSpacing: "-2px", color: "#18103a",
                marginBottom: 10,
              }}>
                Have a project<br />in mind?
              </h2>
              <p style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(22px,3.5vw,38px)",
                fontWeight: 700, lineHeight: 1.1,
                background: "linear-gradient(90deg, #7c3aed, #a855f7, #7c3aed)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer-text 3s linear infinite",
                letterSpacing: "-1px",
              }}>
                Let's build it together.
              </p>
            </div>

            <p ref={subRef} style={{ opacity: 0, fontSize: 16, color: "#7c6fa0", lineHeight: 1.8, marginBottom: 40, fontFamily: "'DM Sans',sans-serif" }}>
              Whether you're a startup needing a website, a brand needing a design system, or a company looking for a sharp frontend intern — I'm ready.
            </p>

            <div ref={btnsRef} style={{ opacity: 0, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
              <button className="cta-btn-main" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                Start a Conversation →
              </button>
              <button className="cta-btn-sec" onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>
                See My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
