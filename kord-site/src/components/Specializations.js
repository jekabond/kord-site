import React from 'react';
import './Specializations.css';

const specs = [
  {
    icon: '🎯',
    name: 'Снайпер',
    desc: 'Точність та терпіння. Контроль ситуації з дистанції.',
  },
  {
    icon: '💣',
    name: 'Сапер',
    desc: 'Розмінування та знешкодження вибухових пристроїв.',
  },
  {
    icon: '👁',
    name: 'Розвідник',
    desc: 'Збір інформації в умовах підвищеного ризику.',
  },
  {
    icon: '⚓',
    name: 'Водолаз',
    desc: 'Проводить операції та спеціальні місії.',
  },
  {
    icon: '⛵',
    name: 'Шкіпер',
    desc: 'Морські операції та десантування.',
  },
  {
    icon: '📡',
    name: "Оператор БПЛА",
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
              <div className="specs__card-icon">{spec.icon}</div>
              <h3 className="specs__card-name">{spec.name}</h3>
              <p className="specs__card-desc">{spec.desc}</p>
              <a href="#join" className="specs__card-link">
                Дізнатись більше →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
