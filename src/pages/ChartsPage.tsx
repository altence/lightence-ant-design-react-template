import React from 'react';
import { Row, Col } from 'antd';
import { GradientStackedAreaChart } from 'components/charts/GradientStackedAreaChart/GradientStackedAreaChart';
import { VisitorsPieChart } from 'components/charts/VisitorsPieChart';
import { BarAnimationDelayChart } from 'components/charts/BarAnimationDelayChart/BarAnimationDelayChart';
import { ScatterChart } from 'components/charts/ScatterChart/ScatterChart';
import { LineRaceChart } from 'components/charts/LineRaceChart/LineRaceChart';

const ChartsPage: React.FC = () => {
  return (
    <Row gutter={[30, 30]}>
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
      <Col id="line-race" xs={24}>
        <LineRaceChart />
      </Col>
    </Row>
  );
};

export default ChartsPage;
