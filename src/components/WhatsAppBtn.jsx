import React from 'react';
import './WhatsAppBtn.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppBtn = () => {
  return (
    <a 
      href="https://wa.me/5500000000000" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float-btn"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppBtn;
