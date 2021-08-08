import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { Col, Row } from 'antd';
import { ProteinCard } from '../components/dashboard/statistics/ProteinCard/ProteinCard';
import { FatCard } from '../components/dashboard/statistics/FatCard/FatCard';
import { BonesCard } from '../components/dashboard/statistics/BonesCard/BonesCard';
import { WaterBalanceCard } from '../components/dashboard/statistics/WaterBalanceCard/WaterBalanceCard';
import { WeightCard } from '../components/dashboard/statistics/WeightCard/WeightCard';
import { MapCard } from '../components/dashboard/MapCard/MapCard';
import { ScreeningsCard } from '../components/dashboard/ScreeningsCard/ScreeningsCard';
import { ActivityCard } from '../components/dashboard/ActivityCard/ActivityCard';
import { TreatmentCard } from '../components/dashboard/TreatmentCard/TreatmentCard';
import { CovidCard } from '../components/dashboard/CovidCard/CovidCard';
import { HealthCard } from '../components/dashboard/HealthCard/HealthCard';
import { FavouritesDoctorsCard } from '../components/dashboard/FavouritesDoctorsCard/FavouritesDoctorsCard';
import { PatientTimelineCard } from '../components/dashboard/timelines/PatientTimelineCard/PatientTimelineCard';
import { BloodScreeningCard } from '../components/dashboard/timelines/BloodScreeningCard/BloodScreeningCard';
import { PiecesOfAdviceCard } from '../components/dashboard/PiecesOfAdviceCard/PiecesOfAdviceCard';
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
          <ScreeningsCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="14">
          <TreatmentCard />
        </Col>
        <Col span="8">
          <ActivityCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="11">
          <CovidCard />
        </Col>
        <Col span="11">
          <HealthCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="8">
          <FavouritesDoctorsCard />
        </Col>
        <Col span="10">
          <PatientTimelineCard />
        </Col>
        <Col span="5">
          <BloodScreeningCard />
        </Col>
      </RowStyled>
      <RowStyled justify="space-between">
        <Col span="24">
          <PiecesOfAdviceCard />
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
