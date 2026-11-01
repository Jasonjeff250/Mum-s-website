import React from 'react';
import './Hero.css';
import bgImage from '../assets/maxi-bg.jpg'; // Replace with actual image from Instagram

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay">
        <h1 className="hero-title">The Maxi Muse</h1>
        <p className="hero-motto">"it doesn't have to be new to be awesome..."</p>
        <div className="hero-socials">
          <a href="https://wa.me/2348187160674" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://instagram.com/ediyesthrifts" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/ediyesthrifts" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
