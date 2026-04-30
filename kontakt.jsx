/* ═══════════════════════════════════════
   Babel Deli — Kontakt
   ═══════════════════════════════════════ */

const Kontakt = ({ onNavigate }) => {
  const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const update = (k, v) => setFormData(prev => ({ ...prev, [k]: v }));

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{ padding: 'var(--space-2xl) 0 var(--space-xl)', background: 'var(--color-dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="img/interior.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25,20,15,0.88) 0%, rgba(25,20,15,0.5) 60%, rgba(25,20,15,0.25) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'var(--color-cream)' }}>
              Kontakta <span style={{ color: 'var(--color-saffron-light)', fontStyle: 'italic' }}>oss</span>
            </h1>
            <p style={{ color: 'rgba(251,247,241,0.7)', maxWidth: 480, marginTop: 'var(--space-sm)', fontSize: '1rem' }}>
              Har du frågor om catering, menyn eller vill boka ett event? Hör av dig så hjälper vi dig.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)' }} className="kontakt-grid">

            {/* Info */}
            <Reveal>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-lg)' }}>Hitta oss</h2>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: '0.4rem' }}>Adress</h3>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Kungstensgatan 33<br/>113 57 Stockholm
                  </p>
                </div>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: '0.4rem' }}>Öppettider</h3>
                  <div style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                    Måndag–Fredag: 10:00–20:00<br/>
                    Lördag: 11:00–16:00<br/>
                    Söndag: Stängt
                  </div>
                </div>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: '0.4rem' }}>Restaurangen</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    <a href="tel:086121449" style={{ color: 'var(--color-terracotta)', fontWeight: 500 }}>08-612 14 49</a><br/>
                    <a href="mailto:info@babeldeli.com" style={{ color: 'var(--color-terracotta)', fontWeight: 500 }}>info@babeldeli.com</a>
                  </p>
                </div>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: '0.4rem' }}>Catering</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    <a href="tel:0720340986" style={{ color: 'var(--color-terracotta)', fontWeight: 500 }}>072-034 09 86</a><br/>
                    <a href="mailto:catering@babeldeli.com" style={{ color: 'var(--color-terracotta)', fontWeight: 500 }}>catering@babeldeli.com</a>
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: '0.4rem' }}>Sociala medier</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="https://instagram.com/babeldeli" target="_blank" rel="noopener" style={{ color: 'var(--color-terracotta)', fontWeight: 500, fontSize: '0.95rem' }}>Instagram</a>
                    <a href="https://facebook.com/babeldeli" target="_blank" rel="noopener" style={{ color: 'var(--color-terracotta)', fontWeight: 500, fontSize: '0.95rem' }}>Facebook</a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={150}>
              {!sent ? (
                <div style={{
                  background: 'var(--color-white)', borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)', border: '1px solid var(--color-border-light)',
                }}>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-md)' }}>Skicka ett meddelande</h2>
                  <div className="form-group">
                    <label className="form-label">Namn</label>
                    <input className="form-input" placeholder="Ditt namn" value={formData.name} onChange={e => update('name', e.target.value)} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)' }}>
                    <div className="form-group">
                      <label className="form-label">E-post</label>
                      <input className="form-input" type="email" placeholder="namn@exempel.se" value={formData.email} onChange={e => update('email', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Telefon</label>
                      <input className="form-input" type="tel" placeholder="070-123 45 67" value={formData.phone} onChange={e => update('phone', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Meddelande</label>
                    <textarea className="form-textarea" placeholder="Vad kan vi hjälpa dig med?" value={formData.message} onChange={e => update('message', e.target.value)} />
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>
                    Skicka
                  </button>
                </div>
              ) : (
                <div style={{
                  background: 'var(--color-white)', borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-2xl)', textAlign: 'center', border: '1px solid var(--color-border-light)',
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(26,140,126,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)', fontSize: '1.3rem', color: 'var(--color-terracotta)' }}>✓</div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Tack!</h3>
                  <p style={{ color: 'var(--color-text-light)' }}>Vi har tagit emot ditt meddelande och återkommer så snart vi kan.</p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:768px){.kontakt-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </div>
  );
};

window.Kontakt = Kontakt;
