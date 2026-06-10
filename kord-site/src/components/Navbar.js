import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../logoSmall.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <img src={logo} alt="КОРД" className="navbar__logo-img" />
        </a>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Про нас</a></li>
          <li><a href="#specializations" onClick={() => setMenuOpen(false)}>Спеціалізації</a></li>
          <li><a href="#why" onClick={() => setMenuOpen(false)}>Чому ми</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Контакт</a></li>
        </ul>

        <a href="https://docs.google.com/forms/d/1RMWQhqtFnyBt3hbAomKXSaRvvWTOECnAud8Kq_lvJtU/viewform?edit_requested=true"
  target="_blank"
  rel="noopener noreferrer"
  className="navbar__cta btn-primary"
>
  Долучитись
</a>

        {/* <a href="#join" className="navbar__cta btn-primary">
          Долучитись
        </a> */}

        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
