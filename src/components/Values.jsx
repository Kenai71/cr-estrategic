import React from 'react';
import './Values.css';
import { PiHeartThin, PiStarThin, PiLeafThin, PiShieldCheckThin, PiLightbulbThin, PiChartBarThin, PiSmileyThin, PiCheckCircleThin, PiPaperPlaneRightThin } from 'react-icons/pi';
import businessHandshake from '../assets/business_handshake.png';
import strategicVision from '../assets/strategic_vision.png';
import chefPlatingGourmet from '../assets/chef_plating_gourmet.png';

const Values = () => {
  const coreValuesList = [
    "Valorização das Pessoas",
    "Excelência Operacional",
    "Humanização",
    "Sustentabilidade",
    "Ética e Transparência",
    "Inovação Estratégica",
    "Compromisso com Resultados"
  ];

  const detailedValues = [
    { icon: <PiHeartThin size={36} />, title: "Valorização das Pessoas", text: "Pessoas desenvolvidas fortalecem a cultura e impulsionam resultados." },
    { icon: <PiStarThin size={36} />, title: "Excelência Operacional", text: "Compromisso com eficiência, qualidade e melhoria contínua." },
    { icon: <PiSmileyThin size={36} />, title: "Humanização", text: "Respeito, empatia e cuidado como base na construção de ambientes." },
    { icon: <PiLeafThin size={36} />, title: "Sustentabilidade", text: "Desenvolvimento de soluções responsáveis para o crescimento." },
    { icon: <PiShieldCheckThin size={36} />, title: "Ética e Transparência", text: "Atuação pautada pela integridade, responsabilidade e confiança." },
    { icon: <PiLightbulbThin size={36} />, title: "Inovação Estratégica", text: "Soluções inteligentes para transformar desafios em oportunidades." },
    { icon: <PiChartBarThin size={36} />, title: "Compromisso com Resultados", text: "Foco em resultados e melhoria contínua." }
  ];

  return (
    <section id="valores" className="section values-section">
      <div className="container">
        
        {/* Top Premium 3-Column Banner Structure (Inspired by Reference Images) */}
        <div className="premium-mvv-grid">
          
          {/* Missão Card */}
          <div className="premium-card">
            <div className="premium-card-header">
              <h3>Missão</h3>
            </div>
            <div className="premium-card-image">
              <img src={businessHandshake} alt="Missão Estratégica" />
            </div>
            <div className="premium-card-body">
              <p className="premium-card-text">
                Promover transformação sustentável nas organizações através de estratégias inteligentes, desenvolvimento humano e excelência operacional, gerando resultados consistentes, fortalecimento das equipes e crescimento estruturado.
              </p>
            </div>
          </div>

          {/* Visão Card */}
          <div className="premium-card">
            <div className="premium-card-header">
              <h3>Visão</h3>
            </div>
            <div className="premium-card-image">
              <img src={strategicVision} alt="Visão de Futuro" />
            </div>
            <div className="premium-card-body">
              <p className="premium-card-text">
                Ser referência em consultoria estratégica e gestão humanizada, contribuindo para operações mais eficientes, equipes mais fortalecidas e resultados sustentáveis.
              </p>
            </div>
          </div>

          {/* Valores Card */}
          <div className="premium-card">
            <div className="premium-card-header">
              <h3>Valores</h3>
            </div>
            <div className="premium-card-image">
              <img src={chefPlatingGourmet} alt="Valores Essenciais" />
            </div>
            <div className="premium-card-body">
              <ul className="premium-values-checklist">
                {coreValuesList.map((item, idx) => (
                  <li key={idx} className="premium-checklist-item">
                    <PiCheckCircleThin size={22} className="checklist-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Section Title for Detailed Pillars */}
        <div className="text-center values-header" style={{ marginTop: '7rem' }}>
          <h2 className="section-title">Pilares de Atuação</h2>
          <div className="title-underline mx-auto"></div>
          <p className="values-subtitle" style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Soluções estratégicas fundamentais para impulsionar o padrão de excelência e rentabilidade da sua operação.
          </p>
        </div>

        {/* Standardized Circular Icons Grid */}
        <div className="values-grid">
          {detailedValues.map((val, index) => (
            <div key={index} className="value-item">
              <div className="value-icon">{val.icon}</div>
              <h4 className="value-title">{val.title}</h4>
              <p className="value-text">{val.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Values;
