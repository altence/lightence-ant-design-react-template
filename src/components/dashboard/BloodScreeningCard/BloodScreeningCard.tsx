import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BloodScreeningChart } from './BloodScreeningChart/BloodScreeningChart';
import { Cell, BloodScreeningTable } from './BloodScreeningTable/BloodScreeningTable';
import { camelize } from '../../../helpers/camelize';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './BloodScreeningCard.styles';

export const BloodScreeningCard: React.FC = () => {
  const { t } = useTranslation();

  const [activeItem, setActiveItem] = useState<Cell>({
    key: 0,
    values: {
      min: 80,
      current: 90,
      cellName: 'Red blood cells',
    },
    data: [410, 466, 455, 467, 649, 670, 620, 600, 500, 400, 500, 700],
  });

  const { mobileOnly } = useResponsive();

  return (
    <S.Card id="blood-screening" title={mobileOnly && t('dashboard.bloodScreening.title')} padding={0}>
      <S.Badge>{t(`dashboard.bloodScreening.${camelize(activeItem.values.cellName)}`)}</S.Badge>
      <BloodScreeningChart activeItem={activeItem} />
      <BloodScreeningTable activeItem={activeItem} setActiveItem={setActiveItem} />
    </S.Card>
  );
};
