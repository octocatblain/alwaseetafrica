'use client';

import { useTranslation } from 'react-i18next';

export default function WhySection() {
  const { t } = useTranslation();

  return (
    <section className="why-section" id="why">
      <div className="why-grid">
        <div>
          <div className="section-eyebrow">{t('why.eyebrow')}</div>
          <h2 className="section-title">{t('why.title')}</h2>
          <div className="gold-rule"></div>

          <div className="why-list">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="why-item">
                <div className="why-num">{num}</div>
                <div>
                  <h4>{t(`why.reason${num}Title`)}</h4>
                  <p>{t(`why.reason${num}Desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quote-block">
          <blockquote>{t('why.quote')}</blockquote>
          <cite>{t('why.quoteAuthor')}</cite>
        </div>
      </div>
    </section>
  );
}
