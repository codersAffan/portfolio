import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const roles = [
  "I Build Interfaces That Convert",
  "I Turn Ideas Into Products",
  "I Design Experiences That Stick",
  "I Bridge Design & Development",
];

export default function Hero({ visitorData }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const roleRef = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const statsRef = useRef(null);
  const floatRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.fromTo(badgeRef.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
        .fromTo(h1Ref.current,     { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" }, "-=0.2")
        .fromTo(roleRef.current,   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.3")
        .fromTo(subRef.current,    { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .fromTo(btnsRef.current,   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .fromTo(statsRef.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.1");

      gsap.to(floatRef.current, { y: -14, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(orbRef.current, { scale: 1.18, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => { setRoleIdx(i => (i + 1) % roles.length); setRoleVisible(true); }, 350);
    }, 3200);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="home" ref={heroRef} style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden", paddingTop: 80,
      background: "linear-gradient(155deg, #fafaf9 0%, #f5f3ff 40%, #fafaf9 100%)",
    }}>
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(124,58,237,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

      {/* Glow orb */}
      <div ref={orbRef} style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none" }} />

      {/* Floating accent shape */}
      <div ref={floatRef} style={{ position: "absolute", top: "20%", right: "12%", width: 56, height: 56, borderRadius: 14, border: "2px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.04)", pointerEvents: "none", transform: "rotate(15deg)" }} />
      <div style={{ position: "absolute", bottom: "25%", right: "8%", width: 28, height: 28, borderRadius: "50%", background: "rgba(168,85,247,0.15)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "55%", right: "20%", width: 12, height: 12, borderRadius: "50%", background: "#a855f7", opacity: 0.4, pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>

        {/* Badge */}
        <div ref={badgeRef} style={{ opacity: 0, marginBottom: 28 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "white", border: "1px solid rgba(124,58,237,0.18)",
            borderRadius: 100, padding: "8px 18px",
            boxShadow: "0 2px 12px rgba(124,58,237,0.1)",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", display: "inline-block" }} />
            <span style={{ fontSize: 13, color: "#3d2e6b", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              {visitorData?.name ? `Welcome back, ${visitorData.name}` : "Available for Internship & Freelance"}
            </span>
          </div>
        </div>

        {/* H1 */}
        <div ref={h1Ref} style={{ opacity: 0 }}>
          <h1 style={{ fontSize: "clamp(40px, 6.5vw, 80px)", fontWeight: 800, color: "#18103a", letterSpacing: "-2.5px", marginBottom: 16, lineHeight: 1.02 }}>
            Hi, I'm <span style={{ color: "#7c3aed" }}>Affan</span>
          </h1>
        </div>

        {/* Rotating role */}
        <div ref={roleRef} style={{ opacity: 0, marginBottom: 20, minHeight: "clamp(36px,5vw,52px)" }}>
          <p style={{
            fontSize: "clamp(20px, 3.2vw, 42px)", fontWeight: 700,
            fontFamily: "'Syne', sans-serif",
            color: "#7c6fa0", letterSpacing: "-0.5px", lineHeight: 1.15,
            opacity: roleVisible ? 1 : 0,
            transform: roleVisible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}>
            {roles[roleIdx]}
          </p>
        </div>

        {/* Sub */}
        <div ref={subRef} style={{ opacity: 0 }}>
          <p style={{ maxWidth: 510, color: "#7c6fa0", fontSize: 16, lineHeight: 1.8, marginBottom: 40, fontFamily: "'DM Sans', sans-serif" }}>
            Frontend Developer · UI/UX Designer · Graphic Designer.{" "}
            {visitorData?.name
              ? `${visitorData.name}, let's build something that turns your visitors into customers.`
              : "I help startups and businesses turn ideas into products people love."}
          </p>
        </div>

        {/* CTAs */}
        <div ref={btnsRef} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 64, opacity: 0 }}>
          <button className="btn btn-primary" onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>
            View My Work →
          </button>
          <button className="btn btn-outline" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Let's Talk
          </button>
        </div>

        {/* Stats */}
        <div ref={statsRef} style={{ opacity: 0, display: "flex", gap: 0, flexWrap: "wrap", paddingTop: 32, borderTop: "1px solid rgba(124,58,237,0.12)" }}>
          {[
            { num: "10+", label: "Projects Built" },
            { num: "3",   label: "Skill Domains" },
            { num: "2+",  label: "Years Experience" },
            { num: "∞",   label: "Drive to Build" },
          ].map((s, i) => (
            <div key={s.label} style={{ flex: "1 1 120px", paddingRight: 32, paddingLeft: i === 0 ? 0 : 32, borderRight: i < 3 ? "1px solid rgba(124,58,237,0.1)" : "none" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(26px,3vw,36px)", fontWeight: 800, color: "#18103a" }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "#7c6fa0", marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4, animation: "float 2.5s ease-in-out infinite" }}>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, transparent, #7c3aed)" }} />
        <span style={{ fontSize: 9, letterSpacing: "2.5px", color: "#7c3aed", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
      </div>
    </section>
  );
}
