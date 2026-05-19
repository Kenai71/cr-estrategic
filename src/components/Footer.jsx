import React from 'react';
import './Footer.css';

import { FaInstagram } from 'react-icons/fa';
import { PiEnvelopeThin, PiPhoneThin, PiMapPinThin } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">

          <p className="footer-slogan">
            Estratégia que transforma. Resultado que permanece.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><FaInstagram size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Navegação</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">A Empresa</a></li>
            <li><a href="#valores">Valores</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Contato</h4>
          <ul className="contact-list">
            <li>
              <PiPhoneThin size={22} className="contact-icon" />
              <span>+55 11 99485-8033</span>
            </li>
            <li>
              <PiEnvelopeThin size={22} className="contact-icon" />
              <span>camilarocr11@outlook.com</span>
            </li>
            <li>
              <PiMapPinThin size={22} className="contact-icon" />
              <span>Atendimento Nacional</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CR Strategic Consulting. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
