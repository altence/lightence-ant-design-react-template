import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BloodScreeningChart } from './BloodScreeningChart/BloodScreeningChart';
import { BloodScreeningTable } from './BloodScreeningTable/BloodScreeningTable';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './BloodScreeningCard.styles';
import { BloodTestResult, results } from '../../../constants/dashboard/bloodTestResults';

export const BloodScreeningCard: React.FC = () => {
  const { t } = useTranslation();

  const [activeItem, setActiveItem] = useState<BloodTestResult>(results[0]);

  const { mobileOnly } = useResponsive();

  return (
    <S.BloodScreeningCard
      title={
        mobileOnly && (
          <S.TitleWrapper>
            <div>{t('dashboard.bloodScreening.title')}</div>
            {!!activeItem?.test && <S.ActiveItem>{activeItem.test}</S.ActiveItem>}
          </S.TitleWrapper>
        )
      }
      padding={0}
    >
      <BloodScreeningChart data={activeItem.yearData} />
      <BloodScreeningTable activeItem={activeItem} setActiveItem={setActiveItem} />
    </S.BloodScreeningCard>
  );
};
