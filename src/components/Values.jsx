import React from 'react';
import './Values.css';
import { PiHeartThin, PiStarThin, PiLeafThin, PiShieldCheckThin, PiLightbulbThin, PiChartBarThin, PiSmileyThin } from 'react-icons/pi';

const Values = () => {
  const values = [
    { icon: <PiHeartThin size={36} />, title: "Valorização das Pessoas", text: "Pessoas desenvolvidas fortalecem a cultura e impulsionam resultados." },
    { icon: <PiStarThin size={36} />, title: "Excelência Operacional", text: "Compromisso com eficiência, qualidade e melhoria contínua." },
    { icon: <PiSmileyThin size={36} />, title: "Humanização", text: "Respeito, empatia e cuidado como base na construção de ambientes." },
    { icon: <PiLeafThin size={36} />, title: "Sustentabilidade", text: "Desenvolvimento de soluções responsáveis para o crescimento." },
    { icon: <PiShieldCheckThin size={36} />, title: "Ética e Transparência", text: "Atuação pautada pela integridade, responsabilidade e confiança." },
    { icon: <PiLightbulbThin size={36} />, title: "Inovação Estratégica", text: "Soluções inteligentes para transformar desafios em oportunidades." },
    { icon: <PiChartBarThin size={36} />, title: "Compromisso com Resultados", text: "Foco em resultados sólidos e desenvolvimento contínuo." }
  ];

  return (
    <section id="valores" className="section values-section">
      <div className="container">
        
        <div className="mv-grid">
          <div className="mv-card mission-card">
            <h3 className="mv-title">Nossa Missão</h3>
            <p className="mv-text">
              Promover transformação sustentável nas organizações através de estratégias inteligentes, desenvolvimento humano e excelência operacional, gerando resultados consistentes, fortalecimento das equipes e crescimento estruturado.
            </p>
          </div>
          <div className="mv-card vision-card">
            <h3 className="mv-title">Nossa Visão</h3>
            <p className="mv-text">
              Ser referência em consultoria estratégica e gestão humanizada, contribuindo para operações mais eficientes, equipes mais fortalecidas e resultados sustentáveis.
            </p>
          </div>
        </div>

        <div className="text-center values-header">
          <h2 className="section-title">Nossos Valores</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="values-grid">
          {values.map((val, index) => (
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
