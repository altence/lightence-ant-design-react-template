import React, { useMemo } from 'react';
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

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  const { isTablet, isDesktop } = useResponsive();

  const statisticsCards = useMemo(
    () =>
      statisticsData.map((st, index) => (
        <Col key={st.id} xs={12} md={index === statisticsData.length - 1 ? 0 : 8} order={(isTablet && index + 1) || 0}>
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
      )),
    [],
  );

  const desktopLayout = (
    <>
      <Col span={14}>
        <Row gutter={[10, 10]}>
          {statisticsCards}

          <Col span={24} order={5}>
            <MapCard />
          </Col>
        </Row>
      </Col>

      <Col span={10}>
        <BloodScreeningCard />
      </Col>

      <Col span={24}>
        <ScreeningsCard />
      </Col>

      <Col span={14}>
        <TreatmentCard />
      </Col>

      <Col span={10}>
        <ActivityCard />
      </Col>

      <Col span={24}>
        <CovidCard />
      </Col>

      <Col span={10}>
        <PatientResultsCard />
      </Col>

      <Col span={14}>
        <HealthCard />
      </Col>

      <Col span={24}>
        <FavouritesDoctorsCard />
      </Col>

      <Col span={24}>
        <PiecesOfAdviceCard />
      </Col>
    </>
  );

  const mobileAndTabletLayout = (
    <>
      {statisticsCards}

      <Col xs={24} md={12} order={(isTablet && 5) || 0}>
        <ScreeningsCard />
      </Col>

      <Col xs={24} md={12} order={(isTablet && 8) || 0}>
        <ActivityCard />
      </Col>

      <Col xs={24} md={24} order={(isTablet && 9) || 0}>
        <TreatmentCard />
      </Col>

      <Col xs={24} md={24} order={(isTablet && 10) || 0}>
        <HealthCard />
      </Col>

      <Col xs={24} md={12} order={(isTablet && 11) || 0}>
        <PatientResultsCard />
      </Col>

      <Col xs={24} md={12} order={(isTablet && 6) || 0}>
        <BloodScreeningCard />
      </Col>

      <Col xs={24} md={24} order={(isTablet && 13) || 0}>
        <FavouritesDoctorsCard />
      </Col>

      <Col xs={24} md={12} order={(isTablet && 12) || 0}>
        <CovidCard />
      </Col>

      <Col xs={24} md={24} order={(isTablet && 14) || 0}>
        <PiecesOfAdviceCard />
      </Col>

      {isTablet && (
        <Col md={12} order={7}>
          <MapCard />
        </Col>
      )}
    </>
  );

  return (
    <>
      <PageTitle>{t('common.dashboard')}</PageTitle>
      <Row justify="space-between" gutter={[10, 10]}>
        {isDesktop ? desktopLayout : mobileAndTabletLayout}
      </Row>
    </>
  );
};

export default DashboardPage;
