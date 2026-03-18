import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const containerRef = useRef(null);
  const mRef = useRef(null);
  const aRef = useRef(null);
  const barRef = useRef(null);
  const labelRef = useRef(null);
  const orbRef = useRef(null);
  const cornersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Orb pulse
      gsap.to(orbRef.current, {
        scale: 1.25, opacity: 0.7, duration: 1.4,
        yoyo: true, repeat: -1, ease: "sine.inOut"
      });

      // M drops in
      tl.fromTo(mRef.current,
        { y: -60, opacity: 0, scale: 1.3, filter: "blur(10px)" },
        { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "back.out(1.8)" }
      )
      // A drops in with slight delay
      .fromTo(aRef.current,
        { y: -60, opacity: 0, scale: 1.3, filter: "blur(10px)" },
        { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "back.out(1.8)" },
        "-=0.35"
      )
      // Corners fan in
      .fromTo(cornersRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" },
        "-=0.2"
      )
      // Bar fills
      .fromTo(barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.8, ease: "power2.inOut", transformOrigin: "left center" },
        "-=0.1"
      )
      // Label fades
      .fromTo(labelRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=1.4"
      );

      // Glitch after load
      gsap.to([mRef.current, aRef.current], {
        x: () => (Math.random() - 0.5) * 6,
        duration: 0.08, yoyo: true, repeat: 3,
        delay: 2.2, ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cornerStyles = [
    { top: -20, left: -20, borderTop: "2px solid rgba(124,58,237,0.5)", borderLeft: "2px solid rgba(124,58,237,0.5)" },
    { top: -20, right: -20, borderTop: "2px solid rgba(124,58,237,0.5)", borderRight: "2px solid rgba(124,58,237,0.5)" },
    { bottom: -20, left: -20, borderBottom: "2px solid rgba(124,58,237,0.5)", borderLeft: "2px solid rgba(124,58,237,0.5)" },
    { bottom: -20, right: -20, borderBottom: "2px solid rgba(124,58,237,0.5)", borderRight: "2px solid rgba(124,58,237,0.5)" },
  ];

  return (
    <div ref={containerRef} style={{
      position: "fixed", inset: 0,
      background: "#fafaf9",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      zIndex: 9999,
    }}>
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(124,58,237,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px", pointerEvents: "none",
      }} />

      {/* Glow orb */}
      <div ref={orbRef} style={{
        position: "absolute", width: 340, height: 340,
        background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(20px)",
        pointerEvents: "none",
      }} />

      {/* Letters + corners */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {cornerStyles.map((s, i) => (
          <div key={i} ref={el => cornersRef.current[i] = el}
            style={{ position: "absolute", width: 16, height: 16, ...s, opacity: 0 }} />
        ))}

        <div style={{ display: "flex", alignItems: "baseline", gap: 0, lineHeight: 1 }}>
          <span ref={mRef} style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(88px, 14vw, 130px)",
            color: "#18103a", opacity: 0, display: "inline-block",
          }}>M</span>
          <span ref={aRef} style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(88px, 14vw, 130px)",
            background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0, display: "inline-block",
          }}>A</span>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        marginTop: 40, width: 200, height: 2,
        background: "rgba(124,58,237,0.12)",
        borderRadius: 2, overflow: "hidden", position: "relative", zIndex: 2,
      }}>
        <div ref={barRef} style={{
          height: "100%",
          background: "linear-gradient(90deg, #7c3aed, #a855f7)",
          borderRadius: 2, transformOrigin: "left",
          boxShadow: "0 0 10px rgba(124,58,237,0.4)",
        }} />
      </div>

      {/* Label */}
      <p ref={labelRef} style={{
        marginTop: 16, opacity: 0,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 10, letterSpacing: "3.5px",
        textTransform: "uppercase", color: "rgba(124,58,237,0.45)",
      }}>
        Loading Portfolio
      </p>
    </div>
  );
}
