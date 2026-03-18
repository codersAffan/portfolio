import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FirstVisitModal({ onSubmit }) {
  const [step, setStep]       = useState(0);
  const [name, setName]       = useState("");
  const [business, setBusiness] = useState("");
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(boxRef.current,
      { scale: 0.92, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.5)" }
    );
  }, []);

  const next = () => {
    if (step === 0) { setStep(1); return; }
    if (step === 1 && name.trim()) { setStep(2); return; }
    if (step === 2) { onSubmit({ name: name.trim(), business: business.trim() || "Exploring" }); }
  };

  const skip = () => onSubmit({ name: name.trim() || "Visitor", business: business.trim() || "Exploring" });

  const steps = [
    { label: null,        title: "Hey there",        sub: "Before you explore, let me know a bit about you — it helps me personalise your experience." },
    { label: "Step 1 / 2", title: "What's your name?",   sub: "I'll greet you personally throughout the site." },
    { label: "Step 2 / 2", title: "Your company or project?", sub: "Tell me who you represent or what you're building." },
  ];
  const s = steps[step];

  const inputStyle = {
    width: "100%", background: "#fafaf9",
    border: "1.5px solid #e5e0fa", borderRadius: 10,
    padding: "13px 16px", color: "#18103a",
    fontFamily: "'DM Sans',sans-serif", fontSize: 15,
    outline: "none", marginTop: 8, boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(24,16,58,0.4)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000, padding: 24 }}>
      <div ref={boxRef} style={{ background: "white", borderRadius: 22, padding: "44px 40px", maxWidth: 440, width: "100%", boxShadow: "0 32px 80px rgba(24,16,58,0.18)", position: "relative" }}>
        {/* Logo mark */}
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: "#18103a", marginBottom: 28 }}>
          M<span style={{ color: "#7c3aed" }}>A</span>
        </div>

        {/* Step dots */}
        {step > 0 && (
          <div style={{ display: "flex", gap: 6, marginBottom: 22 }}>
            {[1, 2].map(i => (
              <div key={i} style={{ height: 4, borderRadius: 2, background: step >= i ? "#7c3aed" : "#e5e0fa", width: step >= i ? 28 : 10, transition: "all 0.3s" }} />
            ))}
          </div>
        )}

        {/* Content */}
        <div key={step}>
          {s.label && <span style={{ fontSize: 11, color: "#7c3aed", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{s.label}</span>}
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, color: "#18103a", marginBottom: 8 }}>{s.title}</h2>
          <p style={{ fontSize: 14, color: "#7c6fa0", lineHeight: 1.65, marginBottom: 22 }}>{s.sub}</p>

          {step === 1 && (
            <input style={inputStyle} placeholder="e.g. Sarah Chen" value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && name.trim() && next()}
              onFocus={e => { e.target.style.borderColor = "#a855f7"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.08)"; }}
              onBlur={e  => { e.target.style.borderColor = "#e5e0fa"; e.target.style.boxShadow = "none"; }}
              autoFocus
            />
          )}
          {step === 2 && (
            <input style={inputStyle} placeholder="e.g. TechStart Inc, or my startup"
              value={business} onChange={e => setBusiness(e.target.value)}
              onKeyDown={e => e.key === "Enter" && next()}
              onFocus={e => { e.target.style.borderColor = "#a855f7"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.08)"; }}
              onBlur={e  => { e.target.style.borderColor = "#e5e0fa"; e.target.style.boxShadow = "none"; }}
              autoFocus
            />
          )}
        </div>

        <button className="btn btn-primary" onClick={next} disabled={step === 1 && !name.trim()}
          style={{ width: "100%", justifyContent: "center", marginTop: 20, opacity: (step === 1 && !name.trim()) ? 0.45 : 1 }}>
          {step === 0 ? "Let's Go →" : step === 1 ? "Continue →" : "Enter Portfolio →"}
        </button>

        {step > 0 && (
          <button onClick={skip} style={{ display: "block", width: "100%", textAlign: "center", background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#7c6fa0", marginTop: 12, fontFamily: "'DM Sans',sans-serif", padding: "4px" }}>
            skip for now
          </button>
        )}
      </div>
    </div>
  );
}
