import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(() => setPhase(3), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#05030f',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999,
      opacity: phase === 3 ? 0 : 1,
      transition: 'opacity 0.7s ease',
      pointerEvents: phase === 3 ? 'none' : 'all'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');

        @keyframes pulse-orb {
          0%,100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.9; }
        }
        @keyframes drop-in {
          0% { opacity:0; transform: translateY(-50px) scale(1.3); filter: blur(10px); }
          65% { opacity:1; transform: translateY(5px) scale(0.97); filter: blur(0); }
          100% { opacity:1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes glitch-loop {
          0%,88%,100% { clip-path: none; transform: translate(0); }
          90% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translateX(-5px); }
          92% { clip-path: polygon(0 55%, 100% 55%, 100% 70%, 0 70%); transform: translateX(5px); }
          94% { clip-path: none; transform: translate(0); }
        }
        @keyframes scanline {
          0% { top: -5%; }
          100% { top: 105%; }
        }
        @keyframes bar-grow {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes blink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes corner-fade {
          from { opacity:0; transform: scale(0.6); }
          to { opacity:1; transform: scale(1); }
        }

        .m-letter {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(96px, 16vw, 140px);
          line-height: 1;
          color: #ffffff;
          opacity: 0;
          animation: ${phase >= 1 ? 'drop-in 0.55s cubic-bezier(0.34,1.56,0.64,1) 0s forwards' : 'none'};
        }
        .a-letter {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(96px, 16vw, 140px);
          line-height: 1;
          background: linear-gradient(135deg, #c084fc, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          animation: ${phase >= 1 ? 'drop-in 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.13s forwards' : 'none'};
          filter: ${phase >= 2 ? 'drop-shadow(0 0 22px rgba(192,132,252,0.8))' : 'none'};
          transition: filter 0.5s ease;
        }
        .ma-wrap {
          animation: ${phase >= 2 ? 'glitch-loop 3.5s ease-in-out infinite' : 'none'};
        }
        .corner {
          position: absolute;
          width: 18px; height: 18px;
          opacity: 0;
          animation: ${phase >= 1 ? 'corner-fade 0.4s ease 0.3s forwards' : 'none'};
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', width: 360, height: 360,
        background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(30px)',
        animation: 'pulse-orb 2.2s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(124,58,237,0.18) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: phase >= 1 ? 0.7 : 0,
        transition: 'opacity 1s ease',
        pointerEvents: 'none',
      }} />

      {/* MA Letters */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Corners */}
        {[
          { top: -22, left: -22, borderTop: '2px solid rgba(192,132,252,0.5)', borderLeft: '2px solid rgba(192,132,252,0.5)' },
          { top: -22, right: -22, borderTop: '2px solid rgba(192,132,252,0.5)', borderRight: '2px solid rgba(192,132,252,0.5)' },
          { bottom: -22, left: -22, borderBottom: '2px solid rgba(192,132,252,0.5)', borderLeft: '2px solid rgba(192,132,252,0.5)' },
          { bottom: -22, right: -22, borderBottom: '2px solid rgba(192,132,252,0.5)', borderRight: '2px solid rgba(192,132,252,0.5)' },
        ].map((s, i) => (
          <div key={i} className="corner" style={s} />
        ))}

        <div className="ma-wrap" style={{ display: 'flex', alignItems: 'baseline', gap: 2, position: 'relative' }}>
          <span className="m-letter">M</span>
          <span className="a-letter">A</span>

          {/* Scanline */}
          {phase >= 1 && (
            <div style={{
              position: 'absolute', left: 0, right: 0, height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.7), transparent)',
              animation: 'scanline 1.8s linear infinite',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        marginTop: 44, width: 180, height: 1,
        background: 'rgba(124,58,237,0.18)', borderRadius: 1,
        overflow: 'hidden', position: 'relative', zIndex: 2,
        opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.4s ease 0.2s',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #7c3aed, #c084fc)',
          animation: phase >= 1 ? 'bar-grow 2.1s cubic-bezier(0.4,0,0.2,1) forwards' : 'none',
          boxShadow: '0 0 10px rgba(192,132,252,0.6)',
        }} />
      </div>

      {/* Label */}
      <p style={{
        marginTop: 18, fontFamily: 'DM Sans, sans-serif',
        fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase',
        color: 'rgba(192,132,252,0.45)',
        opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.6s ease 0.4s',
        position: 'relative', zIndex: 2,
      }}>
        <span style={{ animation: 'blink 1s ease-in-out infinite', marginRight: 6 }}>_</span>
        Loading Portfolio
      </p>
    </div>
  );
}
