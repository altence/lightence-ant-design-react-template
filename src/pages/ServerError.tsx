import React from 'react';
import { useTranslation } from 'react-i18next';
import { Error } from '../components/Error/Error';
import serverError from '../assets/images/server-error.svg';

const ServerError: React.FC = () => {
  const { t } = useTranslation();

  return <Error img={serverError} msg={t('serverError.main')} btnText={t('serverError.tryAgain')} />;
};

export default ServerError;
