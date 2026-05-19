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

    // Build WhatsApp message with form data
    const message = `*Nova solicitação de orçamento*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Empresa:* ${formData.empresa}\n` +
      `*Cargo:* ${formData.cargo}\n` +
      (formData.mensagem ? `*Mensagem:* ${formData.mensagem}\n` : '');

    const encodedMessage = encodeURIComponent(message);

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
