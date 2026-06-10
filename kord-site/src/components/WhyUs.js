import React from 'react';
import './WhyUs.css';

const reasons = [
  {
    num: '01',
    title: 'Швидка процедура оформлення',
    desc: 'Сприємо швидкому вступу та оформленню, щоб ти міг якнайшвидше приєднатися до нас.',
  },
  {
    num: '02',
    title: 'Професійна підготовка',
    desc: 'Ретельна підготовка перед першою місією. Постійне вдосконалення навичок.',
  },
  {
    num: '03',
    title: 'Новітнє обладнання',
    desc: 'Постійне оновлення та підтримка найкращого спорядження для наших бійців.',
  },
  {
    num: '04',
    title: 'Системні ротації',
    desc: 'Чітка система ротацій для балансу між службою та відпочинком.',
  },
  {
    num: '05',
    title: 'Соціальне забезпечення',
    desc: 'Повне соціальне та медичне забезпечення бійців та їх сімей.',
  },
  {
    num: '06',
    title: 'Дружній колектив',
    desc: 'Братство, яке перевірено бойовими умовами. Ти не один.',
  },
  
];

const WhyUs = () => {
  return (
    <section className="why" id="why">
      <div className="container">
        <p className="section-label reveal">Переваги</p>
        <h2 className="why__title reveal" style={{ '--reveal-delay': '0.1s' }}>ЧОМУ САМЕ МИ?</h2>

        <div className="why__grid">
          {reasons.map((r, i) => (
            <div className="why__card reveal" key={i} style={{ '--reveal-delay': `${i * 0.08}s` }}>
              <span className="why__num">{r.num}</span>
              <h3 className="why__card-title">{r.title}</h3>
              <p className="why__card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
