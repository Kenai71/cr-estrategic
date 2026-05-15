import React from 'react';
import './About.css';
import camilaPhoto from '../assets/foto-inicial.png';

const About = () => {
  return (
    <section id="sobre" className="section about-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-photo-side">
            <div className="about-photo-wrapper">
              <img src={camilaPhoto} alt="Camila Rocha de Oliveira" className="about-photo" />
              <div className="about-photo-accent"></div>
            </div>
            <p className="about-author-name">Camila Rocha de Oliveira</p>
          </div>

          <div className="about-content">
            <h2 className="section-title">A Empresa</h2>
            <div className="title-underline"></div>

            <p className="about-description highlight-text">
              A CR Strategic Consulting nasce do meu propósito de transformar operações de alimentação hospitalar e corporativa de forma humanizada, sustentável e conectada à experiência das pessoas.
            </p>

            <p className="about-description">
              Ao longo da minha trajetória, desenvolvi uma atuação focada em excelência operacional, segurança alimentar, melhoria contínua e desenvolvimento de equipes de alta performance.
            </p>

            <p className="about-description">
              Com mais de 20 anos de experiência no setor, atuo apoiando instituições na construção de operações mais eficientes, acolhedoras e sustentáveis, sempre com foco em resultados consistentes e valorização humana.
            </p>

            <p className="about-description">
              Mais do que processos, entrego cultura, pertencimento, desenvolvimento e experiências que fortalecem pessoas e organizações.
            </p>

            <p className="about-description about-purpose">
              Porque resultados sustentáveis acontecem quando existe propósito em cada entrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
