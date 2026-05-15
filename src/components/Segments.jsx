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
      items: [
        "Experiência em operações complexas no território brasileiro",
        "Atuação estratégica com foco em eficiência e qualidade",
        "Desenvolvimento de equipes para resultados sustentáveis",
        "Operações mais organizadas, seguras e eficientes"
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre a consultoria para Food Service. Podemos conversar?"
    },
    {
      icon: <PiBuildingsThin size={48} />,
      title: "Hospitalidade",
      items: [
        "Integração entre hospitalidade, operação e assistência",
        "Fortalecimento da percepção institucional do serviço",
        "Desenvolvimento humano alinhado à performance",
        "Cultura operacional mais engajada e sustentável"
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre a consultoria para Hospitalidade. Podemos conversar?"
    },
    {
      icon: <PiBriefcaseThin size={48} />,
      title: "Corporativo",
      items: [
        "Estratégias orientadas a resultados mensuráveis",
        "Desenvolvimento de cultura operacional sustentável",
        "Fortalecimento de liderança e engajamento",
        "Estruturação de operações mais eficientes e organizadas"
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
      )}
    </>
  );
};

export default Segments;
