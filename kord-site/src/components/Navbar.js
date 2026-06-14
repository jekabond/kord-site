import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../logoSmall.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
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

        <div className="navbar__right">
          <a
            href="https://docs.google.com/forms/d/1RMWQhqtFnyBt3hbAomKXSaRvvWTOECnAud8Kq_lvJtU/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta btn-primary"
          >
            Долучитись
          </a>

          <a
            href="https://www.instagram.com/kord.diu/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__instagram"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

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
      </div>
    </nav>
  );
};

export default Navbar;
