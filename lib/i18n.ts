import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '@/public/locales/en.json';
import arTranslations from '@/public/locales/ar.json';

const resources = {
  en: { translation: enTranslations },
  ar: { translation: arTranslations },
};

// Initialize i18n only once
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
