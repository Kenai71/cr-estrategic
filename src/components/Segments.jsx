import React, { useState, useEffect } from 'react';
import './Segments.css';
import { PiForkKnifeThin, PiBuildingsThin, PiBriefcaseThin, PiXThin } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa';

const Segments = () => {
  const [activeSegment, setActiveSegment] = useState(null);

  const segments = [
    {
      icon: <PiForkKnifeThin size={48} />,
      title: "Food Service",
      description: "Consultoria estratégica para restaurantes, redes de alimentação, cozinhas industriais, catering e operações de food service. Atuo na otimização de processos operacionais, redução de desperdícios, padronização de receitas, gestão de custos, treinamento de equipes e implementação de boas práticas para elevar a qualidade e a rentabilidade do seu negócio.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a consultoria para Food Service. Podemos conversar?"
    },
    {
      icon: <PiBuildingsThin size={48} />,
      title: "Hospitalidade",
      description: "Soluções completas para hotéis, pousadas, resorts e empreendimentos de hospitalidade. Trabalho com foco na excelência do atendimento, gestão operacional integrada, desenvolvimento de equipes, padronização de processos e criação de experiências memoráveis para seus hóspedes, fortalecendo a reputação e os resultados do seu negócio.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre a consultoria para Hospitalidade. Podemos conversar?"
    },
    {
      icon: <PiBriefcaseThin size={48} />,
      title: "Corporativo",
      description: "Consultoria para empresas que buscam aprimorar sua gestão, fortalecer equipes e alcançar resultados consistentes. Atuo em planejamento estratégico, desenvolvimento de lideranças, cultura organizacional, eficiência operacional e processos de melhoria contínua, ajudando sua empresa a crescer de forma estruturada e sustentável.",
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
            <h2 className="section-title">Segmentos de Atuação</h2>
            <div className="title-underline mx-auto"></div>
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
          <div className="segment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="segment-modal-close" onClick={closeModal} aria-label="Fechar">
              <PiXThin size={28} />
            </button>

            <div className="segment-modal-icon">
              {segments[activeSegment].icon}
            </div>

            <h3 className="segment-modal-title">{segments[activeSegment].title}</h3>

            <p className="segment-modal-text">
              {segments[activeSegment].description}
            </p>

            <button
              className="segment-modal-whatsapp"
              onClick={() => handleWhatsApp(segments[activeSegment].whatsappMessage)}
            >
              <FaWhatsapp size={22} />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Segments;
