import React from 'react';
import './Candidate.css';
import candidateImg from '../candidate-hero.jpg';

const requirements = [
  'Вік 18–60 років',
  'Сміливість та мотивація',
  'Фізична підготовленість',
  'Любов до адреналіну',
  'Готовність стати частиною легенди',
];

const Candidate = () => {
  return (
    <section className="candidate">
      <div className="candidate__image reveal reveal--left">
        <img
          src={candidateImg}
          alt="Кандидат"
        />
        <div className="candidate__image-overlay" />
      </div>

      <div className="candidate__content reveal reveal--right">
        <p className="section-label">Вимоги</p>
        <h2 className="candidate__title">
          ТИ —<br />НАШ<br />КАНДИДАТ
        </h2>

        <ul className="candidate__list">
          {requirements.map((req, i) => (
            <li key={i} className="candidate__item">
              <span className="candidate__check">✓</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Candidate;
