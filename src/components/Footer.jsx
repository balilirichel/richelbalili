function Footer({ socials }) {
  return (
    <footer className="footer">
      <p className="footer__title">Richel</p>
      <div className="footer__social">
        {socials.map(s => (
          <a href={s.href} className="footer__icon" key={s.label}>
            <s.icon size={24} />
          </a>
        ))}
      </div>
      <p className="footer__copy">© BaliliRAC. All rights reserved</p>
    </footer>
  );
}

export default Footer;
