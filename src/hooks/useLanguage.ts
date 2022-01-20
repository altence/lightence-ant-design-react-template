import { Dates } from '@app/constants/Dates';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const localLanguage = localStorage.getItem('lng');

export const useLanguage = (): { language: string; setLanguage: (locale: string) => Promise<void> } => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(localLanguage || 'en');

  const handleChangeLanguage = useCallback(
    async (locale: string) => {
      Dates.setLocale(locale);
      setLanguage(locale);
      localStorage.setItem('lng', locale);
      await i18n.changeLanguage(locale);
    },
    [i18n],
  );

  useEffect(() => {
    localLanguage && handleChangeLanguage(localLanguage);
  }, [handleChangeLanguage]);

  return useMemo(() => ({ language, setLanguage: handleChangeLanguage }), [handleChangeLanguage, language]);
};
