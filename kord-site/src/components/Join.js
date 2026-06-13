import React, { useState, useEffect } from 'react';
import './Join.css';

const Join = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const bgSrc = isMobile
    ? `${process.env.PUBLIC_URL}/pictures/join_vertical.png`
    : `${process.env.PUBLIC_URL}/pictures/join.png`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="join" id="join">
      <div
        className="join__bg"
        style={{ backgroundImage: `url(${bgSrc})` }}
      />
      <div className="join__overlay" />
      <div className="container join__content">
        <p className="section-label reveal">Стань частиною легенди</p>
        <h2 className="join__title reveal" style={{ '--reveal-delay': '0.1s' }}>
          ДОЛУЧАЙСЯ<br />ДО НАС
        </h2>
        <p className="join__desc reveal" style={{ '--reveal-delay': '0.2s' }}>
          Заповни анкету та вкажи бажаний рід діяльності. Це займе
          декілька хвилин. Ми з повагою ставимося до кожного, хто виявляє бажання приєднатися до нас, і гарантуємо конфіденційність.
        </p>
        {submitted ? (
          <div className="join__success">
            <span>✓</span>
            <p>Анкету прийнято. Ми зв'яжемося з вами найближчим часом.</p>
          </div>
        ) : (
          <form className="join__form reveal" style={{ '--reveal-delay': '0.3s' }} onSubmit={handleSubmit}>
            <a
              href="https://docs.google.com/forms/d/1RMWQhqtFnyBt3hbAomKXSaRvvWTOECnAud8Kq_lvJtU/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary join__btn"
            >
              Заповнити анкету →
            </a>
            <p className="join__privacy">
              Конфіденційність гарантована
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Join;
