import React from 'react';
import { useTranslation } from 'react-i18next';
import { Error } from '../components/Error/Error';
import error404 from '../assets/images/error404.svg';

const Error404Page: React.FC = () => {
  const { t } = useTranslation();

  return <Error img={error404} msg={t('error404.notFound')} />;
};

export default Error404Page;
