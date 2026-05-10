import React from 'react';
import './Hero.css';
import heroImage from '../assets/foto-inicial.png';
import { PiArrowRightThin } from 'react-icons/pi';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-badge">CR Strategic Consulting</span>
          <h1 className="hero-title">
            Estratégia que transforma. <br />
            <span className="text-highlight">Resultado que permanece.</span>
          </h1>
          <p className="hero-subtitle">
            Consultoria especializada no desenvolvimento de operações mais eficientes, sustentáveis e humanizadas para elevar o seu negócio.
          </p>
          <div className="hero-actions">
            <a href="#orcamento" className="btn btn-primary">
              Fazer Orçamento <PiArrowRightThin size={22} style={{ marginLeft: '12px' }} />
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src={heroImage} alt="Consultoria Estratégica" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
