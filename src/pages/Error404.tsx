import React from 'react';
import { useTranslation } from 'react-i18next';
import { Error } from '../components/Error/Error';
import MainLayout from '../components/layouts/MainLayout';
import error404 from '../assets/images/error404.svg';

const Error404: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Error img={error404} msg={t('error404.notFound')} />
    </MainLayout>
  );
};

export default Error404;
