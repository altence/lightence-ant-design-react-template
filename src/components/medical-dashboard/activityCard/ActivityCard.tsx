import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { ActivityChart } from './ActivityChart';
import { ChartData } from 'interfaces/interfaces';
import styled from 'styled-components';

const ActivityCardStyled = styled(BaseCard)`
  height: 100%;
`;

export const ActivityCard: React.FC = () => {
  const [data] = useState<ChartData>([1840, 1927, 1793, 1757, 1934, 1620, 1754]);

  const { t } = useTranslation();

  return (
    <ActivityCardStyled id="activity" title={t('medical-dashboard.activity.title')} padding={0}>
      <ActivityChart data={data} />
    </ActivityCardStyled>
  );
};
