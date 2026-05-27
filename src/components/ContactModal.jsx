import React, { useState, useEffect } from 'react';
import './ContactModal.css';
import { PiXThin, PiPaperPlaneRightThin, PiCheckCircleThin } from 'react-icons/pi';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    empresa: '',
    cargo: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, telefone: formatted }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Nova mensagem padrão para o WhatsApp
    const message = "Olá, me informa mais sobre.";
    const encodedMessage = encodeURIComponent(message);

    // URL do Google Apps Script
    const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOPQ8CobtrmoDhrYoAyGfVIH1nmmUqOB4HfPy5ZVuGM3ZfJQsMnk6uBSXHzmo6NkwU/exec';

    // Preparar dados para enviar para a planilha no formato suportado pelo Google Scripts
    const submitData = new URLSearchParams();
    submitData.append('Nome completo', formData.nome);
    submitData.append('Telefone', formData.telefone);
    submitData.append('E-mail', formData.email);
    submitData.append('Empresa', formData.empresa);
    submitData.append('Cargo', formData.cargo);
    submitData.append('Mensagem', formData.mensagem);
    submitData.append('Data', new Date().toLocaleString('pt-BR'));

    try {
      // Enviar os dados apenas se a URL foi configurada
      if (GOOGLE_SHEETS_SCRIPT_URL !== 'COLE_AQUI_A_URL_DO_SEU_WEB_APP') {
        await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: 'POST',
          body: submitData,
          mode: 'no-cors', // Necessário para não bloquear requisições do navegador
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
      }
    } catch (error) {
      console.error('Erro ao salvar na planilha do Google:', error);
    }

    // Short delay for UX
    await new Promise(resolve => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Open WhatsApp after a brief moment
    setTimeout(() => {
      window.open(`https://wa.me/5511994858033?text=${encodedMessage}`, '_blank');
    }, 1200);

    // Reset after closing
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        empresa: '',
        cargo: '',
        mensagem: ''
      });
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Fechar">
          <PiXThin size={28} />
        </button>

        {isSuccess ? (
          <div className="contact-modal-success">
            <div className="success-icon">
              <PiCheckCircleThin size={64} />
            </div>
            <h3>Mensagem enviada!</h3>
            <p>Redirecionando para o WhatsApp...</p>
          </div>
        ) : (
          <>
            <div className="contact-modal-header">
              <h3 className="contact-modal-title">Entre em contato</h3>
              <p className="contact-modal-subtitle">
                Preencha os dados abaixo e entrarei em contato com você.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-nome">Nome completo *</label>
                <input
                  type="text"
                  id="contact-nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-telefone">Telefone *</label>
                  <input
                    type="tel"
                    id="contact-telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    required
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">E-mail *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-empresa">Empresa *</label>
                  <input
                    type="text"
                    id="contact-empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    placeholder="Nome da empresa"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-cargo">Cargo *</label>
                  <input
                    type="text"
                    id="contact-cargo"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    required
                    placeholder="Seu cargo"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-mensagem">Sua mensagem (opcional)</label>
                <textarea
                  id="contact-mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva brevemente sua necessidade..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="contact-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="submit-loading">Enviando...</span>
                ) : (
                  <>
                    <span>Enviar Solicitação</span>
                    <PiPaperPlaneRightThin size={22} />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
