import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { Payments } from '@app/components/profile/profileCard/profileFormNav/nav/payments/Payments';

const PaymentsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('profile.nav.payments.title')}</PageTitle>
      <Payments />
    </>
  );
};

export default PaymentsPage;
