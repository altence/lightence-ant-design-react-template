import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Card } from 'components/common/Card/Card';
import { Payment } from './Payment/Payment';
import { PaymentsTable } from './PaymentsTable/PaymentsTable';
import { getPaymentHistory, Payment as IPayment } from 'api/paymentHistory.api';
import { FormItem, Title } from '../../../../../../common/Form/Form.styles';
import theme from 'styles/theme';
import * as S from './PaymentHistory.styles';

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
          {!isTablet && (history.length > 0 ? payments : <S.Text>{t('profile.nav.payments.noHistory')}</S.Text>)}

          {isTablet && <PaymentsTable payments={history} />}
        </S.ContentWrapper>
      </>
    ),
    [isTablet, history, payments],
  );

  return isTablet ? content : <Card>{content}</Card>;
};
