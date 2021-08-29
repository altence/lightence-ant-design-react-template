import React from 'react';
import { useTranslation } from 'react-i18next';
import { Error } from '../components/Error/Error';
import MainLayout from '../components/layouts/MainLayout';
import error500 from '../assets/images/error500.svg';

const Error404: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Error img={error500} msg={t('error500.serverError')} btnText={t('error500.tryAgain')} />
    </MainLayout>
  );
};

export default Error404;
