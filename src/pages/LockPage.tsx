import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { LockForm } from '@app/components/auth/LockForm/LockForm';

const LockPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.lock')}</PageTitle>
      <LockForm />
    </>
  );
};

export default LockPage;
