import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MainLayout from '../../components/layouts/MainLayout';
import { Col, Row } from 'antd';
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
import { statisticsData } from '../../constants/statisticsData';
import { media } from '../../styles/theme';

const Dashboard: React.FC = () => {
  const isPC = useMediaQuery({ query: media.xl });

  return (
    <MainLayout>
      <Row justify="space-between" gutter={[10, 10]}>
        {statisticsData.map((st, index) => (
          <Col key={st.id} order={(!isPC && index + 1) || 0} xs={12} xl={6}>
            <StatisticsCard
              title={st.title}
              icon={st.icon}
              value={st.value}
              percent={st.percent}
              isDowngrade={st.isDowngrade}
              color={st.color}
              chartColor={st.chartColor}
            />
          </Col>
        ))}

        {isPC && (
          <Col order={0} xl={9}>
            <MapCard />
          </Col>
        )}

        <Col order={(!isPC && 5) || 0} xs={24} xl={15}>
          <ScreeningsCard />
        </Col>

        <Col order={(!isPC && 7) || 0} xs={24} xl={15}>
          <TreatmentCard />
        </Col>

        <Col order={(!isPC && 6) || 0} xs={24} xl={9}>
          <ActivityCard />
        </Col>

        <Col order={(!isPC && 12) || 0} xs={24} xl={12}>
          <CovidCard />
        </Col>

        <Col order={(!isPC && 8) || 0} xs={24} xl={12}>
          <HealthCard />
        </Col>

        <Col order={(!isPC && 11) || 0} xs={24} xl={9}>
          <FavouritesDoctorsCard />
        </Col>

        <Col order={(!isPC && 9) || 0} xs={24} xl={9}>
          <PatientTimelineCard />
        </Col>

        <Col order={(!isPC && 10) || 0} xs={24} xl={6}>
          <BloodScreeningCard />
        </Col>

        <Col order={(!isPC && 13) || 0} span={24}>
          <PiecesOfAdviceCard />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Dashboard;
