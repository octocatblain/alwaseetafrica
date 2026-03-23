'use client';

import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-eyebrow">{t('hero.eyebrow')}</div>
        <h1>
          {t('hero.titlePrefix')}
          <em>{t('hero.titleEm')}</em>
          {t('hero.titleSuffix')}
          <div className="
"></div>        </h1>
        <p className="hero-sub">{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">
            {t('hero.cta1')}
          </a>
          <a href="#about" className="btn-outline">
            {t('hero.cta2')}
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">{t('hero.stat1Num')}</div>
            <div className="stat-label">{t('hero.stat1Label')}</div>
          </div>
          <div>
            <div className="stat-num">{t('hero.stat2Num')}</div>
            <div className="stat-label">{t('hero.stat2Label')}</div>
          </div>
          <div>
            <div className="stat-num">{t('hero.stat3Num')}</div>
            <div className="stat-label">{t('hero.stat3Label')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
