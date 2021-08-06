import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { Col, Row } from 'antd';
import { ProteinCard } from './statistics/Protein/ProteinCard';
import { FatCard } from './statistics/Fat/FatCard';
import { BonesCard } from './statistics/Bones/BonesCard';
import { WaterBalanceCard } from './statistics/WaterBalance/WaterBalanceCard';
import { WeightCard } from './statistics/Weight/WeightCard';
import { MapCard } from './Map/MapCard';
import { ScreeningsCard } from './Screenings/ScreeningsCard';
import { ActivityCard } from './Activity/ActivityCard';
import { TreatmentCard } from './Treatment/TreatmentCard';
import { CovidCard } from './Covid/CovidCard';
import { HealthCard } from './Health/HealthCard';
import { FavouritesDoctorsCard } from './FavouritesDoctors/FavouritesDoctorsCard';
import { PatientTimelineCard } from './timelines/PatientTimeline/PatientTimelineCard';
import { BloodScreeningCard } from './timelines/BloodScreening/BloodScreeningCard';
import { PiecesOfAdviceCard } from './PiecesOfAdvice/PiecesOfAdviceCard';
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
        <Col span="8">
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
