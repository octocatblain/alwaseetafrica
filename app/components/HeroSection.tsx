'use client';

import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      {/* Video Background with overlay */}
      <div className="hero-video-bg">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow fade-in-up">{t('hero.eyebrow')}</div>
        
        <h1 className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="hero-title-row">
            {t('hero.titlePrefix')}
            <em>{t('hero.titleEm')}</em>
          </span>
          <span className="hero-title-row">{t('hero.titleLine2')}</span>
          <span className="hero-title-row">{t('hero.titleLine3')}</span>
        </h1>

        <p className="hero-sub fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>

        <div className="hero-actions fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#services" className="btn-primary">
            {t('hero.cta1')}
          </a>
          <a href="#about" className="btn-outline">
            {t('hero.cta2')}
          </a>
        </div>

        <div className="hero-stats fade-in-up" style={{ animationDelay: '0.4s' }}>
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
