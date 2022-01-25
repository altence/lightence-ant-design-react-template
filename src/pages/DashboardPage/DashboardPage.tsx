import React from 'react';
import { Col, Row } from 'antd';
import { MapCard } from '@app/components/dashboard/mapCard/MapCard';
import { ScreeningsCard } from '@app/components/dashboard/screeningsCard/ScreeningsCard/ScreeningsCard';
import { ActivityCard } from '@app/components/dashboard/activityCard/ActivityCard';
import { TreatmentCard } from '@app/components/dashboard/treatmentCard/TreatmentCard';
import { CovidCard } from '@app/components/dashboard/covidCard/CovidCard';
import { HealthCard } from '@app/components/dashboard/HealthCard/HealthCard';
import { FavoritesDoctorsCard } from '@app/components/dashboard/favoriteDoctors/FavoriteDoctorsCard/FavoritesDoctorsCard';
import { PatientResultsCard } from '@app/components/dashboard/PatientResultsCard/PatientResultsCard';
import { BloodScreeningCard } from '@app/components/dashboard/bloodScreeningCard/BloodScreeningCard/BloodScreeningCard';
import { NewsCard } from '@app/components/dashboard/NewsCard/NewsCard';
import { useResponsive } from '@app/hooks/useResponsive';
import { StatisticsCards } from '@app/components/dashboard/statisticsCards/StatisticsCards';

import * as S from './DashboardPage.styles';
import { References } from '@app/components/common/References/References';

const DashboardPage: React.FC = () => {
  const { isTablet, isDesktop } = useResponsive();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol xl={16} xxl={16}>
        <Row gutter={[30, 30]}>
          <Col span={24}>
            <Row gutter={[30, 30]}>
              <StatisticsCards />
            </Row>
          </Col>

          <Col id="map" span={24}>
            <MapCard />
          </Col>

          <Col id="latest-screenings" span={24}>
            <ScreeningsCard />
          </Col>

          <Col id="treatment-plan" xl={24}>
            <TreatmentCard />
          </Col>

          <Col id="covid" xl={24}>
            <CovidCard />
          </Col>

          <Col id="activity" xl={24} xxl={12}>
            <ActivityCard />
          </Col>

          <Col id="health" xl={24} xxl={12}>
            <HealthCard />
          </Col>

          <Col id="favorite-doctors" xl={24}>
            <FavoritesDoctorsCard />
          </Col>

          <Col id="news" span={24}>
            <NewsCard />
          </Col>
        </Row>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={8}>
        <BloodScreeningCard id="blood-screening" />
        <S.Space />
        <PatientResultsCard id="patient-timeline" />
      </S.RightSideCol>
    </Row>
  );

  const mobileAndTabletLayout = (
    <Row gutter={[20, 20]}>
      <StatisticsCards />

      {isTablet && (
        <Col id="map" md={24} order={4}>
          <MapCard />
        </Col>
      )}

      <Col id="latest-screenings" xs={24} md={12} order={(isTablet && 5) || 0}>
        <ScreeningsCard />
      </Col>

      <Col id="activity" xs={24} md={12} order={(isTablet && 8) || 0}>
        <ActivityCard />
      </Col>

      <Col id="treatment-plan" xs={24} md={24} order={(isTablet && 10) || 0}>
        <TreatmentCard />
      </Col>

      <Col id="health" xs={24} md={12} order={(isTablet && 9) || 0}>
        <HealthCard />
      </Col>

      <Col id="patient-timeline" xs={24} md={12} order={(isTablet && 11) || 0}>
        <PatientResultsCard />
      </Col>

      <Col id="blood-screening" xs={24} md={12} order={(isTablet && 6) || 0}>
        <BloodScreeningCard />
      </Col>

      <Col id="favorite-doctors" xs={24} md={24} order={(isTablet && 13) || 0}>
        <FavoritesDoctorsCard />
      </Col>

      <Col id="covid" xs={24} md={12} order={(isTablet && 12) || 0}>
        <CovidCard />
      </Col>

      <Col id="news" xs={24} md={24} order={(isTablet && 14) || 0}>
        <NewsCard />
      </Col>
    </Row>
  );

  return isDesktop ? desktopLayout : mobileAndTabletLayout;
};

export default DashboardPage;
