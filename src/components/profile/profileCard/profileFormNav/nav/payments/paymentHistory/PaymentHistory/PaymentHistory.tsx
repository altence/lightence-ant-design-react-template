import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@app/components/common/Card/Card';
import { Payment } from '../Payment/Payment';
import { PaymentsTable } from '../PaymentsTable/PaymentsTable';
import { getPaymentHistory, Payment as IPayment } from '@app/api/paymentHistory.api';
import { FormItem, Title } from '@app/components/common/Form/Form.styles';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './PaymentHistory.styles';

export const PaymentHistory: React.FC = () => {
  const [history, setHistory] = useState<IPayment[]>([]);

  const { mobileOnly, isTablet } = useResponsive();

  const { t } = useTranslation();

  const payments = useMemo(
    () =>
      history.map((item) => (
        <Payment
          key={item.id}
          src={item.imgUrl}
          recipient={item.recipient}
          date={item.date}
          status={item.status}
          price={item.amount}
          currency={item.currency}
        />
      )),
    [history],
  );

  useEffect(() => {
    getPaymentHistory().then((res) => setHistory(res));
  }, []);

  const content = useMemo(
    () => (
      <>
        <FormItem>
          <Title>{t('profile.nav.payments.paymentHistory')}</Title>
        </FormItem>
        <S.ContentWrapper isEmptyHistory={history.length === 0}>
          {mobileOnly && (history.length > 0 ? payments : <S.Text>{t('profile.nav.payments.noHistory')}</S.Text>)}

          {isTablet && <PaymentsTable payments={history} />}
        </S.ContentWrapper>
      </>
    ),
    [isTablet, history, payments, mobileOnly, t],
  );

  return isTablet ? content : <Card>{content}</Card>;
};
