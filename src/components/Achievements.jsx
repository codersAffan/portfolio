import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import achievementsData from "../data/achievements.json";
gsap.registerPlugin(ScrollTrigger);

function Counter({ target, suffix, duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 82%",
      once: true,
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration, ease: "power2.out",
          onUpdate: () => setCount(Math.round(obj.val)),
        });
      }
    });
    return () => trigger.kill();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Achievements() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Certificates");
  const statRefs = useRef([]);
  const certRefs = useRef([]);
  const eventRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%", once: true } });

      statRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: "back.out(1.4)", delay: i * 0.1, scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate cards on tab switch
    const refs = activeTab === "Certificates" ? certRefs.current : eventRefs.current;
    refs.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out", delay: i * 0.08 });
    });
  }, [activeTab]);

  const { stats, certificates, events } = achievementsData;

  return (
    <section id="achievements" ref={sectionRef} className="section" style={{ background: "#ffffff" }}>
      <style>{`
        .stat-card { background: white; border: 1px solid #e5e0fa; border-radius: 16px; padding: 28px 24px; text-align: center; transition: all 0.25s; box-shadow: 0 2px 8px rgba(124,58,237,0.05); }
        .stat-card:hover { border-color: #c4b5fd; transform: translateY(-4px); box-shadow: 0 10px 28px rgba(124,58,237,0.12); }
        .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-bottom: 64px; }
        @media(max-width:768px) { .stats-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:400px) { .stats-grid { grid-template-columns: 1fr 1fr; } }
        .ach-tab { font-family:'Syne',sans-serif; font-size:14px; font-weight:700; padding:10px 24px; border-radius:10px; border:1.5px solid #e5e0fa; background:none; cursor:pointer; transition:all 0.2s; color:#7c6fa0; }
        .ach-tab.active { background:#7c3aed; border-color:#7c3aed; color:white; box-shadow:0 4px 14px rgba(124,58,237,0.28); }
        .ach-tab:hover:not(.active) { border-color:#c4b5fd; color:#7c3aed; background:#f3f0ff; }
        .cert-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 16px; }
        .cert-card { background: #f5f3ff; border: 1px solid #e5e0fa; border-radius: 14px; padding: 22px; transition: all 0.25s; display: flex; align-items: flex-start; gap: 14px; }
        .cert-card:hover { background: white; border-color: #c4b5fd; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(124,58,237,0.1); }
        .event-card { background: white; border: 1px solid #e5e0fa; border-radius: 14px; padding: 24px; transition: all 0.25s; margin-bottom: 14px; position: relative; overflow: hidden; }
        .event-card::before { content:''; position:absolute; top:0; left:0; bottom:0; width:3px; background:linear-gradient(to bottom,#7c3aed,#a855f7); }
        .event-card:hover { border-color: #c4b5fd; transform: translateX(4px); box-shadow: 0 8px 24px rgba(124,58,237,0.1); }
      `}</style>

      <div className="container">
        {/* Header */}
        <div ref={headerRef} style={{ opacity: 0, marginBottom: 48 }}>
          <span className="label">Recognition</span>
          <h2 className="section-title">Achievements &<br /><span>Milestones</span></h2>
        </div>

        {/* Stat counters */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card" ref={el => statRefs.current[i] = el} style={{ opacity: 0 }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,44px)", fontWeight: 800, color: "#7c3aed", lineHeight: 1, marginBottom: 8 }}>
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 14, color: "#7c6fa0", fontFamily: "'DM Sans',sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
          {["Certificates", "Events"].map(t => (
            <button key={t} className={`ach-tab ${activeTab === t ? "active" : ""}`} onClick={() => setActiveTab(t)}>{t}</button>
          ))}
        </div>

        {/* Certificates */}
        {activeTab === "Certificates" && (
          <div className="cert-grid">
            {certificates.map((c, i) => (
              <div key={c.id} className="cert-card" ref={el => certRefs.current[i] = el}>
                <img src={c.icon} alt={c.title} style={{ width: 32, height: 32, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700, color: "#18103a", marginBottom: 4 }}>{c.title}</p>
                  <p style={{ fontSize: 13, color: "#7c3aed", marginBottom: 4 }}>{c.issuer}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 12, color: "#7c6fa0" }}>{c.date}</span>
                    <a href={c.credentialUrl} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: "#7c3aed", fontWeight: 600, fontFamily: "'DM Sans',sans-serif", textDecoration: "none", background: "#ede9fe", padding: "2px 8px", borderRadius: 4 }}>View ↗</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events */}
        {activeTab === "Events" && (
          <div>
            {events.map((e, i) => (
              <div key={e.id} className="event-card" ref={el => eventRefs.current[i] = el}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <img src={e.icon} alt={e.title} style={{ width: 32, height: 32, flexShrink: 0, paddingTop: 2 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700, color: "#18103a" }}>{e.title}</h3>
                      <span style={{ background: "#f3f0ff", border: "1px solid #e5e0fa", color: "#7c3aed", padding: "3px 10px", borderRadius: 6, fontSize: 11, fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>{e.role}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#7c6fa0", lineHeight: 1.65, marginBottom: 10 }}>{e.description}</p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 12, color: "#7c6fa0", display: "flex", alignItems: "center", gap: 4 }}><img src="/icons/calendar.svg" alt="Date" style={{ width: 14, height: 14 }} /> {e.date}</span>
                      <span style={{ fontSize: 12, color: "#7c6fa0", display: "flex", alignItems: "center", gap: 4 }}><img src="/icons/people.svg" alt="Attendees" style={{ width: 14, height: 14 }} /> {e.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
