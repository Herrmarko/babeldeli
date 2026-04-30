/* ═══════════════════════════════════════
   Babel Deli — Företagscatering (Real Content)
   ═══════════════════════════════════════ */

const foretagMenus = [
  {
    id: 'lilla-veg', name: 'Lilla Vegetariska Buffén', price: 249, unit: 'kr/person', min: 6,
    items: ['Falafel, getostbollar, fetapirog', 'Hummus, mhamara, myntayoghurt', 'Granatäppelsallad, bulgur', 'Stenugnsbakat pitabröd'],
  },
  {
    id: 'lilla-babel', name: 'Lilla Babelbuffén', price: 249, unit: 'kr/person', min: 6, popular: true,
    items: ['Kofte, granatäppelbakad kyckling, falafel', 'Hummus, mhamara, myntayoghurt', 'Granatäppelsallad, bulgur', 'Stenugnsbakat pitabröd'],
  },
  {
    id: 'stora-veg', name: 'Stora Vegetariska Buffén', price: 289, unit: 'kr/person', min: 6,
    items: ['Getostcigarr, falafel, getostbollar, fetapirog', 'Sötpotatiscreme, hummus, mhamara, myntayoghurt', 'Granatäppelsallad, bulgur', 'Stenugnsbakat pitabröd'],
  },
  {
    id: 'stora-babel', name: 'Stora Babelbuffén', price: 289, unit: 'kr/person', min: 6,
    items: ['Fetapirog, kofte, kyckling, falafel', 'Hummus, mhamara, myntayoghurt', 'Granatäppelsallad, bulgur', 'Stenugnsbakat pitabröd'],
  },
  {
    id: 'kalas-veg', name: 'Vegetarisk Kalasbuffé', price: 329, unit: 'kr/person', min: 6,
    items: ['Bakad aubergine, getostcigarr, falafel, getostbollar, fetapirog', 'Sötpotatiscreme, hummus, mhamara, myntayoghurt', 'Feta- och melonsallad, granatäppelsallad, bulgur', 'Stenugnsbakat pitabröd'],
  },
  {
    id: 'kalas', name: 'Kalasbuffé', price: 329, unit: 'kr/person', min: 6,
    items: ['Nötfärspirog, fetapirog, kofte, kyckling, falafel', 'Sötpotatiscreme, hummus, mhamara, myntayoghurt', 'Feta- och melonsallad, granatäppelsallad, bulgur', 'Stenugnsbakat pitabröd'],
  },
  {
    id: 'lyx', name: 'Lyxbuffén', price: 399, unit: 'kr/person', min: 6,
    items: ['12 mezerätter: veganskt, vegetariskt och kött', 'Nötfärspirog, fetapirog, kofte, kyckling, falafel, getostcigarr, vinbladsdolmar', 'Sötpotatiscreme, hummus, mhamara, myntayoghurt, baba ganosh', 'Feta- och melonsallad, granatäppelsallad, bulgur, pitabröd'],
  },
];

