'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function I18nInitializer() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return null;
}
