/* ═══════════════════════════════════════
   Babel Deli — Catering (Overview)
   ═══════════════════════════════════════ */

const Catering = ({ onNavigate }) => {
  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{
        padding: 'var(--space-2xl) 0 var(--space-xl)',
        background: 'var(--color-dark)', color: 'var(--color-cream)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
        }}>
          <img src="img/catering-spread.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25,20,15,0.85) 0%, rgba(25,20,15,0.5) 60%, rgba(25,20,15,0.3) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <span className="badge" style={{ background: 'rgba(194,77,44,0.9)', color: 'white' }}>Catering</span>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', marginTop: '0.75rem',
              color: 'var(--color-cream)', maxWidth: 700,
            }}>
              Libanesisk catering<br/>
              <span style={{ color: 'var(--color-saffron-light)', fontStyle: 'italic' }}>för alla tillfällen</span>
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(251,247,241,0.7)', maxWidth: 560, marginTop: 'var(--space-sm)', lineHeight: 1.7 }}>
              Vi har cateringalternativ för allt från det lilla frukostmötet till det stora bröllopet. Allt lagas från grunden med de bästa råvarorna.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)', flexWrap: 'wrap' }}>
              {[
                { num: '8+', label: 'Färdiga menypaket' },
                { num: '50+', label: 'Enskilda rätter' },
                { num: '2 000+', label: 'Catering per år' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-saffron-light)' }}>{s.num}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(251,247,241,0.55)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category cards */}
      <section className="section-lg" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <Reveal>
            <SectionHeader title="Välj din typ av catering" subtitle="Klicka för att utforska menyer, priser och beställningsinformation." center />
          </Reveal>
          <div className="grid-3" style={{ marginTop: 'var(--space-lg)' }}>
            {[
              {
                page: 'foretagscatering', title: 'Företagscatering', bg: 'warm',
                img: 'img/catering-plates.jpg',
                desc: 'Lunchmöten, konferenser, AW och kontorsluncher. Beställ senast 2 vardagar i förväg.',
                tags: ['Från 249 kr/pers', '6–300 pers'],
              },
              {
                page: 'frukostcatering', title: 'Frukostcatering', bg: 'gold',
                img: 'img/catering-spread.jpg',
                desc: 'Frukostbuffé levererad till kontoret eller hemma. Perfekt för morgonmöten och kickoffs.',
                tags: ['Från 75 kr/pers', 'Vardagar från 07:00'],
              },
              {
                page: 'event', title: 'Event & Bröllop', bg: 'cool',
                img: 'img/champagne.jpg',
                desc: 'Fester, bröllop och firanden. Vi skapar en generös buffé skräddarsydd efter era önskemål.',
                tags: ['Från 249 kr/pers', 'Skräddarsydd lösning'],
              },
            ].map((cat, i) => (
              <Reveal key={cat.page} delay={i * 100}>
                <div className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
                  onClick={() => onNavigate(cat.page)}>
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s var(--ease-out)' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                  </div>
                  <div style={{ padding: 'var(--space-md) var(--space-md) var(--space-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{cat.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-md)', flex: 1 }}>{cat.desc}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
                      {cat.tags.map(t => (
                        <span key={t} style={{
                          padding: '0.3rem 0.7rem', background: 'var(--color-cream)', borderRadius: 100,
                          fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text)',
                        }}>{t}</span>
                      ))}
                    </div>
                    <span className="btn-ghost" style={{ fontSize: '0.875rem', fontWeight: 600, alignSelf: 'flex-start' }}>
                      Utforska menyer →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-lg" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <Reveal><SectionHeader badge="Så funkar det" badgeColor="saffron" title="Beställ i tre enkla steg" center /></Reveal>
          <div className="grid-3" style={{ marginTop: 'var(--space-xl)' }}>
            {[
              { step: '01', title: 'Välj meny', desc: 'Bläddra bland våra färdiga menypaket eller bygg din egen kombination från vår a la carte-lista.' },
              { step: '02', title: 'Beställ online', desc: 'Fyll i formuläret med datum, antal gäster och leveransadress. Vi bekräftar inom ett par timmar.' },
              { step: '03', title: 'Vi levererar', desc: 'Vi levererar maten färdigpackad och uppdukningsklar. Servering finns som tillval vid större event.' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div style={{ textAlign: 'center', padding: '0 var(--space-sm)' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'var(--color-cream-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto var(--space-md)',
                    fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-terracotta)',
                  }}>{s.step}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', maxWidth: 320, margin: '0 auto' }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="section-lg" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <Reveal><SectionHeader title="Bra att veta" center /></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
            {[
              { title: 'Leveranszon', text: 'Vi levererar inom Stockholms innerstad och närförorter.' },
              { title: 'Beställningstid', text: 'Beställ senast 2 vardagar i förväg. Stora event: 1 vecka.' },
              { title: 'Allergier', text: 'Vi anpassar efter allergier och specialkost. Ange i beställningen.' },
              { title: 'Betalning', text: 'Kort, Swish eller faktura med 10 dagars betalningsvillkor.' },
              { title: 'Avbokning', text: 'Kostnadsfri upp till 48 timmar innan. Därefter 50% debiteras.' },
              { title: 'Servering', text: 'Vi erbjuder serveringspersonal som tillval vid större event.' },
            ].map((info, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  padding: 'var(--space-md)', background: 'var(--color-cream)', borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-light)', display: 'flex', flexDirection: 'column', minHeight: 120,
                }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{info.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>{info.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-terracotta)', padding: 'var(--space-xl) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: 'var(--space-sm)' }}>
            Behöver du hjälp att välja?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto var(--space-lg)', fontSize: '1rem' }}>
            Ring oss eller skicka ett mejl så hjälper vi dig att hitta rätt meny för ditt event.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:0720340986" className="btn" style={{ background: 'white', color: 'var(--color-terracotta)', fontWeight: 700 }}>
              Ring 072-034 09 86
            </a>
            <a href="mailto:catering@babeldeli.com" className="btn" style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.5)' }}>
              Mejla oss
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

window.Catering = Catering;
