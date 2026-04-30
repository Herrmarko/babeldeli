/* ═══════════════════════════════════════
   Babel Deli — Meny (Real Menu)
   ═══════════════════════════════════════ */

const menuData = {
  meze: {
    title: 'Meze',
    intro: 'Serveras med granatäppelsallad, bulgur, stenugnsbakat pitabröd och två valfria röror.',
    items: [
      { name: 'Babel', desc: 'Fetaostsambosek, kofte, kyckling, falafel och mergues', price: '155' },
      { name: 'Vegetarisk', desc: 'Fetaostsambosek, getostcigarr och falafel', price: '155' },
      { name: 'Vegansk', desc: 'Rostad aubergine med tahina, vinbladsdolmar och falafel', price: '149' },
      { name: 'Kyckling & Kofte', desc: 'Granatäppelbakad kyckling, kofte och mergues', price: '159' },
      { name: 'Sambosek', desc: 'Tre sorters piroger: fetaost, getost och nötkött', price: '155' },
    ]
  },
  sallad: {
    title: 'Sallad',
    intro: 'Med gröna blad, quinoa, granatäpple, hummus, sötpotatiscreme, saltrostade frön och tahina.',
    items: [
      { name: 'Sötpotatis', desc: 'Fetaost, honungsmelon (vegetarisk)', price: '149' },
      { name: 'Vegansallad', desc: 'Bakad aubergine, sötpotatis och avokado', price: '149' },
      { name: 'Falafel', desc: 'Vegan', price: '149' },
      { name: 'Getost', desc: 'Rödbetor och honungsmelon (vegetarisk)', price: '149' },
      { name: 'Kyckling', desc: 'Smulad fetaost', price: '155' },
      { name: 'Räkor', desc: '65-gradigt ägg och avokado', price: '165' },
    ]
  },
  pitarullar: {
    title: 'Pitarullar',
    intro: 'Med gröna blad på stenugnsbakat pitabröd.',
    items: [
      { name: 'Sötpotatis & Feta', desc: 'Auberginecreme, vitlökscreme och tahina (vegetarisk)', price: '125' },
      { name: 'Falafel', desc: 'Hummus, auberginecreme och tahina (vegan)', price: '125' },
      { name: 'Getost & Betor', desc: 'Auberginecreme och vitlökscreme (vegetarisk)', price: '125' },
      { name: 'Kyckling', desc: 'Smulad fetaost, paprika- och valnötsröra och vitlökscreme', price: '135' },
      { name: 'Kofte', desc: 'Paprika- och valnötsröra och vitlökscreme', price: '135' },
      { name: 'Mergues', desc: 'Paprika- och valnötsröra och vitlökscreme', price: '135' },
      { name: 'Kyckling & Mergues', desc: 'Smulad fetaost, paprika- och valnötsröra och vitlökscreme', price: '149' },
    ]
  },
  roror: {
    title: 'Röror',
    intro: 'Välj till dina meze eller beställ separat.',
    items: [
      { name: 'Hummus', desc: 'Klassisk kikärtsröra med tahini', price: '' },
      { name: 'Sötpotatiscreme', desc: 'Len sötpotatisröra', price: '' },
      { name: 'Baba ganosh', desc: 'Rökt aubergineröra med tahini', price: '' },
      { name: 'Mhamara', desc: 'Kryddig paprika- och valnötsröra', price: '' },
      { name: 'Myntayoghurt', desc: 'Frisk yoghurtröra med mynta', price: '' },
      { name: 'Vitlökscreme', desc: 'Krämig vitlöksröra', price: '' },
    ]
  },
};

const Meny = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = React.useState('meze');
  const categories = Object.entries(menuData);

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Header */}
      <section style={{
        padding: 'var(--space-2xl) 0 var(--space-xl)',
        background: 'var(--color-dark)', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="img/interior-wide.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25,20,15,0.88) 0%, rgba(25,20,15,0.5) 60%, rgba(25,20,15,0.25) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <div>
            <span className="badge" style={{ background: 'rgba(26,140,126,0.9)', color: 'white' }}>Vår meny</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', marginTop: '0.75rem', marginBottom: 'var(--space-sm)', color: 'var(--color-cream)' }}>
              Smaka <span style={{ color: 'var(--color-saffron-light)', fontStyle: 'italic' }}>Libanon</span>
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(251,247,241,0.75)', maxWidth: 440 }}>
              Alla rätter lagas dagligen av färska råvaror. Menyn finns även som take away.
            </p>
          </div>
          <button className="btn btn-primary" onClick={() => onNavigate('bestall')}>
            Beställ take away
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

      {/* Menu body */}
      <section className="section-lg" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          {/* Sticky tab nav */}
          <div style={{
            position: 'sticky', top: 'var(--nav-height)', zIndex: 10,
            background: 'var(--color-cream)', paddingBottom: 'var(--space-md)', paddingTop: 'var(--space-sm)',
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: 4 }}>
              {categories.map(([key, cat]) => (
                <button key={key} onClick={() => {
                  setActiveSection(key);
                  document.getElementById(`meny-${key}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }} style={{
                  padding: '0.6rem 1.25rem', borderRadius: 100, fontSize: '0.875rem',
                  fontWeight: activeSection === key ? 600 : 400, whiteSpace: 'nowrap',
                  background: activeSection === key ? 'var(--color-dark)' : 'var(--color-white)',
                  color: activeSection === key ? 'var(--color-cream)' : 'var(--color-text)',
                  border: activeSection === key ? 'none' : '1px solid var(--color-border)',
                  transition: 'all 0.25s',
                }}>{cat.title}</button>
              ))}
            </div>
          </div>

          {/* Menu sections */}
          {categories.map(([key, cat]) => (
            <div key={key} id={`meny-${key}`} style={{ marginBottom: 'var(--space-2xl)', scrollMarginTop: 'calc(var(--nav-height) + 80px)' }}>
              <Reveal>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem', paddingBottom: 'var(--space-xs)', borderBottom: '2px solid var(--color-border)' }}>
                  {cat.title}
                </h2>
                {cat.intro && <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-md)', fontStyle: 'italic' }}>{cat.intro}</p>}
              </Reveal>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: '0 var(--space-lg)' }}>
                {cat.items.map((item, i) => (
                  <Reveal key={i} delay={i * 50}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-md)',
                      padding: 'var(--space-md) 0', borderBottom: '1px solid var(--color-border-light)',
                    }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{item.name}</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginTop: '0.2rem' }}>{item.desc}</p>
                      </div>
                      {item.price && <span style={{
                        fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700,
                        color: 'var(--color-terracotta)', whiteSpace: 'nowrap',
                      }}>{item.price} kr</span>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom note */}
          <Reveal>
            <div style={{
              background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)',
              border: '1px solid var(--color-border-light)', textAlign: 'center',
            }}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-light)', maxWidth: 500, margin: '0 auto' }}>
                Alla priser inkl. moms. Allergier eller specialkost? Fråga oss gärna.
              </p>
              <div style={{ marginTop: 'var(--space-md)', display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => onNavigate('bestall')}>Beställ take away</button>
                <button className="btn btn-outline" onClick={() => onNavigate('catering')}>Se cateringmenyn</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

window.Meny = Meny;
