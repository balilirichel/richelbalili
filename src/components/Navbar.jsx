import { Menu, X } from 'lucide-react';

function Navbar({ navLinks, isOpen, setIsOpen, activeLink }) {
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Richel Anthony Balili</a>
        </div>

        <div className={`nav__menu ${isOpen ? 'show' : ''}`}>
          <ul className="nav__list">
            {navLinks.map(link => (
              <li className="nav__item" key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link ${activeLink === link.href.slice(1) ? 'active-link' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
