import React from 'react';
import './Specializations.css';

const specs = [
  {
    img: 'sniper.png',
    name: 'Снайпер',
    desc: 'Точність та терпіння. Контроль ситуації з дистанції.',
  },
  {
    img: 'saper.png',
    name: 'Сапер',
    desc: 'Розмінування та знешкодження вибухових пристроїв.',
  },
  {
    img: 'rozvid.png',
    name: 'Розвідник',
    desc: 'Збір інформації в умовах підвищеного ризику.',
  },
  {
    img: 'vodolaz.png',
    name: 'Водолаз',
    desc: 'Проводить операції та спеціальні місії.',
  },
  {
    img: 'skiper.png',
    name: 'Шкіпер',
    desc: 'Морські операції та десантування.',
  },
  {
    img: 'bpla.png',
    name: 'Оператор БПЛА',
    desc: 'Завжди готові до ураження.',
  },
];

const Specializations = () => {
  return (
    <section className="specs" id="specializations">
      <div className="container">
        <p className="section-label reveal">Кого ми шукаємо</p>
        <h2 className="specs__title reveal" style={{ '--reveal-delay': '0.1s' }}>СПЕЦІАЛІЗАЦІЇ</h2>

        <div className="specs__grid">
          {specs.map((spec, i) => (
            <div className="specs__card reveal" key={i} style={{ '--reveal-delay': `${i * 0.1}s` }}>
              <div className="specs__card-body">
                <h3 className="specs__card-name">{spec.name}</h3>
                <p className="specs__card-desc">{spec.desc}</p>
                <a href="#join" className="specs__card-link">
                  Дізнатись більше →
                </a>
              </div>
              <div className="specs__card-icon">
                <img src={`${process.env.PUBLIC_URL}/pictures/icon/${spec.img}`} alt={spec.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
