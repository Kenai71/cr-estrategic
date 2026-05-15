import React from 'react';
import './Hero.css';
import heroFoodImage from '../assets/hero-food.png';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      {/* Food image as background on the right side */}
      <div className="hero-food-bg">
        <img src={heroFoodImage} alt="Gastronomia Premium" className="hero-food-img" />
        <div className="hero-food-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-logo-mark">
            <span className="hero-logo-c">C</span>
            <span className="hero-logo-r">R</span>
          </div>
          <span className="hero-badge">CR Strategic Consulting</span>
          <h1 className="hero-title">
            Estratégia que<br />transforma.
            <span className="text-highlight"><br />Resultado que<br />permanece.</span>
          </h1>
        </div>
      </div>

      {/* Decorative curved divider at the bottom */}
      <div className="hero-bottom-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,120 C360,20 720,100 1440,40 L1440,120 Z" fill="var(--color-primary)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
