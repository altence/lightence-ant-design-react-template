import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { Col, Row } from 'antd';
import { ProteinCard } from './statistics/Protein/ProteinCard';
import { FatCard } from './statistics/Fat/FatCard';
import { BonesCard } from './statistics/Bones/BonesCard';
import { WaterBalanceCard } from './statistics/WaterBalance/WaterBalanceCard';
import { WeightCard } from './statistics/Weight/WeightCard';
import { MapCard } from './Map/MapCard';
import { ScreeningsChartCard } from './ScreeningsChart/ScreeningsChartCard';
import { ActivityChartCard } from './ActivityChart/ActivityChartCard';
import { TreatmentCard } from './Treatment/TreatmentCard';
import { CovidChartCard } from './CovidChart/CovidChartCard';
import { HealthChartCard } from './HealthChart/HealthChartCard';
import { FavoriteDoctorsCard } from './FavoriteDoctors/FavoriteDoctorsCard';
import { TreatmentTimelineCard } from './timelines/TreatmentTimeline/TreatmentTimelineCard';
import { ResultsTimelineCard } from './timelines/ResultsTimeline/ResultsTimelineCard';
import { AdviceListCard } from './AdviceList/AdviceListCard';
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
          <ScreeningsChartCard />
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
        <Col span="8">
          <FavoriteDoctorsCard />
        </Col>
        <Col span="8">
          <TreatmentTimelineCard />
        </Col>
        <Col span="5">
          <ResultsTimelineCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="24">
          <AdviceListCard />
        </Col>
      </RowStyled>
    </MainLayout>
  );
};

const RowStyled = styled(Row)`
  margin-bottom: 1.25rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export default Dashboard;
