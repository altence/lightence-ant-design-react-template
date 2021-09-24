import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = (): string => {
  const localLanguage = localStorage.getItem('lng');

  const [language, setLanguage] = useState(localLanguage || 'en');

  const { i18n } = useTranslation();

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return language;
};
