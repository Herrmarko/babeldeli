/* ═══════════════════════════════════════
   Babel Deli — Event & Bröllop
   ═══════════════════════════════════════ */

const Event = ({ onNavigate }) => {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', company: '', date: '', guests: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>

      {/* Hero */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'flex-end', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="img/champagne.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(25,20,15,0.92) 0%, rgba(25,20,15,0.4) 50%, rgba(25,20,15,0.1) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: 'var(--space-2xl)' }}>
          <Reveal>
            <a href="#" onClick={e => { e.preventDefault(); onNavigate('catering'); }}
              style={{ fontSize: '0.85rem', color: 'rgba(251,247,241,0.5)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: 'var(--space-sm)' }}>
              ← Tillbaka till catering
            </a>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-cream)', lineHeight: 1.05, marginBottom: 'var(--space-md)' }}>
              Event eller<br/><span style={{ fontStyle: 'italic', color: 'var(--color-saffron-light)' }}>bröllop?</span>
            </h1>
            <p style={{ color: 'rgba(251,247,241,0.8)', fontSize: '1.125rem', maxWidth: 560, lineHeight: 1.7 }}>
              Går du i lite större tankar och önskar hjälp med mer än bara maten? Kanske vankas det ett event eller bröllop?
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="section-lg" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }} className="event-intro-grid">
            <Reveal>
              <div>
                <SectionHeader badge="Vår vision" badgeColor="saffron" title="Låt oss ta hand om det" />
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>
                  Vår vision är att du som kund inte ska behöva tänka på något. Vi hjälper till att skräddarsy en lösning som matchar era önskemål.
                </p>
                <p style={{ fontSize: '1.125rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--color-dark)' }}>
                  Ni sätter gränsen!
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img src="img/spread-2.jpg" alt="" style={{ width: '100%', objectFit: 'cover', aspectRatio: '4/3' }} />
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:768px){.event-intro-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* Services */}
      <section className="section-lg" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <Reveal><SectionHeader title="Vi erbjuder" center /></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
            {[
              { title: 'Konsultation', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
              { title: 'Brett utbud av libanesisk meze', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' },
              { title: 'Personal på plats', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
              { title: 'DJ-uthyrning', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' },
              { title: 'Dekoration', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
              { title: 'Ljud & Ljus', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)',
                  border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '1rem',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(26,140,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-terracotta)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon} />
                    </svg>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{s.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="section-lg" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'var(--space-2xl)' }} className="event-contact-grid">

            {/* Left: contact info */}
            <Reveal>
              <div>
                <SectionHeader badge="Kontakta oss" badgeColor="terracotta" title="Kom i kontakt" />
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.975rem', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
                  Har du frågor eller vill du lägga en beställning? Hör av dig till oss.
                </p>
                <div style={{ marginBottom: 'var(--space-md)' }}>
                  <a href="mailto:catering@babeldeli.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-terracotta)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    catering@babeldeli.com
                  </a>
                  <a href="tel:0720340986" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-terracotta)', fontWeight: 600, fontSize: '1rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    072-034 09 86
                  </a>
                </div>

                {/* Payment info */}
                <div style={{
                  background: 'var(--color-cream)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)',
                  border: '1px solid var(--color-border-light)', marginTop: 'var(--space-lg)',
                }}>
                  <div style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Betalningsvillkor</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
                    Som företag & privatperson betalar du enkelt via Swish, faktura eller med kort i restaurangen.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={150}>
              {!sent ? (
                <div style={{
                  background: 'var(--color-cream)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)',
                  border: '1px solid var(--color-border-light)',
                }}>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-md)' }}>Skicka en förfrågan</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)' }}>
                    <div className="form-group">
                      <label className="form-label">Namn</label>
                      <input className="form-input" value={form.name} onChange={e => update('name', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-post</label>
                      <input className="form-input" type="email" value={form.email} onChange={e => update('email', e.target.value)} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)' }}>
                    <div className="form-group">
                      <label className="form-label">Telefon</label>
                      <input className="form-input" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Företag (valfritt)</label>
                      <input className="form-input" value={form.company} onChange={e => update('company', e.target.value)} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)' }}>
                    <div className="form-group">
                      <label className="form-label">Datum</label>
                      <input className="form-input" type="date" value={form.date} onChange={e => update('date', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Antal gäster</label>
                      <input className="form-input" type="number" min="1" value={form.guests} onChange={e => update('guests', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Berätta om ert event</label>
                    <textarea className="form-textarea" style={{ minHeight: 140 }} placeholder="Beskriv eventet, önskemål, plats, etc." value={form.message} onChange={e => update('message', e.target.value)} />
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>
                    Skicka förfrågan
                  </button>
                </div>
              ) : (
                <div style={{
                  background: 'var(--color-cream)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-2xl)',
                  textAlign: 'center', border: '1px solid var(--color-border-light)',
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(26,140,126,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)', fontSize: '1.3rem', color: 'var(--color-terracotta)' }}>✓</div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Tack för din förfrågan!</h3>
                  <p style={{ color: 'var(--color-text-light)', maxWidth: 380, margin: '0 auto' }}>Vi återkommer till dig så snart som möjligt.</p>
                  <button className="btn btn-outline" style={{ marginTop: 'var(--space-lg)' }} onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', company:'', date:'', guests:'', message:'' }); }}>
                    Skicka en ny förfrågan
                  </button>
                </div>
              )}
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:768px){.event-contact-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>

    </div>
  );
};

window.Event = Event;
