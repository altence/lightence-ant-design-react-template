import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { Payment } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/Payment/Payment';
import { PaymentsTable } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/PaymentsTable/PaymentsTable';
import { useResponsive } from '@app/hooks/useResponsive';
import { getPaymentHistory, Payment as IPayment } from '@app/api/paymentHistory.api';
import * as S from './PaymentHistory.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

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
      <BaseRow gutter={[32, 32]}>
        <BaseCol span={24}>
          <BaseForm.Title>{t('profile.nav.payments.paymentHistory')}</BaseForm.Title>
        </BaseCol>

        <BaseCol span={24}>
          <S.ContentWrapper isEmptyHistory={history.length === 0}>
            {mobileOnly && (history.length > 0 ? payments : <S.Text>{t('profile.nav.payments.noHistory')}</S.Text>)}

            {isTablet && <PaymentsTable payments={history} />}
          </S.ContentWrapper>
        </BaseCol>
      </BaseRow>
    ),
    [isTablet, history, payments, mobileOnly, t],
  );

  return isTablet ? content : <BaseCard>{content}</BaseCard>;
};
