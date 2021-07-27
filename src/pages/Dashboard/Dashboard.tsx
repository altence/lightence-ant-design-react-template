import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { Col, Row } from 'antd';
import { ProteinCard } from './statistics/ProteinCard';
import { FatCard } from './statistics/FatCard';
import { BonesCard } from './statistics/BonesCard';
import { WaterBalanceCard } from './statistics/WaterBalanceCard';
import { WeightCard } from './statistics/WeightCard';
import { MapCard } from './Map/MapCard';
import { ScreeningChartCard } from './charts/ScreeningChart/ScreeningChartCard';
import { ActivityChartCard } from './charts/ActivityChart/ActivityChartCard';
import { TreatmentCard } from './Treatment/TreatmentCard';
import { CovidChartCard } from './charts/CovidChart/CovidChartCard';
import { HealthChartCard } from './charts/HealthChart/HealthChartCard';
import { FavoriteDoctorsCard } from './FavoriteDoctors/FavoriteDoctorsCard';
import { TreatmentTimelineCard } from './timelines/TreatmentTimelineCard';
import { ResultsTimelineCard } from './timelines/ResultsTimelineCard';
import { NewsCard } from './News/NewsCard';
import styled from 'styled-components';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <RowStyled justify="space-between">
        <Col span="4">
          <ProteinCard />
        </Col>
        <Col span="4">
          <FatCard />
        </Col>
        <Col span="4">
          <BonesCard />
        </Col>
        <Col span="4">
          <WaterBalanceCard />
        </Col>
        <Col span="4">
          <WeightCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="8">
          <MapCard />
        </Col>
        <Col span="14">
          <ScreeningChartCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="14">
          <TreatmentCard />
        </Col>
        <Col span="8">
          <ActivityChartCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="11">
          <CovidChartCard />
        </Col>
        <Col span="11">
          <HealthChartCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="10">
          <FavoriteDoctorsCard />
        </Col>
        <Col span="10">
          <TreatmentTimelineCard />
        </Col>
        <Col span="4">
          <ResultsTimelineCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="24">
          <NewsCard />
        </Col>
      </RowStyled>
    </MainLayout>
  );
};

const RowStyled = styled(Row)`
  margin-bottom: 1.25rem;
`;

export default Dashboard;
