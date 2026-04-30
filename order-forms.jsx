/* ═══════════════════════════════════════
   Babel Deli — Shared Order Form Components
   ═══════════════════════════════════════ */

const CheckboxField = ({ label, checked, onChange }) => (
  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', cursor: 'pointer', padding: '0.3rem 0' }}>
    <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)}
      style={{ marginTop: 3, accentColor: 'var(--color-terracotta)', width: 14, height: 14, flexShrink: 0 }} />
    <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text)' }}>{label}</span>
  </label>
);

const RadioField = ({ label, checked, onChange }) => (
  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', cursor: 'pointer', padding: '0.3rem 0' }}>
    <input type="radio" checked={checked} onChange={() => onChange()}
      style={{ marginTop: 3, accentColor: 'var(--color-terracotta)', width: 14, height: 14, flexShrink: 0 }} />
    <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text)' }}>{label}</span>
  </label>
);

const FormLabel = ({ children }) => (
  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text)', marginBottom: '0.4rem' }}>{children}</div>
);

const FormInput = ({ type = 'text', placeholder, value, onChange }) => (
  <input type={type} className="form-input" placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />
);

const NumberInput = ({ value, onChange, min = 6 }) => (
  <input type="number" className="form-input" min={min} value={value} onChange={e => onChange(e.target.value)} placeholder="Antal personer" style={{ maxWidth: 180 }} />
);

const getTimeSlots = () => {
  const slots = [];
  for (let h = 7; h <= 20; h++) {
    slots.push(String(h).padStart(2,'0') + ':00');
    if (h < 20) slots.push(String(h).padStart(2,'0') + ':30');
  }
  return slots;
};

const DateTimePicker = ({ date, time, onDateChange, onTimeChange }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 110px', gap: '0.5rem' }}>
    <input type="date" className="form-input" value={date} onChange={e => onDateChange(e.target.value)} />
    <select className="form-select" value={time} onChange={e => onTimeChange(e.target.value)}>
      <option value="">Tid</option>
      {getTimeSlots().map(t => <option key={t} value={t}>{t}</option>)}
    </select>
  </div>
);

const BUFFERS = [
  { name: 'Lilla Vegetariska Buffén', price: '249 kr/pp' },
  { name: 'Lilla Babelbuffén', price: '249 kr/pp' },
  { name: 'Stora Babelbuffén', price: '289 kr/pp' },
  { name: 'Stora Vegetariska Buffén', price: '289 kr/pp' },
  { name: 'Vegetariska Kalasbuffén', price: '329 kr/pp' },
  { name: 'Kalasbuffén', price: '329 kr/pp' },
  { name: 'Lyxbuffén', price: '399 kr/pp' },
  { name: 'Pitarulle/Sallad/Portionsförpackad Meze', price: '' },
];

const BufferSelect = ({ value, onChange }) => (
  <select className="form-select" value={value} onChange={e => onChange(e.target.value)}>
    <option value="">Välj buffé...</option>
    {BUFFERS.map(b => (
      <option key={b.name} value={b.name}>{b.name}{b.price ? ' – ' + b.price : ''}</option>
    ))}
  </select>
);

