/* ═══════════════════════════════════════
   Babel Deli — Shared Components
   ═══════════════════════════════════════ */

// Image placeholder with striped pattern
const ImagePlaceholder = ({ label, aspect = '4/3', bg, style: extraStyle }) => {
  const colors = {
    warm: ['#E8D5C4','#D4B89C'],
    cool: ['#C4D4C0','#A8BFA0'],
    gold: ['#E8D9B0','#D4C490'],
    dark: ['#8C7A68','#6E5E4E'],
  };
  const [c1, c2] = colors[bg] || colors.warm;
  return (
    <div style={{
      aspectRatio: aspect, width: '100%', position: 'relative', overflow: 'hidden',
      background: `repeating-linear-gradient(135deg, ${c1}, ${c1} 10px, ${c2} 10px, ${c2} 20px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: 'inherit', ...extraStyle,
    }}>
      <span style={{
        fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(45,35,25,0.5)',
        background: 'rgba(255,255,255,0.7)', padding: '0.4rem 0.8rem',
        borderRadius: '4px', textAlign: 'center', maxWidth: '80%',
        lineHeight: 1.4,
      }}>{label}</span>
    </div>
  );
};

// Scroll reveal wrapper
const Reveal = ({ children, delay = 0, className = '', style: extraStyle }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add('visible'), delay); obs.unobserve(el); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`} style={extraStyle}>{children}</div>;
};

// Section header
const SectionHeader = ({ badge, badgeColor = 'terracotta', title, subtitle, center, light }) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 'var(--space-lg)' }}>
    {badge && <span className={`badge badge-${badgeColor}`}>{badge}</span>}
    <h2 style={{
      fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', marginTop: badge ? '0.75rem' : 0,
      color: light ? 'var(--color-cream)' : 'var(--color-dark)',
    }}>{title}</h2>
    {subtitle && <p style={{
      fontSize: '1.0625rem', color: light ? 'rgba(251,247,241,0.75)' : 'var(--color-text-light)',
      marginTop: '0.75rem', maxWidth: center ? '560px' : '65ch',
      marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0,
    }}>{subtitle}</p>}
  </div>
);

