import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { GradientStackedAreaChart } from '@app/components/charts/GradientStackedAreaChart/GradientStackedAreaChart';
import { VisitorsPieChart } from '@app/components/charts/VisitorsPieChart';
import { BarAnimationDelayChart } from '@app/components/charts/BarAnimationDelayChart/BarAnimationDelayChart';
import { ScatterChart } from '@app/components/charts/ScatterChart/ScatterChart';
import { LineRaceChart } from '@app/components/charts/LineRaceChart/LineRaceChart';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const ChartsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.charts')}</PageTitle>
      <Row gutter={[30, 30]}>
        <Col id="line-race" xs={24}>
          <LineRaceChart />
        </Col>
        <Col id="gradient-stacked-area" xs={24}>
          <GradientStackedAreaChart />
        </Col>
        <Col id="bar-animation-delay" xs={24}>
          <BarAnimationDelayChart />
        </Col>
        <Col id="pie" xs={24} lg={12}>
          <VisitorsPieChart />
        </Col>
        <Col id="scatter" xs={24} lg={12}>
          <ScatterChart />
        </Col>
      </Row>
    </>
  );
};

export default ChartsPage;
