'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Counter = ({ value, duration = 2000 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  
  // Extract only the first group of digits for the animation
  const match = value.match(/(\d+)(.*)/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (target === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const end = target;
    const incrementTime = Math.max(duration / end, 16); // Cap at 60fps approx

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

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
          {t('hero.titlePrefix')}{' '}
          <em>{t('hero.titleEm')}</em>{' '}
          {t('hero.titleLine2')} {t('hero.titleLine3')}
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
            <div className="stat-num">
              <Counter value={t('hero.stat1Num')} />
            </div>
            <div className="stat-label">{t('hero.stat1Label')}</div>
          </div>
          <div>
            <div className="stat-num">
              <Counter value={t('hero.stat2Num')} />
            </div>
            <div className="stat-label">{t('hero.stat2Label')}</div>
          </div>
          <div>
            <div className="stat-num">
              <Counter value={t('hero.stat3Num')} />
            </div>
            <div className="stat-label">{t('hero.stat3Label')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
