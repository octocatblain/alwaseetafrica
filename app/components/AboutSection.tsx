'use client';

import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="about-strip" id="about">
      <div className="about-grid">
        <div className="about-text">
          <div className="section-eyebrow">{t('about.eyebrow')}</div>
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="gold-rule"></div>
          <div style={{ marginBottom: '1.5rem', padding: '1rem', borderLeft: '3px solid var(--lime)', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--lime)', margin: '0 0 0.5rem 0' }}>{t('about.mottoLabel')}</p>
            <p style={{ margin: '0', fontSize: '1.1rem', color: 'var(--text)' }}>{t('contact.motto')}</p>
          </div>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <div style={{ marginTop: '1.5rem', padding: '1rem', borderLeft: '3px solid var(--gold)', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--gold)', margin: '0 0 0.5rem 0' }}>{t('about.visionLabel')}</p>
            <p style={{ margin: '0', fontSize: '0.95rem', color: 'var(--text)' }}>
              {t('about.vision')}
            </p>
          </div>
        </div>
        <div className="pillars">
          <div className="pillar">
            <div className="pillar-icon">◊</div>
            <h4>{t('about.pillar1Title')}</h4>
            <p>{t('about.pillar1Desc')}</p>
          </div>
          <div className="pillar">
            <div className="pillar-icon">◊</div>
            <h4>{t('about.pillar2Title')}</h4>
            <p>{t('about.pillar2Desc')}</p>
          </div>
          <div className="pillar">
            <div className="pillar-icon">◊</div>
            <h4>{t('about.pillar3Title')}</h4>
            <p>{t('about.pillar3Desc')}</p>
          </div>
          <div className="pillar">
            <div className="pillar-icon">◊</div>
            <h4>{t('about.pillar4Title')}</h4>
            <p>{t('about.pillar4Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
