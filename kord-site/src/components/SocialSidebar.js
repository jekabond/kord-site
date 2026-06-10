import React, { useState, useEffect } from 'react';
import './SocialSidebar.css';

const SocialSidebar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`social-sidebar ${scrolled ? 'scrolled' : ''}`}>
      <a
        href="https://www.instagram.com/kord.diu/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-sidebar__btn"
        aria-label="Instagram"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialSidebar;
