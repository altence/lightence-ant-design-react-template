import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Payment } from './Payment/Payment';
import { getPaymentHistory, Payment as IPayment } from 'api/paymentHistory.api';
import { Card } from 'components/common/Card/Card';
import { Title } from '../../../ProfileForm/ProfileForm.styles';
import * as S from './PaymentHistory.styles';

export const PaymentHistory: React.FC = () => {
  const [history, setHistory] = useState<IPayment[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    getPaymentHistory().then((res) => setHistory(res));
  });

  return (
    <Card padding="1.75rem 0 0 0">
      <S.TitleWrapper>
        <Title>{t('profile.nav.payments.paymentHistory')}</Title>
      </S.TitleWrapper>
      {history.length > 0 ? (
        history.map((item) => (
          <Payment
            key={item.id}
            src={item.imgUrl}
            seller={item.seller}
            date={item.date}
            status={item.status}
            price={item.amount}
            currency={item.currency}
          />
        ))
      ) : (
        <S.Text>{t('profile.nav.payments.noHistory')}</S.Text>
      )}
    </Card>
  );
};
