import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatisticsInfo } from '../StatisticsInfo/StatisticsInfo';
import { StatisticsProgress } from '../StatisticsProgress/StatisticsProgress';
import { useResponsive } from '@app/hooks/useResponsive';
import { StatisticColor } from '@app/constants/config/statistics';
import * as S from './StatisticsCard.styles';
import { themeObject } from '@app/styles/themes/themeVariables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

interface StatisticsCardProps {
  name: string;
  value: number;
  prevValue: number;
  color: StatisticColor;
  unit: 'kg';
  Icon: React.FC;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({ name, value, prevValue, color, unit, Icon }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { isTablet: isTabletOrHigher } = useResponsive();

  const { t } = useTranslation();

  return (
    <S.StatisticCard padding="0.5rem" $color={color}>
      <BaseRow wrap={false} gutter={[isTabletOrHigher ? 10 : 5, 0]}>
        <BaseCol>
          <S.IconWrapper>
            <S.Icon component={Icon} />
          </S.IconWrapper>
        </BaseCol>

        <BaseCol flex={1}>
          <BaseRow justify="space-between" align="middle" wrap={false}>
            <BaseCol>
              <StatisticsInfo name={t(name)} value={value} prevValue={prevValue} />
            </BaseCol>

            <BaseCol>
              <StatisticsProgress color={themeObject[theme][color]} unit={unit} value={value} />
            </BaseCol>
          </BaseRow>
        </BaseCol>
      </BaseRow>
    </S.StatisticCard>
  );
};
