import React, { useMemo } from 'react';
import { PaymentHistory } from './paymentHistory/PaymentHistory/PaymentHistory';
import { PaymentMethod } from './paymentMethod/PaymentMethod';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { useResponsive } from 'hooks/useResponsive';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const Payments: React.FC = () => {
  const { isTablet } = useResponsive();

  const content = useMemo(
    () => (
      <BaseRow gutter={[0, 30]}>
        <BaseCol span={24}>
          <PaymentMethod />
        </BaseCol>
        <BaseCol span={24}>
          <PaymentHistory />
        </BaseCol>
      </BaseRow>
    ),
    [],
  );

  return isTablet ? <BaseCard>{content}</BaseCard> : content;
};
