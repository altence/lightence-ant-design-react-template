import React from 'react';
import { Card } from 'components/common/Card/Card';
import { useTranslation } from 'react-i18next';
import { PieChart } from '../common/charts/PieChart';

export const VisitorsPieChart: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    { value: 1048, name: t('charts.search') },
    { value: 735, name: t('charts.direct') },
    { value: 580, name: t('common.email') },
    { value: 484, name: t('charts.union') },
    { value: 300, name: t('charts.video') },
  ];
  const name = t('charts.visitorsFrom');

  return (
    <Card padding="0 0 1.875rem" title={t('charts.pie')}>
      <PieChart data={data} name={name} showLegend={true} />
    </Card>
  );
};
