'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ScrollToTop() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: 'var(--lime)',
        color: '#000000',
        border: '2px solid var(--gold)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(50, 205, 50, 0.4)',
        zIndex: 999,
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      title={t('contact.scrollToTop')}
    >
      ↑
    </button>
  );
}
