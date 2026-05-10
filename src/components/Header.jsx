import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo-link">
          <img src={logo} alt="CR Strategic Consulting" className="logo" />
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#inicio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Início</a>
          <a href="#sobre" className="nav-link" onClick={() => setIsMenuOpen(false)}>A Empresa</a>
          <a href="#valores" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pilares e Valores</a>
          <a href="#contato" className="btn btn-primary nav-btn" onClick={() => setIsMenuOpen(false)}>Fale Conosco</a>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