// Navigation
const Nav = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cateringOpen, setCateringOpen] = React.useState(false);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  React.useEffect(() => { setMobileOpen(false); setCateringOpen(false); }, [currentPage]);

  const isTransparent = !scrolled && currentPage === 'hem';

  const navLink = (page, label) => (
    <a href="#" onClick={e => { e.preventDefault(); onNavigate(page); }}
      style={{
        fontWeight: currentPage === page ? 600 : 500,
        color: currentPage === page ? 'var(--color-terracotta)' : (isTransparent ? 'white' : 'var(--color-dark)'),
        fontSize: '0.9375rem', transition: 'color 0.25s',
        position: 'relative', padding: '0.25rem 0',
        textShadow: isTransparent ? '0 1px 6px rgba(0,0,0,0.7)' : 'none',
      }}>{label}</a>
  );

  const cateringPages = [
    ['foretagscatering', 'Företagscatering'],
    ['privatcatering', 'Catering för privatperson'],
    ['frukostcatering', 'Frukostcatering'],
    ['event', 'Event & Bröllop'],
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--nav-height)', display: 'flex', alignItems: 'center',
      background: (scrolled || currentPage !== 'hem') ? 'rgba(251,247,241,0.95)' : 'transparent',
      backdropFilter: (scrolled || currentPage !== 'hem') ? 'blur(16px)' : 'none', WebkitBackdropFilter: (scrolled || currentPage !== 'hem') ? 'blur(16px)' : 'none',
      borderBottom: (scrolled || currentPage !== 'hem') ? '1px solid var(--color-border-light)' : '1px solid transparent',
      transition: 'all 0.35s var(--ease-out)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); onNavigate('hem'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 700,
            color: scrolled ? 'var(--color-dark)' : (isTransparent ? 'white' : 'var(--color-dark)'), letterSpacing: '0.12em', textTransform: 'uppercase',
            lineHeight: 1,
          }}>Babel</span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 400,
            color: 'var(--color-terracotta)', letterSpacing: '0.12em', textTransform: 'uppercase',
            lineHeight: 1,
          }}>Deli</span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          className="desktop-nav">
          {navLink('hem', 'Hem')}
          {navLink('meny', 'Meny')}
          {/* Catering dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setCateringOpen(true)} onMouseLeave={() => setCateringOpen(false)}>
            <a href="#" onClick={e => { e.preventDefault(); onNavigate('catering'); }}
              style={{
                fontWeight: currentPage.startsWith('catering') || ['foretagscatering','frukostcatering','event','privatcatering'].includes(currentPage) ? 600 : 500,
                color: currentPage.startsWith('catering') || ['foretagscatering','frukostcatering','event','privatcatering'].includes(currentPage) ? 'var(--color-terracotta)' : (isTransparent ? 'white' : 'var(--color-dark)'),
                fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '0.3rem',
                textShadow: isTransparent ? '0 1px 6px rgba(0,0,0,0.7)' : 'none',
              }}>
              Catering
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform 0.25s', transform: cateringOpen ? 'rotate(180deg)' : '' }}>
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            {cateringOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '-1rem', paddingTop: '0.5rem',
                minWidth: '200px',
              }}>
                <div style={{
                  background: 'var(--color-white)', borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)', padding: '0.5rem', border: '1px solid var(--color-border-light)',
                }}>
                  {cateringPages.map(([p, l]) => (
                    <a key={p} href="#" onClick={e => { e.preventDefault(); onNavigate(p); }}
                      style={{ display: 'block', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.target.style.background = 'var(--color-cream)'}
                      onMouseLeave={e => e.target.style.background = 'transparent'}>
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {navLink('kontakt', 'Kontakt')}
          <button className="btn btn-primary" onClick={() => onNavigate('bestall')}
            style={{ padding: '0.7rem 1.5rem', fontSize: '0.875rem' }}>
            Beställ mat
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 22, height: 16, position: 'relative' }}>
            {[0, 6, 12].map((t, i) => (
              <span key={i} style={{
                position: 'absolute', left: 0, top: t, width: '100%', height: 2,
                background: 'var(--color-dark)', borderRadius: 2,
                transition: 'all 0.3s', transformOrigin: 'center',
                ...(mobileOpen && i === 0 ? { top: 6, transform: 'rotate(45deg)' } : {}),
                ...(mobileOpen && i === 1 ? { opacity: 0 } : {}),
                ...(mobileOpen && i === 2 ? { top: 6, transform: 'rotate(-45deg)' } : {}),
              }} />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'absolute', top: 'var(--nav-height)', left: 0, right: 0,
          background: 'var(--color-cream)', borderBottom: '1px solid var(--color-border)',
          padding: 'var(--space-md) var(--space-md) var(--space-lg)',
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
        }}>
          {[['hem','Hem'],['meny','Meny'],['catering','Catering'],
            ['foretagscatering','  Företagscatering'],['frukostcatering','  Frukostcatering'],
            ['event','  Event & Bröllop'],['kontakt','Kontakt']].map(([p,l]) => (
            <a key={p} href="#" onClick={e => { e.preventDefault(); onNavigate(p); }}
              style={{ padding: '0.7rem 0', fontSize: '1rem', fontWeight: currentPage === p ? 600 : 400,
                color: currentPage === p ? 'var(--color-terracotta)' : 'var(--color-dark)' }}>{l}</a>
          ))}
          <button className="btn btn-primary" onClick={() => onNavigate('bestall')}
            style={{ marginTop: 'var(--space-sm)', alignSelf: 'flex-start' }}>Beställ mat</button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

// Footer
const Footer = ({ onNavigate }) => (
  <footer style={{ background: 'var(--color-dark)', color: 'var(--color-cream)', padding: 'var(--space-2xl) 0 var(--space-lg)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1.2fr 1.5fr', gap: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
        {/* Brand */}
        <div>
          <p style={{ color: 'rgba(251,247,241,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Libanesisk mezebar och catering i hjärtat av Vasastan, Stockholm.
          </p>
        </div>
        {/* Links */}
        <div>
          <h4 style={{ color: 'var(--color-cream)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--space-sm)' }}>Sidor</h4>
          {[['meny','Meny'],['foretagscatering','Företagscatering'],['privatcatering','Catering för privatperson'],['frukostcatering','Frukostcatering'],['event','Event & Bröllop'],['kontakt','Kontakt']].map(([p,l]) => (
            <a key={p} href="#" onClick={e => { e.preventDefault(); onNavigate(p); }}
              style={{ display: 'block', color: 'rgba(251,247,241,0.6)', fontSize: '0.9rem', padding: '0.25rem 0', transition: 'color 0.25s' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-saffron-light)'}
              onMouseLeave={e => e.target.style.color = 'rgba(251,247,241,0.6)'}>{l}</a>
          ))}
        </div>
        {/* Address */}
        <div>
          <h4 style={{ color: 'var(--color-cream)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--space-sm)' }}>Besök oss</h4>
          <p style={{ color: 'rgba(251,247,241,0.6)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            Kungstensgatan 33<br/>113 57 Stockholm<br/>
            <a href="tel:086121449" style={{ color: 'var(--color-saffron-light)' }}>08-612 14 49</a><br/>
            <a href="mailto:info@babeldeli.com" style={{ color: 'var(--color-saffron-light)' }}>info@babeldeli.com</a>
          </p>
        </div>
        {/* Hours */}
        <div>
          <h4 style={{ color: 'var(--color-cream)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--space-sm)' }}>Öppettider</h4>
          <div style={{ color: 'rgba(251,247,241,0.6)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 220 }}><span>Mån–Fre</span><span style={{ color: 'var(--color-cream)' }}>10:00–20:00</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 220 }}><span>Lördag</span><span style={{ color: 'var(--color-cream)' }}>11:00–16:00</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 220 }}><span>Söndag</span><span style={{ color: 'rgba(251,247,241,0.4)' }}>Stängt</span></div>
          </div>
          <h4 style={{ color: 'var(--color-cream)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--space-sm)', marginTop: 'var(--space-md)' }}>Avvikande öppettider</h4>
          <div style={{ color: 'rgba(251,247,241,0.6)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 220 }}><span>1 maj</span><span style={{ color: 'rgba(251,247,241,0.4)' }}>Stängt</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 220 }}><span>Midsommarafton</span><span style={{ color: 'rgba(251,247,241,0.4)' }}>Stängt</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 220 }}><span>Julafton</span><span style={{ color: 'rgba(251,247,241,0.4)' }}>Stängt</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 220 }}><span>Nyårsafton</span><span style={{ color: 'var(--color-cream)' }}>10:00–14:00</span></div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(251,247,241,0.1)', paddingTop: 'var(--space-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ color: 'rgba(251,247,241,0.35)', fontSize: '0.8rem' }}>© 2026 Babel Deli. Alla rättigheter förbehållna.</span>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://instagram.com/babeldeli" target="_blank" rel="noopener"
            style={{ color: 'rgba(251,247,241,0.5)', transition: 'color 0.25s' }}
            onMouseEnter={e => e.target.style.color = 'var(--color-saffron-light)'}
            onMouseLeave={e => e.target.style.color = 'rgba(251,247,241,0.5)'}>
            Instagram
          </a>
          <a href="https://facebook.com/babeldeli" target="_blank" rel="noopener"
            style={{ color: 'rgba(251,247,241,0.5)', transition: 'color 0.25s' }}
            onMouseEnter={e => e.target.style.color = 'var(--color-saffron-light)'}
            onMouseLeave={e => e.target.style.color = 'rgba(251,247,241,0.5)'}>
            Facebook
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Tab component
const Tabs = ({ tabs, activeTab, onTabChange }) => (
  <div style={{ display: 'flex', gap: '0.25rem', background: 'var(--color-cream-warm)', borderRadius: 'var(--radius-md)', padding: '0.3rem', overflow: 'auto' }}>
    {tabs.map(t => (
      <button key={t.id} onClick={() => onTabChange(t.id)}
        style={{
          padding: '0.65rem 1.25rem', borderRadius: 'calc(var(--radius-md) - 2px)',
          fontSize: '0.875rem', fontWeight: activeTab === t.id ? 600 : 400,
          background: activeTab === t.id ? 'var(--color-white)' : 'transparent',
          color: activeTab === t.id ? 'var(--color-dark)' : 'var(--color-text-light)',
          boxShadow: activeTab === t.id ? 'var(--shadow-sm)' : 'none',
          transition: 'all 0.25s', whiteSpace: 'nowrap',
        }}>{t.label}</button>
    ))}
  </div>
);

// Price card
const PriceCard = ({ title, price, unit, items, popular, onOrder }) => (
  <div className="card" style={{
    padding: 'var(--space-lg)', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column',
    border: popular ? '2px solid var(--color-terracotta)' : '1px solid var(--color-border-light)',
  }}>
    {popular && <span className="badge badge-terracotta" style={{ position: 'absolute', top: '0.75rem', left: '1.5rem', zIndex: 1 }}>Populär</span>}
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', marginTop: popular ? '1.5rem' : 0 }}>{title}</h3>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: 'var(--space-md)' }}>
      <span style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--color-terracotta)' }}>{price}</span>
      <span style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{unit}</span>
    </div>
    <ul style={{ listStyle: 'none', marginBottom: 'var(--space-md)', flex: 1 }}>
      {items.map((item, i) => (
        <li key={i} style={{ padding: '0.4rem 0', fontSize: '0.9rem', color: 'var(--color-text)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <span style={{ color: 'var(--color-olive)', fontSize: '1rem', lineHeight: 1.4 }}>✓</span>
          {item}
        </li>
      ))}
    </ul>
    <button className={`btn ${popular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', justifyContent: 'center' }}
      onClick={onOrder}>Beställ</button>
  </div>
);

Object.assign(window, { ImagePlaceholder, Reveal, SectionHeader, Nav, Footer, Tabs, PriceCard });
