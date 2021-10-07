import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/common/Card/Card';
import { Payment } from './Payment/Payment';
import { getPaymentHistory, Payment as IPayment } from 'api/paymentHistory.api';
import { FormItem, Title } from '../../../ProfileForm/ProfileForm.styles';
import * as S from './PaymentHistory.styles';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';
import { PaymentsTable } from './PaymentsTable/PaymentsTable';

export const PaymentHistory: React.FC = () => {
  const [history, setHistory] = useState<IPayment[]>([]);

  const isTablet = useMediaQuery({ query: theme.media.md });

  const { t } = useTranslation();

  const payments = useMemo(
    () =>
      history.map((item) => (
        <Payment
          key={item.id}
          src={item.imgUrl}
          recepient={item.recepient}
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
        <S.TitleWrapper>
          <FormItem>
            <Title>{t('profile.nav.payments.paymentHistory')}</Title>
          </FormItem>
        </S.TitleWrapper>
        {!isTablet && (history.length > 0 ? payments : <S.Text>{t('profile.nav.payments.noHistory')}</S.Text>)}

        {isTablet && <PaymentsTable payments={history} />}
      </>
    ),
    [isTablet, history, payments],
  );

  return isTablet ? content : <Card padding="1.75rem 0 0 0">{content}</Card>;
};
