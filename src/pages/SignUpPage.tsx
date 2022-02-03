import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { SignUpForm } from '@app/components/auth/SignUpForm/SignUpForm';

const SignUpPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.signUp')}</PageTitle>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
