import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MainLayout from '../components/layouts/MainLayout';
import { Col, Row } from 'antd';
import { MapCard } from '../components/dashboard/MapCard/MapCard';
import { ScreeningsCard } from '../components/dashboard/ScreeningsCard/ScreeningsCard';
import { ActivityCard } from '../components/dashboard/ActivityCard/ActivityCard';
import { TreatmentCard } from '../components/dashboard/TreatmentCard/TreatmentCard';
import { CovidCard } from '../components/dashboard/CovidCard/CovidCard';
import { HealthCard } from '../components/dashboard/HealthCard/HealthCard';
import { FavouritesDoctorsCard } from '../components/dashboard/FavouritesDoctorsCard/FavouritesDoctorsCard';
import { PatientTimelineCard } from '../components/dashboard/PatientTimelineCard/PatientTimelineCard';
import { BloodScreeningCard } from '../components/dashboard/BloodScreeningCard/BloodScreeningCard';
import { PiecesOfAdviceCard } from '../components/dashboard/PiecesOfAdviceCard/PiecesOfAdviceCard';
import { StatisticsCard } from '../components/dashboard/StatisticsCard/StatisticsCard';
import { statisticsData } from '../constants/statisticsData';
import { media } from '../styles/theme';

const Dashboard: React.FC = () => {
  const isDesktop = useMediaQuery({ query: media.xl });
  const isTablet = useMediaQuery({ query: media.md });
  const isMobile = !isDesktop && !isTablet;

  return (
    <MainLayout>
      <Row justify="space-between" gutter={[10, 10]}>
        {isMobile && (
          <>
            {statisticsData.map((st) => (
              <Col key={st.id} xs={12}>
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

            <Col xs={24} xl={15}>
              <ScreeningsCard />
            </Col>
          </>
        )}

        {isTablet && (
          <>
            <Col order={1} md={16} xl={20}>
              <Row justify="space-between" gutter={[10, 10]}>
                {statisticsData.map((st) => (
                  <Col key={st.id} md={6}>
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
                {isDesktop && (
                  <Col xl={12}>
                    <MapCard />
                  </Col>
                )}
                <Col md={24} xl={12}>
                  <ScreeningsCard />
                </Col>
              </Row>
            </Col>
            <Col order={2} md={8} xl={4}>
              <BloodScreeningCard />
            </Col>
          </>
        )}

        {isTablet && !isDesktop && (
          <Col order={3} md={12} xl={9}>
            <MapCard />
          </Col>
        )}

        <Col order={(isDesktop && 5) || (isTablet && 4) || 0} xs={24} md={12} xl={9}>
          <ActivityCard />
        </Col>

        <Col order={(isDesktop && 4) || (isTablet && 5) || 0} xs={24} xl={15}>
          <TreatmentCard />
        </Col>

        <Col order={(isDesktop && 7) || (isTablet && 6) || 0} xs={24} xl={12}>
          <HealthCard />
        </Col>

        <Col order={(isDesktop && 9) || (isTablet && 7) || 0} xs={24} md={12} xl={9}>
          <PatientTimelineCard />
        </Col>

        {isMobile && (
          <Col xs={24}>
            <BloodScreeningCard />
          </Col>
        )}

        <Col order={(isDesktop && 8) || (isTablet && 9) || 0} xs={24} xl={9}>
          <FavouritesDoctorsCard />
        </Col>

        <Col order={(isDesktop && 6) || (isTablet && 8) || 0} xs={24} md={12} xl={12}>
          <CovidCard />
        </Col>

        <Col order={(isTablet && 10) || 0} span={24}>
          <PiecesOfAdviceCard />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Dashboard;
