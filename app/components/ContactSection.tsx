'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Declare reCAPTCHA on the window object for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      getResponse: () => string;
      reset: () => void;
    };
  }
}

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [website, setWebsite] = useState(''); // Honeypot field

  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    // Load reCAPTCHA script if site key is configured
    if (RECAPTCHA_SITE_KEY) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [RECAPTCHA_SITE_KEY]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Honeypot Check
    if (website) {
      // Silently fail for bots
      console.warn('Honeypot caught a submission.');
      setLoading(false);
      return;
    }

    // 2. reCAPTCHA Verification (Client-side check)
    if (RECAPTCHA_SITE_KEY) {
      const response = window.grecaptcha ? window.grecaptcha.getResponse() : '';
      if (!response) {
        setError(t('contact.errorRecaptcha'));
        setLoading(false);
        return;
      }
    }

    // Since we are using WhatsApp redirection, we'll just format the message
    const waMessage = `*New Inquiry from Alwaseet Africa website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A%0A*Message:*%0A${formData.message}`;
    
    // The WhatsApp number for inquiries
    const phoneNumber = '233596030999';
    const waUrl = `https://wa.me/${phoneNumber}?text=${waMessage}`;

    // Small delay to simulate processing and give feedback
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setLoading(false);
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      if (RECAPTCHA_SITE_KEY && window.grecaptcha) window.grecaptcha.reset();
    }, 800);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-eyebrow">{t('contact.eyebrow')}</div>
      <h2 className="section-title">
        {t('contact.titleRow1')} <em>{t('contact.titleRow2')}</em>
      </h2>
      <p className="section-desc">{t('contact.subtitle')}</p>

      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-item-label">{t('contact.phoneLabel')}</div>
          <div className="contact-item-val">{t('contact.phone')}</div>
        </div>
        <div className="contact-item">
          <div className="contact-item-label">{t('contact.emailLabel')}</div>
          <div className="contact-item-val">{t('contact.email')}</div>
        </div>
        <div className="contact-item">
          <div className="contact-item-label">{t('contact.officesLabel')}</div>
          <div className="contact-item-val">{t('contact.offices')}</div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmitWhatsApp}>
        {error && (
          <div role="alert" style={{ 
            marginBottom: '1.5rem', 
            padding: '1rem 1.2rem', 
            border: '1px solid var(--border)', 
            borderLeft: '4px solid var(--gold)', 
            background: 'var(--bg-card)', 
            color: 'var(--text)', 
            fontSize: '0.92rem',
            textAlign: 'left'
          }}>
            {error}
          </div>
        )}

        {/* Honeypot field: should remain empty. */}
        <div style={{ display: 'none' }}>
          <label>
            <span style={{ position: 'absolute', left: '-9999px' }}>website</span>
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="name">{t('contact.formName')}</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t('contact.formNamePlaceholder')}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t('contact.formEmail')}</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t('contact.formEmailPlaceholder')}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">{t('contact.formPhone')}</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 000-0000"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t('contact.formMessage')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t('contact.formMessagePlaceholder')}
            rows={5}
            required
          />
        </div>

        {RECAPTCHA_SITE_KEY ? (
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <div className="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY} />
          </div>
        ) : null}

        <button type="submit" disabled={loading}>
          {loading ? t('contact.formSubmitting') : t('contact.formSubmit')}
        </button>
      </form>
    </section>
  );
}
