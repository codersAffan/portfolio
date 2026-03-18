import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: "/icons/react.svg", name: "React" },
  { icon: "/icons/javascript.svg", name: "JavaScript" },
  { icon: "/icons/html5.svg", name: "HTML5" },
  { icon: "/icons/css3.svg", name: "CSS3" },
  { icon: "/icons/tailwind.svg", name: "Tailwind" },
  { icon: "/icons/figma.svg", name: "Figma" },
  { icon: "/icons/git.svg", name: "Git" },
  { icon: "/icons/vite.svg", name: "Vite" },
];

export default function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const skillsRef = useRef([]);
  const avatarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content reveal
      gsap.fromTo(leftRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true } }
      );
      // Right reveal
      gsap.fromTo(rightRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true } }
      );
      // Skill items stagger
      gsap.fromTo(skillsRef.current,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: "back.out(1.4)",
          scrollTrigger: { trigger: rightRef.current, start: "top 75%", once: true } }
      );
      // Avatar float
      gsap.to(avatarRef.current, { y: -10, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section" style={{ background: "#ffffff" }}>
      <style>{`
        .skill-chip {
          display: flex; flex-direction: column; align-items: center;
          gap: 5px; padding: 14px 10px; border-radius: 12px;
          background: #fafaf9; border: 1px solid #e5e0fa;
          transition: all 0.22s; cursor: default;
        }
        .skill-chip:hover { background: #f3f0ff; border-color: #c4b5fd; transform: translateY(-3px); box-shadow: 0 6px 16px rgba(124,58,237,0.1); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        @media(max-width:768px) { .about-grid { grid-template-columns: 1fr; gap: 48px; } }
        .skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        @media(max-width:480px) { .skills-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <span className="label">Who I Am</span>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              I make things<br />people <span>actually</span> use.
            </h2>

            <p style={{ color: "#7c6fa0", lineHeight: 1.85, marginBottom: 18, fontSize: 15 }}>
              I'm Affan, a Second Year BSc IT student who operates at the crossroads of <strong style={{ color: "#18103a" }}>code, design, and product thinking</strong>.
            </p>
            <p style={{ color: "#7c6fa0", lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
              I don't just build things that work — I build things that <strong style={{ color: "#18103a" }}>convert, retain, and delight</strong>. Beyond tech, I study entrepreneurship and business so every product decision is grounded in real-world value.
            </p>

            <p style={{ color: "#7c6fa0", lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
              My approach combines <strong style={{ color: "#18103a" }}>strategic thinking with hands-on execution</strong>. I don't just follow trends — I analyze user behavior, validate ideas, and build solutions that actually solve real problems. Every pixel, every line of code is intentional.
            </p>
            
            {/* Badges */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                { icon: "/icons/graduation.svg", text: "SY BSc IT" },
                { icon: "/icons/linkedin.svg", text: "Open to Internships" },
                { icon: "/icons/vite.svg", text: "Aspiring Founder" },
                { icon: "/icons/location.svg", text: "Mumbai, India" },
              ].map(p => (
                <div key={p.text} style={{ display: "flex", alignItems: "center", gap: 7, background: "white", border: "1px solid #e5e0fa", borderRadius: 8, padding: "7px 13px", fontSize: 13, color: "#3d2e6b", boxShadow: "0 1px 4px rgba(124,58,237,0.06)" }}>
                  <img src={p.icon} alt={p.text} style={{ width: 16, height: 16 }} />{p.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — stack */}
          <div ref={rightRef} style={{ opacity: 0 }}>
            <p style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#7c3aed", marginBottom: 20, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>My Stack</p>
            <div className="skills-grid">
              {skills.map((t, i) => (
                <div key={t.name} className="skill-chip" ref={el => skillsRef.current[i] = el} style={{ opacity: 0 }}>
                  <img src={t.icon} alt={t.name} style={{ width: 28, height: 28, lineHeight: 1 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#7c6fa0", fontWeight: 500, textAlign: "center" }}>{t.name}</span>
                </div>
              ))}
            </div>

            {/* Problems I solve */}
            <div style={{ background: "#f5f3ff", border: "1px solid #e5e0fa", borderRadius: 14, padding: "20px 22px", marginTop: 32, marginBottom: 28 }}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "#18103a", marginBottom: 12 }}>Problems I solve</p>
              {[
                { q: "Website doesn't convert?", a: "UX + copy + CTA redesign" },
                { q: "Brand looks unprofessional?", a: "Identity that builds trust" },
                { q: "App is hard to use?", a: "Clarity-first redesign" },
                { q: "Need a dev who gets design?", a: "That's exactly me." },
              ].map(item => (
                <div key={item.q} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                  <span style={{ color: "#a855f7", flexShrink: 0, marginTop: 2 }}>▸</span>
                  <span style={{ fontSize: 13, color: "#3d2e6b" }}>
                    <strong style={{ color: "#18103a" }}>{item.q}</strong> → {item.a}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently exploring */}
            <div style={{ marginTop: 24, padding: "18px 20px", background: "#f5f3ff", border: "1px solid #e5e0fa", borderRadius: 12 }}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700, color: "#7c3aed", marginBottom: 10, letterSpacing: "0.5px", textTransform: "uppercase" }}>Currently Exploring</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["Next.js", "TypeScript", "Framer Motion", "Startup Finance"].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
