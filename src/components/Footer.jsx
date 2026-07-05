function Footer({ socials }) {
  return (
    <footer 
      className="footer" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        textAlign: 'center',
        padding: '40px 20px',
        width: '100%'
      }}
    >
      <p className="footer__title" style={{ margin: 0, fontSize: '1.75rem', fontWeight: 'bold' }}>
        Richel
      </p>

      {/* Force icons into a centered, horizontal row */}
      <div 
        className="footer__social" 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          width: '100%'
        }}
      >
        {socials.map(s => (
          <a 
            href={s.href} 
            key={s.label} 
            target="_blank" 
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img 
              src={s.icon} 
              alt={`${s.label} icon`} 
              style={{ width: '24px', height: '24px', objectContain: 'contain' }} 
            />
          </a>
        ))}
      </div>  

      <p className="footer__copy" style={{ margin: 0, fontSize: '0.85rem', opacity: 0.8 }}>
        © 2026 Richel Anthony Balili. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;