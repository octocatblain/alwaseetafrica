'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <main>
      <Header />
      <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--lime)' }}>
            {t('pages.privacy.title')}
          </h1>
          
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '2rem' }}>
            {t('pages.privacy.lastUpdated')}
          </p>

          <div style={{ lineHeight: '1.8', color: 'var(--text)' }}>
            <p style={{ marginBottom: '2rem' }}>
              {t('pages.privacy.intro')}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--gold)', borderBottom: '2px solid var(--lime)', paddingBottom: '0.5rem' }}>
                {t('pages.privacy.section1Title')}
              </h2>
              <p>{t('pages.privacy.section1Content')}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--gold)', borderBottom: '2px solid var(--lime)', paddingBottom: '0.5rem' }}>
                {t('pages.privacy.section2Title')}
              </h2>
              <p>{t('pages.privacy.section2Content')}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--gold)', borderBottom: '2px solid var(--lime)', paddingBottom: '0.5rem' }}>
                {t('pages.privacy.section3Title')}
              </h2>
              <p>{t('pages.privacy.section3Content')}</p>
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--lime)', borderRadius: '4px' }}>
              <p style={{ fontSize: '0.95rem', margin: '0' }}>
                {t('pages.privacy.intro')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
