import React from 'react';
import './Stats.css';

// const stats = [
//   { value: '2022', label: 'Рік заснування' },
//   { value: '500+', label: 'Операцій' },
//   { value: '6', label: 'Спеціалізацій' },
//   { value: '100%', label: 'Відданість' },
// ];

const stats = [
  { value: '2022', label: 'Рік заснування' },
  { value: 'У небі', label: 'Ми опанували небо, щоб захопити ворога зненацька — вистежити, уразити без пощади, де б він не знаходився.' },
  { value: '6', label: 'Спеціалізацій' },
  { value: '100%', label: 'Відданість' },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__inner container">
        {stats.map((stat, i) => (
          <div
            className="stats__item reveal"
            key={i}
            style={{ '--reveal-delay': `${i * 0.1}s` }}
          >
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
