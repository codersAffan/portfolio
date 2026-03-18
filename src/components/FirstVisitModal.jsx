import { useState } from "react";

export default function FirstVisitModal({ onSubmit }) {
  const [step, setStep] = useState(0); // 0: greeting, 1: name, 2: business
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");

  const steps = [
    { label: null, title: "Hey there 👋", sub: "Before you explore, let me know a bit about you — it helps me make this experience feel personal." },
    { label: "Step 1 of 2", title: "What's your name?", sub: "I'll use this to greet you personally throughout the site." },
    { label: "Step 2 of 2", title: "Your company or project?", sub: "Tell me who you represent or what you're building." },
  ];

  const handleNext = () => {
    if (step === 0) { setStep(1); return; }
    if (step === 1 && name.trim()) { setStep(2); return; }
    if (step === 2) { onSubmit({ name: name.trim(), business: business.trim() || "Exploring" }); }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(5,3,15,0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 8000,
      padding: 24,
      animation: 'fadeIn 0.4s ease',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeIn { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:scale(1); } }
        @keyframes slideIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .modal-input {
          width: 100%;
          background: rgba(124,58,237,0.06);
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: 10px;
          padding: 14px 18px;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          margin-top: 8px;
        }
        .modal-input:focus {
          border-color: rgba(168,85,247,0.5);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.1);
        }
        .modal-input::placeholder { color: rgba(196,181,253,0.35); }
        .modal-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          border: none;
          border-radius: 10px;
          color: white;
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 16px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .modal-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(124,58,237,0.4); }
        .modal-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
        .skip-btn {
          background: none; border: none; color: rgba(196,181,253,0.4);
          font-family: 'DM Sans', sans-serif; font-size: 13px;
          cursor: pointer; margin-top: 12px; padding: 4px;
          transition: color 0.2s;
        }
        .skip-btn:hover { color: rgba(196,181,253,0.7); }
        .step-dot {
          width: 6px; height: 6px; border-radius: 50%;
          transition: all 0.3s;
        }
      `}</style>

      <div style={{
        background: 'rgba(13,10,26,0.95)',
        border: '1px solid rgba(124,58,237,0.2)',
        borderRadius: 20,
        padding: '48px 40px',
        maxWidth: 440,
        width: '100%',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.1)',
        animation: 'slideIn 0.4s ease',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Top glow */}
        <div style={{
          position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
          width: 200, height: 120,
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.3), transparent)',
          filter: 'blur(20px)',
        }} />

        {/* MA mark */}
        <div style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22,
          marginBottom: 32, letterSpacing: '-0.5px',
        }}>
          M<span style={{ color: '#a855f7' }}>A</span>
        </div>

        {/* Step indicator */}
        {step > 0 && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
            {[1,2].map(i => (
              <div key={i} className="step-dot" style={{
                background: step >= i ? '#a855f7' : 'rgba(124,58,237,0.2)',
                width: step >= i ? 20 : 6,
                borderRadius: 3,
              }} />
            ))}
          </div>
        )}

        {/* Content */}
        <div key={step} style={{ animation: 'slideIn 0.3s ease' }}>
          {steps[step].label && (
            <div style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#a855f7', marginBottom: 8, fontFamily: 'DM Sans, sans-serif' }}>
              {steps[step].label}
            </div>
          )}
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 700, marginBottom: 8, lineHeight: 1.2 }}>
            {steps[step].title}
          </h2>
          <p style={{ color: 'rgba(196,181,253,0.6)', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
            {steps[step].sub}
          </p>

          {step === 1 && (
            <input
              className="modal-input"
              placeholder="e.g., Sarah Chen"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && name.trim() && handleNext()}
              autoFocus
            />
          )}
          {step === 2 && (
            <input
              className="modal-input"
              placeholder="e.g., TechStart Inc, or my startup"
              value={business}
              onChange={e => setBusiness(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleNext()}
              autoFocus
            />
          )}
        </div>

        <button
          className="modal-btn"
          onClick={handleNext}
          disabled={step === 1 && !name.trim()}
        >
          {step === 0 ? "Let's Go →" : step === 1 ? "Continue →" : "Enter Portfolio →"}
        </button>

        {step > 0 && (
          <button
            className="skip-btn"
            onClick={() => onSubmit({ name: name.trim() || "Visitor", business: business.trim() || "Exploring" })}
            style={{ display: 'block', width: '100%', textAlign: 'center' }}
          >
            skip
          </button>
        )}
      </div>
    </div>
  );
}
