/* ═══════════════════════════════════════
   Babel Deli — Frukostcatering
   ═══════════════════════════════════════ */

const Frukostcatering = ({ onNavigate }) => {
  const [sent, setSent] = React.useState(false);

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{ padding: 'var(--space-2xl) 0 var(--space-xl)', background: 'var(--color-dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="img/catering-spread.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25,20,15,0.88) 0%, rgba(25,20,15,0.5) 60%, rgba(25,20,15,0.3) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <a href="#" onClick={e => { e.preventDefault(); onNavigate('catering'); }}
              style={{ fontSize: '0.85rem', color: 'rgba(251,247,241,0.5)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: 'var(--space-sm)' }}>
              ← Tillbaka till catering
            </a>
            <span className="badge" style={{ background: 'rgba(26,140,126,0.9)', color: 'white', display: 'block', width: 'fit-content', marginBottom: '0.75rem' }}>Frukostcatering</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'var(--color-cream)', maxWidth: 650 }}>
              Frukost levererad<br/><span style={{ color: 'var(--color-saffron-light)', fontStyle: 'italic' }}>till dörren</span>
            </h1>
            <p style={{ color: 'rgba(251,247,241,0.65)', maxWidth: 520, marginTop: 'var(--space-sm)', fontSize: '1rem', lineHeight: 1.7 }}>
              Färska frukostbuffér och portionsförpackat till kontoret. Levereras från 07:00 vardagar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info bar */}
      <section style={{ background: 'var(--color-terracotta)', padding: 'var(--space-sm) 0', color: 'white' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap', fontSize: '0.85rem', fontWeight: 500 }}>
          <span>Från 45 kr/person</span>
          <span>•</span>
          <span>Leverans från 07:00</span>
          <span>•</span>
          <span>Beställ minst 1 vardag före</span>
          <span>•</span>
          <span>Leverans eller avhämtning</span>
        </div>
      </section>

      {/* Menu + Form */}
      <section className="section-lg" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--space-2xl)', alignItems: 'start' }} className="frukost-grid">

            {/* Menu list */}
            <Reveal>
              <div>
                <SectionHeader badge="Frukostmeny" badgeColor="saffron" title="Vad vi erbjuder" />
                <div style={{ marginBottom: 'var(--space-xl)' }}>
                  {[
                    { name: 'Bagel Deli', price: '55 kr' },
                    { name: 'Bagel med färskost', price: '55 kr' },
                    { name: 'Grekisk yoghurt med honung och valnötter', price: '45 kr' },
                    { name: 'Wrap med getost & betor', price: '115 kr' },
                    { name: 'Wrap med sötpotatis & feta', price: '115 kr' },
                    { name: 'Apelsinjuice', price: '45 kr' },
                    { name: 'Fruktsallad', price: '50 kr' },
                    { name: 'Babel Delis Lilla Frukostbuffé', price: '75 kr/person' },
                    { name: 'Babel Delis Stora Frukostbuffé', price: '110 kr/person' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                      padding: '0.65rem 0', borderBottom: '1px solid var(--color-border-light)',
                      gap: 'var(--space-md)',
                    }}>
                      <span style={{ fontSize: '0.95rem' }}>{item.name}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-terracotta)', fontSize: '1rem', whiteSpace: 'nowrap' }}>{item.price}</span>
                    </div>
                  ))}
                </div>
                <div style={{
                  background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)',
                  border: '1px solid var(--color-border-light)',
                }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem' }}>Betalningsvillkor</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
                    Swish, kort eller faktura med 30 dagars villkor. Alla priser inkl. moms.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Order form */}
            <Reveal delay={150}>
              {!sent ? (
                <div style={{
                  background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)',
                  border: '1px solid var(--color-border-light)',
                }}>
                  <FrukostForm onSuccess={() => setSent(true)} />
                </div>
              ) : (
                <div style={{
                  background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-2xl)',
                  textAlign: 'center', border: '1px solid var(--color-border-light)',
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(26,140,126,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)', fontSize: '1.3rem', color: 'var(--color-terracotta)' }}>✓</div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Tack för din beställning!</h3>
                  <p style={{ color: 'var(--color-text-light)' }}>Vi återkommer med bekräftelse.</p>
                  <button className="btn btn-outline" style={{ marginTop: 'var(--space-lg)' }} onClick={() => setSent(false)}>Gör en ny beställning</button>
                </div>
              )}
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:768px){.frukost-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-terracotta)', padding: 'var(--space-xl) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginBottom: 'var(--space-sm)' }}>Frågor om frukostcatering?</h2>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-md)' }}>
            <a href="tel:0720340986" className="btn" style={{ background: 'white', color: 'var(--color-terracotta)', fontWeight: 700 }}>Ring 072-034 09 86</a>
            <a href="mailto:catering@babeldeli.com" className="btn" style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.5)' }}>catering@babeldeli.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

window.Frukostcatering = Frukostcatering;
