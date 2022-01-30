import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { Card } from '@app/components/common/Card/Card';
import { Payment } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/Payment/Payment';
import { PaymentsTable } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/PaymentsTable/PaymentsTable';
import { useResponsive } from '@app/hooks/useResponsive';
import { getPaymentHistory, Payment as IPayment } from '@app/api/paymentHistory.api';
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
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <BaseForm.Title>{t('profile.nav.payments.paymentHistory')}</BaseForm.Title>
        </Col>

        <Col span={24}>
          <S.ContentWrapper isEmptyHistory={history.length === 0}>
            {mobileOnly && (history.length > 0 ? payments : <S.Text>{t('profile.nav.payments.noHistory')}</S.Text>)}

            {isTablet && <PaymentsTable payments={history} />}
          </S.ContentWrapper>
        </Col>
      </Row>
    ),
    [isTablet, history, payments, mobileOnly, t],
  );

  return isTablet ? content : <Card>{content}</Card>;
};
