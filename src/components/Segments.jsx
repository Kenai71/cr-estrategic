import React, { useState, useEffect } from 'react';
import './Segments.css';
import { PiForkKnifeThin, PiBuildingsThin, PiBriefcaseThin, PiXThin } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa';

import foodServiceImg from '../assets/food-service.jpeg';
import hospitalidadeImg from '../assets/hospitalidade.jpeg';
import corporativoImg from '../assets/corporativo.png';

const Segments = () => {
  const [activeSegment, setActiveSegment] = useState(null);

  const segments = [
    {
      icon: <PiForkKnifeThin size={48} />,
      title: "Food Service",
      description: "Transformo operações de food service em estruturas mais eficientes, seguras e sustentáveis, com foco em qualidade, experiência e resultado. A consultoria atua de forma estratégica na redução de desperdícios, fortalecimento de processos, desenvolvimento de equipes e melhoria da performance operacional em ambientes hospitalares e corporativos.",
      image: foodServiceImg,
      items: [
        "Redução de desperdícios e otimização de custos",
        "Maior eficiência operacional e produtividade",
        "Fortalecimento da segurança alimentar e qualidade",
        "Padronização de processos e indicadores",
        "Desenvolvimento de equipes mais engajadas e preparadas"
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre a consultoria para Food Service. Podemos conversar?"
    },
    {
      icon: <PiBuildingsThin size={48} />,
      title: "Hospitalidade",
      description: "Promovo experiências mais humanas, acolhedoras e organizadas por meio da hospitalidade estratégica. A atuação integra cuidado, eficiência operacional e experiência do cliente, fortalecendo a percepção de valor, pertencimento e excelência nos serviços.",
      image: hospitalidadeImg,
      items: [
        "Melhoria da experiência de pacientes, clientes e colaboradores",
        "Operações mais organizadas, acolhedoras e eficientes",
        "Fortalecimento da percepção de valor do serviço",
        "Integração entre cuidado, qualidade e atendimento humanizado",
        "Aumento da satisfação e da experiência do cliente"
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre a consultoria para Hospitalidade. Podemos conversar?"
    },
    {
      icon: <PiBriefcaseThin size={48} />,
      title: "Corporativo",
      description: "Atuo no desenvolvimento de operações corporativas mais eficientes, organizadas e sustentáveis, alinhando estratégia, processos e pessoas para gerar produtividade, qualidade e resultados consistentes.",
      image: corporativoImg,
      items: [
        "Estruturação estratégica de processos operacionais",
        "Maior performance e eficiência das equipes",
        "Redução de falhas e melhoria contínua",
        "Desenvolvimento de cultura orientada a resultados",
        "Operações mais sustentáveis, seguras e organizadas"
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre a consultoria Corporativa. Podemos conversar?"
    }
  ];

  const openModal = (index) => {
    setActiveSegment(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveSegment(null);
    document.body.style.overflow = '';
  };

  const handleWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5500000000000?text=${encodedMessage}`, '_blank');
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <section id="segmentos" className="section segments-section">
        <div className="container">
          <div className="text-center segments-header">
            <h2 className="section-title">Quem impulsiono</h2>
            <div className="title-underline mx-auto"></div>
            <p className="segments-subtitle">
              Para todos os tipos de projetos, a CR Strategic Consulting assegura assessoria para implantação.
            </p>
          </div>

          <div className="segments-row">
            {segments.map((segment, index) => (
              <button
                key={index}
                className="segment-btn"
                onClick={() => openModal(index)}
                aria-label={`Saiba mais sobre ${segment.title}`}
              >
                <div className="segment-btn-icon">
                  {segment.icon}
                </div>
                <h4 className="segment-btn-title">{segment.title}</h4>
                <span className="segment-btn-cta">Saiba mais</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {activeSegment !== null && (
        <div className="segment-modal-overlay" onClick={closeModal}>
          <div className="segment-modal split-modal" onClick={(e) => e.stopPropagation()}>
            <button className="segment-modal-close" onClick={closeModal} aria-label="Fechar">
              <PiXThin size={28} />
            </button>

            <div className="segment-modal-image-col">
              <img 
                src={segments[activeSegment].image} 
                alt={segments[activeSegment].title} 
                className={`segment-modal-img ${segments[activeSegment].title === 'Hospitalidade' ? 'hospitalidade-img' : ''}`} 
              />
            </div>

            <div className="segment-modal-content-col">
              <div className="segment-modal-header">
                <div className="segment-modal-icon-small">
                  {segments[activeSegment].icon}
                </div>
                <h3 className="segment-modal-title">{segments[activeSegment].title}</h3>
              </div>

              <p className="segment-modal-description">{segments[activeSegment].description}</p>

              <ul className="segment-modal-list">
                {segments[activeSegment].items.map((item, idx) => (
                  <li key={idx} className="segment-modal-list-item">
                    <span className="segment-modal-bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className="segment-modal-whatsapp"
                onClick={() => handleWhatsApp(segments[activeSegment].whatsappMessage)}
              >
                <FaWhatsapp size={22} />
                <span>Falar no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Segments;
