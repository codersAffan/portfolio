import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    type: 'Education',
    title: 'BSc Information Technology',
    org: 'University of Mumbai',
    period: '2023 — Present',
    current: true,
    desc: 'SY student studying data structures, web development, databases, algorithms, and software engineering foundations.',
    tags: ['Web Dev', 'DSA', 'Databases', 'Software Engg'],
    color: '#a855f7',
  },
  {
    type: 'Freelance',
    title: 'UI/UX & Graphic Designer',
    org: 'Freelance — Multiple Clients',
    period: '2023 — Present',
    current: true,
    desc: 'Delivered brand identities, landing pages, and UI flows for startups and small businesses. End-to-end design from research to handoff.',
    tags: ['Figma', 'Branding', 'UX Research', 'Prototyping'],
    color: '#7c3aed',
  },
  {
    type: 'Project',
    title: 'Frontend Developer',
    org: 'Personal & Client Projects',
    period: '2022 — Present',
    current: true,
    desc: 'Built production-grade React apps, interactive landing pages, and component libraries with focus on performance and micro-interactions.',
    tags: ['React', 'JavaScript', 'CSS', 'GSAP'],
    color: '#9333ea',
  },
  {
    type: 'Learning',
    title: 'Entrepreneurship & Business',
    org: 'Self-Directed Study',
    period: '2024 — Present',
    current: true,
    desc: 'Deep-diving into business strategy, financial literacy, product management, and startup ecosystem dynamics.',
    tags: ['Strategy', 'Finance', 'Product Thinking'],
    color: '#6d28d9',
  },
];

function TimelineItem({ exp, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} style={{
      display: 'grid',
      gridTemplateColumns: '1fr 40px 1fr',
      gap: '0 24px',
      marginBottom: 32,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
    }}>
      {/* Left side */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 12 }}>
        {isEven ? (
          <div style={{
            background: 'rgba(13,10,26,0.8)', border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: 14, padding: '22px 24px', maxWidth: 340, width: '100%',
            transition: 'border-color 0.25s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.15)'}
          >
            <CardContent exp={exp} />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', paddingRight: 8 }}>
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: 'rgba(196,181,253,0.35)', whiteSpace: 'nowrap' }}>{exp.period}</span>
          </div>
        )}
      </div>

      {/* Center dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
          background: exp.color, border: '2px solid #05030f',
          boxShadow: `0 0 12px ${exp.color}80`,
          marginTop: 16, zIndex: 1,
        }} />
        <div style={{ flex: 1, width: 1, background: 'linear-gradient(to bottom, rgba(124,58,237,0.3), rgba(124,58,237,0.05))', marginTop: 4 }} />
      </div>

      {/* Right side */}
      <div style={{ paddingTop: 12 }}>
        {!isEven ? (
          <div style={{
            background: 'rgba(13,10,26,0.8)', border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: 14, padding: '22px 24px', maxWidth: 340,
            transition: 'border-color 0.25s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.15)'}
          >
            <CardContent exp={exp} />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 8, paddingTop: 4 }}>
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: 'rgba(196,181,253,0.35)', whiteSpace: 'nowrap' }}>{exp.period}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function CardContent({ exp }) {
  return (
    <>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
        <span style={{
          fontSize: 10, fontFamily: 'DM Sans,sans-serif', letterSpacing: '1.5px',
          textTransform: 'uppercase', color: exp.color,
          background: `${exp.color}18`, padding: '2px 8px', borderRadius: 4,
        }}>{exp.type}</span>
        {exp.current && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: '#4ade80', fontFamily: 'DM Sans,sans-serif' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px #4ade80' }} />
            Active
          </span>
        )}
      </div>
      <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: 16, fontWeight: 700, marginBottom: 3 }}>{exp.title}</h3>
      <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: exp.color, marginBottom: 10, opacity: 0.85 }}>{exp.org}</p>
      <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'rgba(196,181,253,0.58)', lineHeight: 1.65, marginBottom: 14 }}>{exp.desc}</p>
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
        {exp.tags.map(t => (
          <span key={t} style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)', color: 'rgba(196,181,253,0.65)', padding: '3px 9px', borderRadius: 5, fontSize: 10, fontFamily: 'DM Sans,sans-serif' }}>{t}</span>
        ))}
      </div>
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <style>{`
        @media(max-width:640px) {
          .timeline-wrap { display: flex !important; flex-direction: column !important; }
          .timeline-mobile-card {
            background:rgba(13,10,26,0.8);border:1px solid rgba(124,58,237,0.15);
            border-radius:14px;padding:22px 20px;margin-bottom:16px;
          }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#a855f7', marginBottom: 12, fontFamily: 'DM Sans,sans-serif' }}>Timeline</p>
        <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>
          Experience &<br /><span style={{ color: '#a855f7' }}>Education</span>
        </h2>
        <p style={{ color: 'rgba(196,181,253,0.45)', fontSize: 15, marginBottom: 64, maxWidth: 460, lineHeight: 1.7, fontFamily: 'DM Sans,sans-serif' }}>
          My journey from classroom to client work — built across design, code, and continuous learning.
        </p>

        {/* Desktop alternating timeline */}
        <div style={{ maxWidth: 860, margin: '0 auto' }} className="desktop-timeline">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:640px) {
          .desktop-timeline { display:none; }
        }
      `}</style>

      {/* Mobile fallback */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'none' }} className="mobile-timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-mobile-card" style={{background:'rgba(13,10,26,0.8)',border:'1px solid rgba(124,58,237,0.15)',borderRadius:14,padding:'22px 20px',marginBottom:16,borderLeft:`3px solid ${exp.color}`}}>
            <p style={{fontFamily:'DM Sans,sans-serif',fontSize:11,color:'rgba(196,181,253,0.35)',marginBottom:6}}>{exp.period}</p>
            <CardContent exp={exp}/>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:640px){.mobile-timeline{display:block!important}}`}</style>
    </section>
  );
}
