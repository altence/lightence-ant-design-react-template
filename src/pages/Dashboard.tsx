import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { Col, Row } from 'antd';
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
import { StatisticsCard } from '../components/dashboard/StatisticsCard/StatisticsCard';
import { statisticsData } from '../constants/statistics';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <RowStyled justify="space-between">
        {statisticsData.map((st) => (
          <Col key={st.id} span="4">
            <StatisticsCard
              title={st.title}
              value={st.value}
              percent={st.percent}
              icon={st.icon}
              isDowngrade={st.isDowngrade}
            />
          </Col>
        ))}
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
