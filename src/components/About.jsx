import React from 'react';
import './About.css';
import { PiTrendUpThin, PiUsersThin, PiTargetThin } from 'react-icons/pi';

const About = () => {
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
        <div className="about-content">
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
      </div>
    </section>
  );
};

export default About;
