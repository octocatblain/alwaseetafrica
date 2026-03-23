'use client';

import { useTranslation } from 'react-i18next';

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    { numKey: 'service1Num', titleKey: 'service1Title', descKey: 'service1Desc' },
    { numKey: 'service2Num', titleKey: 'service2Title', descKey: 'service2Desc' },
    { numKey: 'service3Num', titleKey: 'service3Title', descKey: 'service3Desc' },
    { numKey: 'service4Num', titleKey: 'service4Title', descKey: 'service4Desc' },
    { numKey: 'service5Num', titleKey: 'service5Title', descKey: 'service5Desc' },
    { numKey: 'service6Num', titleKey: 'service6Title', descKey: 'service6Desc' },
    { numKey: 'service7Num', titleKey: 'service7Title', descKey: 'service7Desc' },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-intro">
        <div>
          <div className="section-eyebrow">{t('services.eyebrow')}</div>
          <h2 className="section-title">
            {t('services.titlePrefix')}
            <em>{t('services.titleEm')}</em>
            {t('services.titleSuffix')}
          </h2>
          <div className="gold-rule"></div>
        </div>
        <p className="section-desc" style={{ paddingTop: '0.5rem' }}>
          {t('services.subtitle')}
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const tagKeys = ['service1', 'service2', 'service3', 'service4', 'service5', 'service6', 'service7'];
          const rawTagString = t(`services.tags.${tagKeys[index]}`);
          const tags = rawTagString.split(',').map(s => s.trim()).filter(Boolean);

          return (
          <div key={index} className="service-card">
            <div className="service-num">{t(`services.${service.numKey}`)}</div>
            <h3>{t(`services.${service.titleKey}`)}</h3>
            <p>{t(`services.${service.descKey}`)}</p>
            <div className="service-tags">
              {tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
