import React, { useState } from 'react';
import './Join.css';

const Join = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="join" id="join">
      <div className="join__bg" />
      <div className="container">
        <p className="section-label reveal">Стань частиною легенди</p>
        <h2 className="join__title reveal" style={{ '--reveal-delay': '0.1s' }}>
          ДОЛУЧАЙСЯ<br />ДО НАС
        </h2>
        <p className="join__desc reveal" style={{ '--reveal-delay': '0.2s' }}>
          Заповни анкету та вкажи бажаний рід діяльності. Це займе
          декілька хвилин. Завжди приймаємо оформлення. Ретельна підготовка.
        </p>

        {submitted ? (
          <div className="join__success">
            <span>✓</span>
            <p>Анкету прийнято. Ми зв'яжемося з вами найближчим часом.</p>
          </div>
        ) : (
          <form className="join__form reveal" style={{ '--reveal-delay': '0.3s' }} onSubmit={handleSubmit}>
            {/* <div className="join__fields">
              <input
                type="text"
                placeholder="Ваше ім'я"
                className="join__input"
                required
              />
              <input
                type="tel"
                placeholder="Номер телефону"
                className="join__input"
                required
              />
              <select className="join__input join__select" defaultValue="">
                <option value="" disabled>Спеціалізація</option>
                <option>Снайпер</option>
                <option>Сапер</option>
                <option>Розвідник</option>
                <option>Водолаз</option>
                <option>Шкіпер</option>
                <option>Зв'язківець</option>
              </select>
            </div> */}
             <a href={"https://docs.google.com/forms/d/1RMWQhqtFnyBt3hbAomKXSaRvvWTOECnAud8Kq_lvJtU/viewform?edit_requested=true"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary join__btn"
              >
                Заповнити анкету →
              </a>
            {/* <button type="submit" className="btn-primary join__btn">
              Заповнити анкету →
            </button> */}
            <p className="join__privacy">
              🔒 Конфіденційність гарантована
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Join;
