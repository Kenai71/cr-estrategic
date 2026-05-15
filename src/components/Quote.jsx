import React from 'react';
import './Quote.css';
import { PiPaperPlaneRightThin } from 'react-icons/pi';

const Quote = ({ id = "orcamento", onContactClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onContactClick) onContactClick();
  };

  return (
    <section id={id} className="section quote-section">
      <div className="container">
        <div className="quote-box">
          <h2 className="quote-title">Pronto para transformar sua operação?</h2>
          <p className="quote-text">
            Entre em contato e faça um orçamento. Desenvolverei um plano estratégico focado nas necessidades reais do seu negócio.
          </p>
          <button className="btn btn-primary quote-btn" onClick={handleClick}>
            Fazer Orçamento <PiPaperPlaneRightThin size={24} style={{ marginLeft: '12px' }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quote;
