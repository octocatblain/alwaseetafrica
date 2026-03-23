'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function LegalPage() {
  const { t } = useTranslation();

  return (
    <main>
      <Header />
      <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--lime)' }}>
            {t('pages.legal.title')}
          </h1>
          
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '2rem' }}>
            {t('pages.legal.lastUpdated')}
          </p>

          <div style={{ lineHeight: '1.8', color: 'var(--text)' }}>
            <p style={{ marginBottom: '2rem' }}>
              {t('pages.legal.intro')}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--gold)', borderBottom: '2px solid var(--lime)', paddingBottom: '0.5rem' }}>
                {t('pages.legal.section1Title')}
              </h2>
              <p>{t('pages.legal.section1Content')}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--gold)', borderBottom: '2px solid var(--lime)', paddingBottom: '0.5rem' }}>
                {t('pages.legal.section2Title')}
              </h2>
              <p>{t('pages.legal.section2Content')}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--gold)', borderBottom: '2px solid var(--lime)', paddingBottom: '0.5rem' }}>
                {t('pages.legal.section3Title')}
              </h2>
              <p>{t('pages.legal.section3Content')}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--gold)', borderBottom: '2px solid var(--lime)', paddingBottom: '0.5rem' }}>
                {t('pages.legal.section4Title')}
              </h2>
              <p>{t('pages.legal.section4Content')}</p>
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--lime)', borderRadius: '4px' }}>
              <p style={{ fontSize: '0.95rem', margin: '0' }}>
                {t('contact.email')}: hello@alwaseetafrica.com
              </p>
              <p style={{ fontSize: '0.95rem', margin: '0.5rem 0 0 0' }}>
                {t('contact.phone')}: {t('contact.phone')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
