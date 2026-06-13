import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__image-block">
        <img
          src={`${process.env.PUBLIC_URL}/pictures/about.png`}
          alt="Бійці КОРД"
          className="about__image-bg"
        />
        <div className="about__image-gradient-top" />
        <div className="about__image-gradient-bottom" />
      </div>

      <div className="about__text container">
        <p className="section-label reveal">Про підрозділ</p>
        <h2 className="about__title reveal" style={{ '--reveal-delay': '0.1s' }}>
          Підрозділи активних дій
        </h2>
        <p className="about__desc reveal" style={{ '--reveal-delay': '0.2s' }}>
          ЗАГІН СПЕЦІАЛЬНИХ ДІЙ «КОРД» входить до підрозділу активних дій Головного управління розвідки Міністерства оборони України.
          Це еліта Головного управління розвідки МО України,
          його слава і гордість.
        </p>

        <p className="about__desc reveal" style={{ '--reveal-delay': '0.2s' }}>
          Загін Спеціальних Дій «КОРД» — це колектив професіоналів, об'єднаних спільною метою, високими стандартами підготовки та безумовною відданістю Україні.
          Ми виконуємо найскладніші завдання там, де вирішальними є рішучість, дисципліна та командна робота. Кожен боєць підрозділу - це частина єдиного братерства, загартованого випробуваннями та бойовим досвідом. Наша сила - у підготовці, взаємній довірі та готовності діяти тоді, коли це найбільше потрібно.
          Amat Victoria Curam.

          Перемога любить підготовку.
        </p>

        <a href="#specializations" className="about__link">
          Підрозділ активних дій →
        </a>
      </div>
    </section>
  );
};

export default About;
