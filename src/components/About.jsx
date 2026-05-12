import React from 'react';
import './About.css';
import { PiForkKnifeThin, PiBuildingsThin, PiBriefcaseThin, PiTrendUpThin, PiUsersThin, PiTargetThin } from 'react-icons/pi';
import gourmetFoodBowls from '../assets/gourmet_food_bowls.png';

const About = () => {
  const segments = [
    { icon: <PiForkKnifeThin size={42} />, title: "Food Service" },
    { icon: <PiBuildingsThin size={42} />, title: "Hospitalidade" },
    { icon: <PiBriefcaseThin size={42} />, title: "Corporativo" }
  ];

  const features = [
    { 
      icon: <PiTrendUpThin size={28} className="feature-icon" />, 
      title: "Desempenho Operacional",
      text: "Redução de desperdícios e aumento de produtividade."
    },
    { 
      icon: <PiUsersThin size={28} className="feature-icon" />, 
      title: "Desenvolvimento Humano",
      text: "Fortalecimento da cultura organizacional e de equipes."
    },
    { 
      icon: <PiTargetThin size={28} className="feature-icon" />, 
      title: "Foco",
      text: "Análise técnica com visão estratégica para resultados reais."
    }
  ];

  return (
    <section id="sobre" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text-content">
            <h2 className="section-title">A Empresa</h2>
            <div className="title-underline"></div>
            <p className="about-description highlight-text">
              Mais do que uma consultoria, atuo como parceira estratégica no desenvolvimento de ambientes mais fortes, organizados, produtivos e sustentáveis.
            </p>
            <p className="about-description">
              A <strong>CR Strategic Consulting</strong> é especializada no desenvolvimento de operações mais eficientes, sustentáveis e humanizadas. O trabalho é baseado na integração entre estratégia, gestão e valorização humana, permitindo que empresas cresçam de forma estruturada.
            </p>
            
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-text">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="segments-content">
            <h3 className="segments-title">Segmentos de Atuação</h3>
            <div className="segments-grid">
              {segments.map((segment, index) => (
                <div key={index} className="segment-card">
                  <div className="segment-icon">
                    {segment.icon}
                  </div>
                  <h4 className="segment-name">{segment.title}</h4>
                </div>
              ))}
            </div>
            <div className="about-image-wrapper" style={{ marginTop: '3rem', borderRadius: '0px', overflow: 'hidden', border: '1px solid var(--color-accent)' }}>
              <img src={gourmetFoodBowls} alt="Gourmet Food Bowls" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
