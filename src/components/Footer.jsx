export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{
      borderTop: "1px solid #e5e0fa",
      padding: "48px 24px 32px",
      background: "#fafaf9",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: "#18103a", marginBottom: 10, letterSpacing: "-0.5px" }}>
              M<span style={{ color: "#7c3aed" }}>A</span>
            </div>
            <p style={{ fontSize: 13, color: "#7c6fa0", lineHeight: 1.7 }}>
              Frontend Developer · UI/UX Designer · Graphic Designer. Building things people actually use.
            </p>
            <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 7, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 100, padding: "6px 14px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", display: "inline-block" }} />
              <span style={{ fontSize: 12, color: "#166534", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }}>Available for work</span>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#18103a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>Navigate</p>
              {["Home", "About", "Experience", "Portfolio", "Services"].map(l => (
                <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ display: "block", background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#7c6fa0", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", textAlign: "left", padding: 0, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#7c3aed"} onMouseLeave={e => e.target.style.color = "#7c6fa0"}>
                  {l}
                </button>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#18103a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>Connect</p>
              {[
                { label: "LinkedIn", href: "#" },
                { label: "GitHub",   href: "#" },
                { label: "Behance",  href: "#" },
                { label: "Email",    href: "mailto:affan@example.com" },
              ].map(l => (
                <a key={l.label} href={l.href} style={{ display: "block", fontSize: 14, color: "#7c6fa0", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#7c3aed"} onMouseLeave={e => e.target.style.color = "#7c6fa0"}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e5e0fa", marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#7c6fa0", fontFamily: "'DM Sans',sans-serif" }}>
            © {year} Mohammad Affan. Built with React + GSAP ❤️
          </p>
          <p style={{ fontSize: 13, color: "#7c6fa0", fontFamily: "'DM Sans',sans-serif" }}>
            Open to internships · Freelance · Full-time
          </p>
        </div>
      </div>
    </footer>
  );
}
