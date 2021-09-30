import { Card } from 'components/common/Card/Card';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../../ProfileForm/ProfileForm.styles';
import { PaymentHistory } from './PaymentHistory/PaymentHistory';

export const Payments: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Card style={{ marginBottom: '10rem' }}>
        <S.Title>{t('profile.nav.payments.paymentMethod')}</S.Title>
      </Card>
      <PaymentHistory />
    </>
  );
};
