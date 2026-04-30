/* ═══════════════════════════════════════
   Babel Deli — Startsida (Homepage)
   ═══════════════════════════════════════ */

const heroSlides = [
  'img/spread-wide.jpg',
  'img/interior-palms.jpg',
  'img/spread-hero.jpg',
  'img/falafel-plate.jpg',
  'img/interior.jpg',
  'img/baklava.jpg',
];

const Startsida = ({ onNavigate }) => {
  const [heroLoaded, setHeroLoaded] = React.useState(false);
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => { setTimeout(() => setHeroLoaded(true), 100); }, []);

  React.useEffect(() => {
    const t = setInterval(() => {
      setSlide(s => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="page-enter">
      {/* ─── HERO ─── */}
      <section style={{
        minHeight: '92vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'var(--color-dark)',
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {heroSlides.map((src, i) => (
            <img key={src} src={src} alt="" style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%',
              opacity: i === slide ? 1 : 0,
              transition: 'opacity 1.2s ease',
            }} />
          ))}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(25,20,15,0.88) 0%, rgba(25,20,15,0.45) 50%, rgba(25,20,15,0.1) 100%)',
          }}/>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'clamp(2rem, 8vh, 5rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          {/* Logo centered */}
          <div style={{
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s var(--ease-out)',
          }}>
            <img src="img/logo-white.png" alt="Babel Deli" style={{
              height: 400, width: 'auto',
              filter: 'drop-shadow(0 4px 32px rgba(0,0,0,0.5))',
              display: 'block', margin: '0 auto var(--space-sm)',
            }} />
          </div>
          {/* Divider line */}
          <div style={{
            opacity: heroLoaded ? 1 : 0, transition: 'all 0.8s 0.1s var(--ease-out)',
            display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)', width: '100%', maxWidth: 480,
          }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(251,247,241,0.3)' }} />
            <span style={{ color: 'rgba(251,247,241,0.5)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Vasastan, Stockholm</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(251,247,241,0.3)' }} />
          </div>
          <div style={{
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s 0.2s var(--ease-out)',
          }}>
            <p style={{ color: 'rgba(251,247,241,0.75)', fontSize: '1.0625rem', marginBottom: 'var(--space-lg)', maxWidth: 460 }}>
              Libanesisk mezebar &amp; catering med autentiska smaker lagade med kärlek och de bästa råvarorna.
            </p>
          </div>
          <div style={{
            display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center',
            opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s 0.35s var(--ease-out)',
          }}>
            <button className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
              onClick={() => onNavigate('bestall')}>
              Beställ mat
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="btn" style={{
              background: 'rgba(251,247,241,0.12)', color: 'var(--color-cream)',
              backdropFilter: 'blur(8px)', fontSize: '1rem', padding: '1rem 2.25rem',
              border: '1px solid rgba(251,247,241,0.2)',
            }} onClick={() => onNavigate('foretagscatering')}>
              Catering
            </button>
          </div>
        </div>


      </section>

      {/* ─── MENU SECTION ─── */}
      <section style={{ background: 'var(--color-dark)', padding: 'var(--space-3xl) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', alignItems: 'center' }} className="container home-menu-grid">
          {/* Left: copy */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <Reveal>
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--color-saffron-light)', display: 'block', marginBottom: '0.25rem' }}>Vår meny</span>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', color: 'var(--color-cream)',
                lineHeight: 1.05, marginBottom: 'var(--space-md)',
              }}>
                Smaker från<br/><span style={{ fontStyle: 'italic', color: 'var(--color-saffron-light)' }}>Libanon</span>
              </h2>
              <p style={{ color: 'rgba(251,247,241,0.65)', fontSize: '1rem', maxWidth: 420, lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
                Autentiska mezze lagade dagligen av färska råvaror. Recept som gått i familjen i generationer, serverade i vår mezebar på Kungstensgatan.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: 'var(--space-xl)', fontSize: '1rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgba(251,247,241,0.5)' }}>
                {['Hummus', 'Falafel', 'Tabbouleh', 'Labneh', 'Kibbeh', 'Baklava'].map((cat, i) => (
                  <React.Fragment key={cat}>
                    {i > 0 && <span style={{ color: 'rgba(251,247,241,0.2)' }}>·</span>}
                    <span>{cat}</span>
                  </React.Fragment>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => onNavigate('meny')}>
                  Se hela menyn →
                </button>
                <button className="btn" style={{ color: 'rgba(251,247,241,0.7)', borderBottom: '1px solid rgba(251,247,241,0.3)', borderRadius: 0, padding: '0.875rem 0.5rem' }}
                  onClick={() => onNavigate('bestall')}>
                  eller Beställ take away →
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right: offset photos */}
          <Reveal delay={150}>
            <div style={{ position: 'relative', height: 480 }} className="home-menu-photos">
              <div style={{
                position: 'absolute', top: 0, right: 0, width: '65%',
                borderRadius: 'var(--radius-md)', overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
              }}>
                <img src="img/menu-2.jpg" alt="Mezze spread" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
              </div>
              <div style={{
                position: 'absolute', bottom: '10%', left: 0, width: '50%',
                borderRadius: 'var(--radius-md)', overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                border: '3px solid var(--color-dark)',
              }}>
                <img src="img/menu-1.jpg" alt="Dishes" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
              </div>
              <div style={{
                position: 'absolute', bottom: 0, right: '5%', width: '40%',
                borderRadius: 'var(--radius-md)', overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                border: '3px solid var(--color-dark)',
              }}>
                <img src="img/menu-3.jpg" alt="Meze trio" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }} />
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`
          @media(max-width:768px){
            .home-menu-grid{grid-template-columns:1fr !important;}
            .home-menu-photos{height:320px !important;}
          }
        `}</style>
      </section>

      {/* ─── CATERING ENTRY POINTS ─── */}}
      <section className="section-lg" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <Reveal><SectionHeader badge="Catering" title="Mat för varje tillfälle" subtitle="Från frukostmötet till bröllopsfesten. Vi skapar minnesvärd libanesisk mat anpassad efter dina behov." center /></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-sm)', marginTop: 'var(--space-lg)' }}>
            {[
              { page: 'foretagscatering', label: 'Företagscatering', desc: 'Lunchmöten, konferenser och AW. Färdiga menypaket eller skräddarsytt.', img: 'img/catering-plates.jpg' },
              { page: 'privatcatering', label: 'Catering för privatperson', desc: 'Kalas, födelsedag och hemfest. Libanesisk buffé levererad direkt till dörren.', img: 'img/catering-spread.jpg' },
              { page: 'frukostcatering', label: 'Frukostcatering', desc: 'Färska frukostbuffér med hemlagat hummus, labne, ägg, färskt bröd.', img: 'img/spread-baklava.jpg' },
              { page: 'event', label: 'Event & Bröllop', desc: 'Stor eller liten fest? Vi skapar en generös libanesisk buffé med allt från meze till grillat.', img: 'img/champagne.jpg' },
            ].map((c, i) => (
              <Reveal key={c.page} delay={i * 120} style={{ height: '100%' }}>
                <div className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => onNavigate(c.page)}>
                  <div style={{ aspectRatio: '5/3', overflow: 'hidden', flexShrink: 0 }}>
                    <img src={c.img} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s var(--ease-out)' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                  </div>
                  <div style={{ padding: 'var(--space-sm) var(--space-sm) var(--space-md)' }}>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{c.label}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-sm)' }}>{c.desc}</p>
                    <span className="btn-ghost" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      Utforska →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISIT VASASTAN ─── */}
      <section className="section-lg" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-xl)', alignItems: 'center' }} className="visit-grid">
            <Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <img src="img/exterior.jpg" alt="Babel Deli, Kungstensgatan" style={{ width: '100%', objectFit: 'cover', aspectRatio: '3/2' }} />
                </div>
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 220, border: '1px solid var(--color-border-light)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.8!2d18.0535!3d59.3419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5f3a7b8b7d%3A0x1234567890abcdef!2sKungstensgatan%2033%2C%20113%2057%20Stockholm!5e0!3m2!1ssv!2sse!4v1700000000000"
                    width="100%" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title="Babel Deli på kartan" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <SectionHeader badge="Besök oss" badgeColor="saffron" title="Mitt i Vasastan" />
                <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>
                  På Kungstensgatan 33 hittar du vår mysiga mezebar. Slå dig ner i den exotiska miljön, njut av en färsk falafel-tallrik till lunch eller ta med dig en meze-box hem.
                </p>
                <div style={{
                  background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)',
                  border: '1px solid var(--color-border-light)', marginBottom: 'var(--space-md)',
                }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Öppettider</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                    Måndag–Fredag: 10:00–20:00<br/>
                    Lördag: 11:00–16:00<br/>
                    Söndag: Stängt
                  </div>
                </div>
                <button className="btn btn-outline" onClick={() => window.open('https://maps.google.com/?q=Kungstensgatan+33+Stockholm', '_blank')}>
                  Visa på karta
                </button>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:768px){.visit-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{
        background: 'var(--color-terracotta)', padding: 'var(--space-xl) 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1,
          background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: 'var(--space-sm)' }}>
            Redo att beställa?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.0625rem', marginBottom: 'var(--space-lg)', maxWidth: 500, margin: '0 auto var(--space-lg)' }}>
            Take away, catering eller frukostleverans. Vi gör det enkelt.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn" style={{ background: 'white', color: 'var(--color-terracotta)', fontWeight: 700, padding: '1rem 2.25rem' }}
              onClick={() => onNavigate('bestall')}>
              Beställ take away
            </button>
            <button className="btn" style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.5)', padding: '1rem 2.25rem' }}
              onClick={() => onNavigate('catering')}>
              Se catering
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

window.Startsida = Startsida;
