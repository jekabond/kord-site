import React from 'react';
import './Footer.css';
import logo from '../logoSmall.svg';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner container">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="КОРД" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">Загін Спеціальних Дій</p>
        </div>

        <nav className="footer__nav">
          <a href="#about">Про нас</a>
          <a href="#specializations">Спеціалізації</a>
          <a href="#why">Переваги</a>
          <a href="#join">Долучитись</a>
        </nav>

        <div className="footer__copy">
          <span>© Загін Спеціальних Дій</span>
          <span>імені Владислава Пелешенка</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