/* ─── PRIVATPERSON FORM ─── */
const PrivatForm = ({ onSuccess, preSelected = '' }) => {
  const [form, setForm] = React.useState({ namn: '', email: '', mobil: '', bestallning: preSelected, antal: '6', varmKall: '', leverans: '', datum: '', tid: '', adress: '', meddelande: '' });
  React.useEffect(() => setForm(p => ({ ...p, bestallning: preSelected })), [preSelected]);
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div className="form-group"><FormLabel>Namn</FormLabel><FormInput value={form.namn} onChange={v => set('namn', v)} /></div>
      <div className="form-group"><FormLabel>E-post</FormLabel><FormInput type="email" value={form.email} onChange={v => set('email', v)} /></div>
      <div className="form-group"><FormLabel>Mobilnummer</FormLabel><FormInput type="tel" value={form.mobil} onChange={v => set('mobil', v)} /></div>
      <div className="form-group">
        <FormLabel>Beställning</FormLabel>
        <BufferSelect value={form.bestallning} onChange={v => set('bestallning', v)} />
      </div>
      <div className="form-group"><FormLabel>Antal</FormLabel><NumberInput value={form.antal} onChange={v => set('antal', v)} /></div>
      <div className="form-group">
        <FormLabel>Leverans</FormLabel>
        <RadioField label="Jag vill beställa budleverans (kostnad tillkommer)" checked={form.leverans === 'bud'} onChange={() => set('leverans', 'bud')} />
        <RadioField label="Jag hämtar själv upp min beställning på Kungstensgatan 33" checked={form.leverans === 'hamta'} onChange={() => set('leverans', 'hamta')} />
      </div>
      {form.leverans === 'bud' && (
        <div className="form-group"><FormLabel>Leveransadress</FormLabel><FormInput value={form.adress} onChange={v => set('adress', v)} placeholder="Gatuadress, postnummer, stad" /></div>
      )}
      <div className="form-group">
        <FormLabel>Varm eller kallt vid leverans?</FormLabel>
        <RadioField label="Jag vill att min beställning är varm och redo att serveras" checked={form.varmKall === 'varm'} onChange={() => set('varmKall', 'varm')} />
        <RadioField label="Jag vill att ni förpackar min beställning i ugnssäkra formar så jag kan värma själv" checked={form.varmKall === 'kall'} onChange={() => set('varmKall', 'kall')} />
      </div>
      <div className="form-group">
        <FormLabel>Leveransdatum & tid för leverans/avhämtning</FormLabel>
        <DateTimePicker date={form.datum} time={form.tid} onDateChange={v => set('datum', v)} onTimeChange={v => set('tid', v)} />
      </div>
      <div className="form-group"><FormLabel>Meddelande (valfritt)</FormLabel><textarea className="form-textarea" style={{ minHeight: 80 }} placeholder="Allergier, portkod, specialönskemål..." value={form.meddelande} onChange={e => set('meddelande', e.target.value)} /></div>
      <button className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-sm)' }} onClick={onSuccess}>Skicka</button>
    </div>
  );
};

/* ─── FÖRETAG FORM ─── */
const ForetagForm = ({ onSuccess, preSelected = '' }) => {
  const [form, setForm] = React.useState({ foretag: '', email: '', mobil: '', datum: '', tid: '', leverans: '', bestallning: preSelected, antal: '6', adress: '', faktura: '', meddelande: '' });
  React.useEffect(() => setForm(p => ({ ...p, bestallning: preSelected })), [preSelected]);
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>Jag beställer som <span style={{ color: 'var(--color-terracotta)' }}>FÖRETAGSKUND</span></h3>
      <div className="form-group"><FormLabel>Företagsnamn & namn på beställaren</FormLabel><FormInput value={form.foretag} onChange={v => set('foretag', v)} /></div>
      <div className="form-group"><FormLabel>E-post</FormLabel><FormInput type="email" value={form.email} onChange={v => set('email', v)} /></div>
      <div className="form-group"><FormLabel>Mobilnummer</FormLabel><FormInput type="tel" value={form.mobil} onChange={v => set('mobil', v)} /></div>
      <div className="form-group">
        <FormLabel>Beställning</FormLabel>
        <BufferSelect value={form.bestallning} onChange={v => set('bestallning', v)} />
      </div>
      <div className="form-group"><FormLabel>Antal</FormLabel><NumberInput value={form.antal} onChange={v => set('antal', v)} /></div>
      <div className="form-group">
        <FormLabel>Leverans</FormLabel>
        <CheckboxField label="Jag vill beställa leverans (kostnad tillkommer)" checked={form.leverans === 'bud'} onChange={() => set('leverans', form.leverans === 'bud' ? '' : 'bud')} />
        <CheckboxField label="Jag hämtar upp min beställning själv på Kungstensgatan 33" checked={form.leverans === 'hamta'} onChange={() => set('leverans', form.leverans === 'hamta' ? '' : 'hamta')} />
      </div>
      {form.leverans === 'bud' && (
        <div className="form-group"><FormLabel>Leveransadress</FormLabel><FormInput value={form.adress} onChange={v => set('adress', v)} placeholder="Gatuadress, postnummer, stad" /></div>
      )}
      <div className="form-group">
        <FormLabel>Leveransdatum & tid för leverans/avhämtning</FormLabel>
        <DateTimePicker date={form.datum} time={form.tid} onDateChange={v => set('datum', v)} onTimeChange={v => set('tid', v)} />
      </div>
      <div className="form-group"><FormLabel>Faktura information (organisationsnummer, fakturaadress eller email för PDF-faktura & referens)</FormLabel><FormInput value={form.faktura} onChange={v => set('faktura', v)} /></div>
      <div className="form-group"><FormLabel>Meddelande (valfritt)</FormLabel><textarea className="form-textarea" style={{ minHeight: 80 }} placeholder="Allergier, portkod, specialönskemål..." value={form.meddelande} onChange={e => set('meddelande', e.target.value)} /></div>
      <button className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-sm)' }} onClick={onSuccess}>Skicka</button>
    </div>
  );
};

