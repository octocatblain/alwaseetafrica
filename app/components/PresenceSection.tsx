'use client';

import { useTranslation } from 'react-i18next';

export default function PresenceSection() {
  const { t } = useTranslation();

  const regions = [
    { titleKey: 'eastAfrica', countriesKey: 'eastAfricaCountries' },
    { titleKey: 'westAfrica', countriesKey: 'westAfricaCountries' },
    { titleKey: 'centralAfrica', countriesKey: 'centralAfricaCountries' },
    { titleKey: 'southernAfrica', countriesKey: 'southernAfricaCountries' },
  ];

  return (
    <section className="presence-section" id="presence">
      <div>
        <div className="section-eyebrow">{t('presence.eyebrow')}</div>
        <h2 className="section-title">{t('presence.title')}</h2>
        <div className="gold-rule"></div>

        <div className="regions-grid">
          {regions.map((region, index) => (
            <div key={index} className="region-card">
              <h4>{t(`presence.${region.titleKey}`)}</h4>
              <ul>
                {t(`presence.${region.countriesKey}`).split(', ').map((country, i) => (
                  <li key={i}>{country}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
