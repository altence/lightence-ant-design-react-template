import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../components/common/Card/Card';
import { CovidChart } from './CovidChart/CovidChart';

export const CovidCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card id="covid" title={t('dashboard.covid')} padding={0}>
      <CovidChart />
    </Card>
  );
};
