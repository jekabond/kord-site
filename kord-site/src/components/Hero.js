import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <video
          className="hero__bg-video"
          autoPlay
          muted
          loop
          playsInline
          src="/video/hero.mp4"
        />
        <div className="hero__overlay" />
        <div className="hero__noise" />
      </div>

      <div className="hero__content container">
        <p className="hero__supertitle">ГУР МО України — Загін Спеціальних Дій імені</p>
        <h1 className="hero__title">Владислава<br></br>Пелешенка</h1>
        <p className="hero__subtitle">
          "КОРД"
        </p>
        <p className="hero__tagline">З нами ти станеш частиною Легенди</p>

        <div className="hero__actions">
          <a href="#join" className="btn-primary">
            Долучитись →
          </a>
          <a href="#about" className="btn-outline">
            Дізнатись більше
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span />
      </div>
    </section>
  );
};

export default Hero;
