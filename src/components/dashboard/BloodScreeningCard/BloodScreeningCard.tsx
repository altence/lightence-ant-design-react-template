import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BloodScreeningChart } from './BloodScreeningChart/BloodScreeningChart';
import { BloodScreeningTable } from './BloodScreeningTable/BloodScreeningTable';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './BloodScreeningCard.styles';
import { BloodTestResult, results } from '../../../constants/dashboard/bloodTestResults';
import { Card } from 'components/common/Card/Card';

export const BloodScreeningCard: React.FC = () => {
  const { t } = useTranslation();

  const [activeItem, setActiveItem] = useState<BloodTestResult>(results[0]);

  const { mobileOnly } = useResponsive();

  return (
    <Card
      title={
        mobileOnly && (
          <S.TitleWrapper>
            <div>{t('dashboard.bloodScreening.title')}</div>
            {!!activeItem?.test && <S.ActiveItem>{activeItem.test}</S.ActiveItem>}
          </S.TitleWrapper>
        )
      }
      padding="0 0 0.5rem"
    >
      <BloodScreeningChart data={activeItem.yearData} />
      <BloodScreeningTable activeItem={activeItem} setActiveItem={setActiveItem} />
    </Card>
  );
};
