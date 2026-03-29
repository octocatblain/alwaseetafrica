'use client';

import { useTranslation } from 'react-i18next';
import { MapPin, Globe } from 'lucide-react';

export default function PresenceSection() {
  const { t } = useTranslation();

  const regions = [
    { titleKey: 'northAfrica', countriesKey: 'northAfricaCountries' },
    { titleKey: 'eastAfrica', countriesKey: 'eastAfricaCountries' },
    { titleKey: 'westAfrica', countriesKey: 'westAfricaCountries' },
    { titleKey: 'centralAfrica', countriesKey: 'centralAfricaCountries' },
    { titleKey: 'southernAfrica', countriesKey: 'southernAfricaCountries' },
  ];

  return (
    <section className="presence-section" id="presence">
      <div className="presence-wrapper">
        <div className="presence-intro">
          <div className="section-eyebrow">{t('presence.eyebrow')}</div>
          <h2 className="section-title">{t('presence.title')}</h2>
          <div className="gold-rule"></div>
          <div className="presence-watermark">
            <Globe strokeWidth={0.5} />
          </div>
        </div>

        <div className="regions-grid">
          {regions.map((region, index) => {
            const isLastOdd = index === regions.length - 1 && regions.length % 2 !== 0;
            return (
              <div 
                key={index} 
                className={`region-card ${isLastOdd ? 'region-span-2' : ''}`}
                style={isLastOdd ? { gridColumn: '1 / -1' } : {}}
              >
                <div className="region-icon-wrapper">
                  <MapPin className="region-icon" size={24} />
                </div>
                <h4>{t(`presence.${region.titleKey}`)}</h4>
                <ul>
                  {t(`presence.${region.countriesKey}`).split('،').join(',').split(',').map((country, i) => (
                    <li key={i}>{country.trim()}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
