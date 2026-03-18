export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(124,58,237,0.1)',
      padding: '40px 24px',
      background: '#05030f',
    }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:20 }}>
        <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:18 }}>
          M<span style={{ color:'#a855f7' }}>A</span>
          <span style={{ fontFamily:'DM Sans,sans-serif', fontWeight:400, fontSize:13, color:'rgba(196,181,253,0.4)', marginLeft:12 }}>
            Mohammad Affan
          </span>
        </div>
        <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:12, color:'rgba(196,181,253,0.3)' }}>
          © 2025 Affan. Built with React + ❤️
        </p>
        <div style={{ display:'flex', gap:20 }}>
          {['LinkedIn', 'GitHub', 'Behance'].map(link => (
            <a key={link} href="#" style={{ fontFamily:'DM Sans,sans-serif', fontSize:13, color:'rgba(196,181,253,0.4)', transition:'color 0.2s' }}
              onMouseEnter={e=>e.target.style.color='#a855f7'} onMouseLeave={e=>e.target.style.color='rgba(196,181,253,0.4)'}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
