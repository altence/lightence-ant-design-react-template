import React from 'react';
import { useTranslation } from 'react-i18next';
import { Error } from '../components/Error/Error';
import error500 from '../assets/images/error500.svg';

const Error404: React.FC = () => {
  const { t } = useTranslation();

  return <Error img={error500} msg={t('error500.serverError')} btnText={t('error500.tryAgain')} />;
};

export default Error404;
