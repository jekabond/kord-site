import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Specializations from './components/Specializations';
import Candidate from './components/Candidate';
import WhyUs from './components/WhyUs';
import VideoSection from './components/VideoSection';
import Join from './components/Join';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      {/* <SocialSidebar /> */}
      <Hero />
      {/* <Stats /> */}
      <About />
      <Specializations />
      <Candidate />
      <WhyUs />
      {/* <VideoSection /> */}
      <Join />
      <Footer />
    </div>
  );
}

export default App;
