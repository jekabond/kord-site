import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 768px)').matches
  );
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const videoSrc = isMobile
    ? `${process.env.PUBLIC_URL}/video/hero_section_fon_vertical.mp4`
    : `${process.env.PUBLIC_URL}/video/hero.mp4`;

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <video
          ref={videoRef}
          className="hero__bg-video"
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
        />
        <div className="hero__overlay" />
        <div className="hero__noise" />
      </div>

      <button className="hero__sound-btn" onClick={toggleMute} aria-label={isMuted ? 'Увімкнути звук' : 'Вимкнути звук'}>
        {isMuted ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
      </button>

      <div className="hero__content container">
        <p className="hero__supertitle">ГУР МО України — Загін Спеціальних Дій імені</p>
        <h1 className="hero__title">Владислава<br></br>Пелешенка</h1>
        <p className="hero__subtitle">
          "КОРД"
        </p>
        {/* <p className="hero__tagline">З нами ти станеш частиною Легенди</p> */}

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