/* ─── FRUKOST FORM ─── */
const FrukostForm = ({ onSuccess }) => {
  const items = [
    'Bagel Deli • 55kr', 'Grekisk yoghurt med honung och valnötter • 45kr',
    'Wrap med getost & betor • 115kr', 'Wrap med sötpotatis & feta • 115kr',
    'Apelsinjuice • 45kr', 'Fruktsallad • 50kr',
    'Babel Delis lilla frukostbuffé • 75 kr/person',
    'Babel Delis stora frukostbuffé • 110 kr/person',
    'Bagel med färskost • 55 kr',
  ];
  const [selected, setSelected] = React.useState({});
  const [form, setForm] = React.useState({ foretag: '', email: '', mobil: '', datum: '', tid: '', leverans: '', antal: '6', adress: '', faktura: '', meddelande: '' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const toggle = (b) => setSelected(p => ({ ...p, [b]: !p[b] }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>
        För att lägga en beställning, <span style={{ color: 'var(--color-terracotta)', fontStyle: 'italic' }}>använd formuläret nedan.</span>
      </h3>
      <div className="form-group"><FormLabel>Företagsnamn/namn på beställaren</FormLabel><FormInput value={form.foretag} onChange={v => set('foretag', v)} /></div>
      <div className="form-group"><FormLabel>E-post</FormLabel><FormInput type="email" value={form.email} onChange={v => set('email', v)} /></div>
      <div className="form-group"><FormLabel>Mobilnummer</FormLabel><FormInput type="tel" value={form.mobil} onChange={v => set('mobil', v)} /></div>
      <div className="form-group">
        <FormLabel>Beställning</FormLabel>
        {items.map(b => <CheckboxField key={b} label={b} checked={!!selected[b]} onChange={() => toggle(b)} />)}
      </div>
      <div className="form-group"><FormLabel>Antal</FormLabel><NumberInput value={form.antal} onChange={v => set('antal', v)} /></div>
      <div className="form-group">
        <FormLabel>Leverans</FormLabel>
        <CheckboxField label="Jag vill beställa leverans (kostnad tillkommer)" checked={form.leverans === 'bud'} onChange={() => set('leverans', form.leverans === 'bud' ? '' : 'bud')} />
        <CheckboxField label="Jag hämtar upp min beställning själv på Kungstensgatan 33" checked={form.leverans === 'hamta'} onChange={() => set('leverans', form.leverans === 'hamta' ? '' : 'hamta')} />
      </div>
      {form.leverans === 'bud' && (
        <div className="form-group"><FormLabel>Leveransadress</FormLabel><FormInput value={form.adress} onChange={v => set('adress', v)} placeholder="Gatuadress, postnummer, stad" /></div>
      )}
      <div className="form-group">
        <FormLabel>Leveransdatum & tid för leverans/avhämtning</FormLabel>
        <DateTimePicker date={form.datum} time={form.tid} onDateChange={v => set('datum', v)} onTimeChange={v => set('tid', v)} />
      </div>
      <div className="form-group"><FormLabel>Faktura information (organisationsnummer, fakturaadress eller email för PDF-faktura & referens)</FormLabel><FormInput value={form.faktura} onChange={v => set('faktura', v)} /></div>
      <div className="form-group"><FormLabel>Meddelande (valfritt)</FormLabel><textarea className="form-textarea" style={{ minHeight: 80 }} placeholder="Allergier, portkod, specialönskemål..." value={form.meddelande} onChange={e => set('meddelande', e.target.value)} /></div>
      <button className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-sm)' }} onClick={onSuccess}>Skicka</button>
    </div>
  );
};

Object.assign(window, { PrivatForm, ForetagForm, FrukostForm });
