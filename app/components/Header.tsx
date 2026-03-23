'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/app/context/LanguageContext';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const logo = t('nav.logo');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'presence', href: '#presence' },
    { key: 'why', href: '#why' },
    { key: 'contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <nav className="nav" suppressHydrationWarning>
      <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/logos/alwaseet_logo.png"
          alt={logo}
          width={200}
          height={48}
          priority
          style={{ height: '38px', width: 'auto' }}
        />
      </a>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.key}>
            <a href={item.href} onClick={(e) => {
              e.preventDefault();
              handleScroll(item.href);
            }}>
              {t(`nav.${item.key}`)}
            </a>
          </li>
        ))}
      </ul>

      {/* Language Switcher and CTA */}
      {isClient && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="language-switcher">
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              {t('nav.lang.en')}
            </button>
            <button
              className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('ar')}
            >
              {t('nav.lang.ar')}
            </button>
          </div>
          <a href="#contact" className="nav-cta">
            {t('nav.engage')}
          </a>
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text)',
        }}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isClient && mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-primary)',
          borderBottom: '0.5px solid var(--border)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              style={{
                color: 'var(--text-dim)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.2s'
              }}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
