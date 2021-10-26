import React from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { MapCard } from '../components/dashboard/MapCard/MapCard';
import { ScreeningsCard } from '../components/dashboard/ScreeningsCard/ScreeningsCard';
import { ActivityCard } from '../components/dashboard/ActivityCard/ActivityCard';
import { TreatmentCard } from '../components/dashboard/TreatmentCard/TreatmentCard';
import { CovidCard } from '../components/dashboard/CovidCard/CovidCard';
import { HealthCard } from '../components/dashboard/HealthCard/HealthCard';
import { FavouritesDoctorsCard } from '../components/dashboard/FavouritesDoctorsCard/FavouritesDoctorsCard';
import { PatientResultsCard } from '../components/dashboard/PatientResultsCard/PatientResultsCard';
import { BloodScreeningCard } from '../components/dashboard/BloodScreeningCard/BloodScreeningCard';
import { PiecesOfAdviceCard } from '../components/dashboard/PiecesOfAdviceCard/PiecesOfAdviceCard';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import { StatisticsCard } from '../components/dashboard/StatisticsCard/StatisticsCard';
import { statisticsData } from '../constants/statisticsData';
import { useResponsive } from 'hooks/useResponsive';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const { mobileOnly, tabletOnly, isTablet, isDesktop } = useResponsive();

  return (
    <>
      <PageTitle>{t('common.dashboard')}</PageTitle>
      <Row justify="space-between" gutter={[10, 10]}>
        {mobileOnly && (
          <>
            {statisticsData.map((st) => (
              <Col key={st.id} xs={12}>
                <StatisticsCard
                  name={st.name}
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
            <Col order={1} md={16} xl={18}>
              <Row justify="space-between" gutter={[10, 10]}>
                {statisticsData.map((st) => (
                  <Col key={st.id} md={6}>
                    <StatisticsCard
                      name={st.name}
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
            <Col order={2} md={8} xl={6}>
              <BloodScreeningCard />
            </Col>
          </>
        )}

        {tabletOnly && (
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
          <PatientResultsCard />
        </Col>

        {mobileOnly && (
          <Col xs={24}>
            <BloodScreeningCard />
          </Col>
        )}

        <Col order={(isDesktop && 8) || (isTablet && 9) || 0} xs={24} xl={15}>
          <FavouritesDoctorsCard />
        </Col>

        <Col order={(isDesktop && 6) || (isTablet && 8) || 0} xs={24} md={12} xl={12}>
          <CovidCard />
        </Col>

        <Col order={(isTablet && 10) || 0} span={24}>
          <PiecesOfAdviceCard />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
