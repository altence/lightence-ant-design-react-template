import React from 'react';
import { NewPasswordForm } from '@app/components/auth/NewPasswordForm/NewPasswordForm';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const NewPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.newPassword')}</PageTitle>
      <NewPasswordForm />
    </>
  );
};

export default NewPasswordPage;
