import React from 'react';
import './Quote.css';
import { PiPaperPlaneRightThin } from 'react-icons/pi';

const Quote = ({ id = "orcamento" }) => {
  return (
    <section id={id} className="section quote-section">
      <div className="container">
        <div className="quote-box">
          <h2 className="quote-title">Pronto para transformar sua operação?</h2>
          <p className="quote-text">
            Entre em contato e faça um orçamento. Desenvolverei um plano estratégico focado nas necessidades reais do seu negócio.
          </p>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="btn btn-primary quote-btn">
            Fazer Orçamento <PiPaperPlaneRightThin size={24} style={{ marginLeft: '12px' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Quote;