const Privatcatering = ({ onNavigate }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState('');
  const formRef = React.useRef(null);

  const handleOrder = (menuName) => {
    setSelectedMenu(menuName);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{ padding: 'var(--space-2xl) 0 var(--space-xl)', background: 'var(--color-dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="img/catering-plates.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25,20,15,0.88) 0%, rgba(25,20,15,0.5) 60%, rgba(25,20,15,0.3) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <a href="#" onClick={e => { e.preventDefault(); onNavigate('catering'); }}
              style={{ fontSize: '0.85rem', color: 'rgba(251,247,241,0.5)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: 'var(--space-sm)' }}>
              ← Tillbaka till catering
            </a>
            <span className="badge" style={{ background: 'rgba(26,140,126,0.9)', color: 'white', display: 'block', width: 'fit-content', marginBottom: '0.75rem' }}>Catering för privatperson</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'var(--color-cream)', maxWidth: 650 }}>
              Catering för ditt<br/><span style={{ color: 'var(--color-saffron-light)', fontStyle: 'italic' }}>privata event</span>
            </h1>
            <p style={{ color: 'rgba(251,247,241,0.65)', maxWidth: 520, marginTop: 'var(--space-sm)', fontSize: '1rem', lineHeight: 1.7 }}>
              Kalas, födelsedag, hemfest eller familjemiddag. Vi levererar libanesisk mat direkt till dörren.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info bar */}
      <section style={{ background: 'var(--color-terracotta)', padding: 'var(--space-sm) 0', color: 'white' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap', fontSize: '0.85rem', fontWeight: 500 }}>
          <span>Från 249 kr/person</span>
          <span>•</span>
          <span>6–300 personer</span>
          <span>•</span>
          <span>Beställ minst 1 vardag före</span>
          <span>•</span>
          <span>Leverans eller avhämtning</span>
        </div>
      </section>

      {/* Menu packages */}
      <section className="section-lg" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <Reveal><SectionHeader title="Våra cateringmenyer" subtitle="Alla buffér serveras med granatäppelsallad, bulgur och stenugnsbakat pitabröd. Alla priser inkl. moms." center /></Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
            {foretagMenus.map((m, i) => (
              <Reveal key={m.id} delay={i * 60}>
                <PriceCard title={m.name} price={m.price} unit={m.unit} items={m.items} popular={m.popular}
                  onOrder={() => handleOrder(m.name)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Order form */}
      {/* Order form */}
      <section ref={formRef} className="section-lg" style={{ background: 'var(--color-white)', scrollMarginTop: 'var(--nav-height)' }}>
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <Reveal delay={100}>
            {!submitted ? (
              <div style={{ background: 'var(--color-cream)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', border: '1px solid var(--color-border-light)' }}>
                <PrivatForm onSuccess={() => setSubmitted(true)} preSelected={selectedMenu} />
              </div>
            ) : (
              <div style={{ background: 'var(--color-cream)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-2xl)', textAlign: 'center', border: '1px solid var(--color-border-light)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(26,140,126,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)', fontSize: '1.5rem', color: 'var(--color-terracotta)' }}>✓</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Tack för din beställning!</h3>
                <p style={{ color: 'var(--color-text-light)', maxWidth: 400, margin: '0 auto' }}>Vi återkommer med bekräftelse.</p>
                <button className="btn btn-outline" style={{ marginTop: 'var(--space-lg)' }} onClick={() => setSubmitted(false)}>Gör en ny beställning</button>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <Reveal><h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>Bra att veta</h2></Reveal>
          {[
            { q: 'Hur långt i förväg behöver jag beställa?', a: 'Minst en vardag i förväg. Planera gärna lite extra tid vid leverans med bud.' },
            { q: 'Vad kostar leverans?', a: 'Leverans med bud, kostnad tillkommer beroende på avstånd. Du kan även hämta på Kungstensgatan 33.' },
            { q: 'Hur fungerar betalning?', a: 'Swish, kort i restaurangen eller faktura med 30 dagars betalningsvillkor. Alla priser inkl. moms.' },
            { q: 'Kan ni anpassa efter allergier?', a: 'Vi hjälper gärna till. Ange allergier i beställningen så anpassar vi.' },
            { q: 'Hur levereras maten?', a: 'Buffér levereras i svarta, tätt förslutna serveringskärl, redo att ställas fram. Du kan också välja ugnssäkra formar att värma själv.' },
          ].map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <details style={{ borderBottom: '1px solid var(--color-border-light)', padding: 'var(--space-md) 0' }}>
                <summary style={{ fontWeight: 600, fontSize: '1rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}><path d="M4 6L8 10L12 6" stroke="var(--color-text-light)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </summary>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: 1.7 }}>{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-terracotta)', padding: 'var(--space-xl) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginBottom: 'var(--space-sm)' }}>Funderingar?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 400, margin: '0 auto var(--space-lg)' }}>Hör av dig så hjälper vi dig hitta rätt meny.</p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:0720340986" className="btn" style={{ background: 'white', color: 'var(--color-terracotta)', fontWeight: 700 }}>Ring 072-034 09 86</a>
            <a href="mailto:catering@babeldeli.com" className="btn" style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.5)' }}>catering@babeldeli.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

window.Privatcatering = Privatcatering;
