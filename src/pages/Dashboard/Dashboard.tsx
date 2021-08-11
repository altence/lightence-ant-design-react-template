import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { Col } from 'antd';
import { MapCard } from '../../components/dashboard/MapCard/MapCard';
import { ScreeningsCard } from '../../components/dashboard/ScreeningsCard/ScreeningsCard';
import { ActivityCard } from '../../components/dashboard/ActivityCard/ActivityCard';
import { TreatmentCard } from '../../components/dashboard/TreatmentCard/TreatmentCard';
import { CovidCard } from '../../components/dashboard/CovidCard/CovidCard';
import { HealthCard } from '../../components/dashboard/HealthCard/HealthCard';
import { FavouritesDoctorsCard } from '../../components/dashboard/FavouritesDoctorsCard/FavouritesDoctorsCard';
import { PatientTimelineCard } from '../../components/dashboard/PatientTimelineCard/PatientTimelineCard';
import { BloodScreeningCard } from '../../components/dashboard/BloodScreeningCard/BloodScreeningCard';
import { PiecesOfAdviceCard } from '../../components/dashboard/PiecesOfAdviceCard/PiecesOfAdviceCard';
import { StatisticsCard } from '../../components/dashboard/StatisticsCard/StatisticsCard';
import { statisticsData } from '../../constants/statistics';
import * as S from './Dashboard.styles';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <S.Row justify="space-between" gutter={{ xs: 0, sm: 6, md: 10, lg: 14, xl: 20 }}>
        {statisticsData.map((st) => (
          <Col span="4" key={st.id}>
            <StatisticsCard
              title={st.title}
              value={st.value}
              percent={st.percent}
              icon={st.icon}
              isDowngrade={st.isDowngrade}
            />
          </Col>
        ))}
      </S.Row>
      <S.Row justify="space-between" gutter={{ xs: 0, sm: 6, md: 10, lg: 14, xl: 20 }}>
        <Col span="9">
          <MapCard />
        </Col>
        <Col span="15">
          <ScreeningsCard />
        </Col>
      </S.Row>
      <S.Row justify="space-between" gutter={{ xs: 0, sm: 6, md: 10, lg: 14, xl: 20 }}>
        <Col span="15">
          <TreatmentCard />
        </Col>
        <Col span="9">
          <ActivityCard />
        </Col>
      </S.Row>
      <S.Row justify="space-between" gutter={{ xs: 0, sm: 6, md: 10, lg: 14, xl: 20 }}>
        <Col span="12">
          <CovidCard />
        </Col>
        <Col span="12">
          <HealthCard />
        </Col>
      </S.Row>
      <S.Row justify="space-between" gutter={{ xs: 0, sm: 6, md: 10, lg: 14, xl: 20 }}>
        <Col span="9">
          <FavouritesDoctorsCard />
        </Col>
        <Col span="9">
          <PatientTimelineCard />
        </Col>
        <Col span="6">
          <BloodScreeningCard />
        </Col>
      </S.Row>
      <S.Row justify="space-between">
        <Col>
          <PiecesOfAdviceCard />
        </Col>
      </S.Row>
    </MainLayout>
  );
};

export default Dashboard;
