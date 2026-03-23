'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

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

        <div>
          <div className="quote-block">
            <blockquote>{t('why.quote')}</blockquote>
            <cite>{t('why.quoteAuthor')}</cite>
          </div>
          
          <div className="why-images">
            <div className="why-img-wrapper">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop" 
                alt="Strategic Planning"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="why-img-wrapper">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" 
                alt="Professional Collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="why-img-wrapper">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop" 
                alt="Market Analysis"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
