import React from 'react';
import { Col, Row } from 'antd';
import { MapCard } from '@app/components/dashboard/MapCard/MapCard';
import { ScreeningsCard } from '@app/components/dashboard/ScreeningsCard/ScreeningsCard';
import { ActivityCard } from '@app/components/dashboard/ActivityCard/ActivityCard';
import { TreatmentCard } from '@app/components/dashboard/treatmentCard/TreatmentCard';
import { CovidCard } from '@app/components/dashboard/CovidCard/CovidCard';
import { HealthCard } from '@app/components/dashboard/HealthCard/HealthCard';
import { FavouritesDoctorsCard } from '@app/components/dashboard/favouriteDoctors/FavouritesDoctorsCard';
import { PatientResultsCard } from '@app/components/dashboard/PatientResultsCard/PatientResultsCard';
import { BloodScreeningCard } from '@app/components/dashboard/BloodScreeningCard/BloodScreeningCard';
import { NewsCard } from '@app/components/dashboard/NewsCard/NewsCard';
import { useResponsive } from '@app/hooks/useResponsive';
import { StatisticsCards } from '@app/components/dashboard/StatisticsCards/StatisticsCards';

import * as S from './DashboardPage.styles';

const DashboardPage: React.FC = () => {
  const { isTablet, isDesktop } = useResponsive();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol xl={16} xxl={16}>
        <Row gutter={[30, 30]}>
          <Col span={24}>
            <Row gutter={[30, 30]}>
              <StatisticsCards />

              <Col id="map" span={24} order={5}>
                <MapCard />
              </Col>
            </Row>
          </Col>

          <Col id="latest-screenings" span={24}>
            <ScreeningsCard />
          </Col>

          <Col id="treatment-plan" xl={24} xxl={14}>
            <TreatmentCard />
          </Col>

          <Col id="activity" xl={24} xxl={10}>
            <ActivityCard />
          </Col>

          <Col id="covid" span={24}>
            <CovidCard />
          </Col>

          <Col id="patient-timeline" span={10}>
            <PatientResultsCard />
          </Col>

          <Col id="health" span={14}>
            <HealthCard />
          </Col>

          <Col id="favorite-doctors" span={24}>
            <FavouritesDoctorsCard />
          </Col>

          <Col id="news" span={24}>
            <NewsCard />
          </Col>
        </Row>
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={8}>
        <BloodScreeningCard />
      </S.RightSideCol>
    </Row>
  );

  const mobileAndTabletLayout = (
    <Row gutter={[20, 20]}>
      <StatisticsCards />

      <Col id="latest-screenings" xs={24} md={12} order={(isTablet && 5) || 0}>
        <ScreeningsCard />
      </Col>

      <Col id="activity" xs={24} md={12} order={(isTablet && 8) || 0}>
        <ActivityCard />
      </Col>

      <Col id="treatment-plan" xs={24} md={24} order={(isTablet && 9) || 0}>
        <TreatmentCard />
      </Col>

      <Col id="health" xs={24} md={24} order={(isTablet && 10) || 0}>
        <HealthCard />
      </Col>

      <Col id="patient-timeline" xs={24} md={12} order={(isTablet && 11) || 0}>
        <PatientResultsCard />
      </Col>

      <Col id="blood-screening" xs={24} md={12} order={(isTablet && 6) || 0}>
        <BloodScreeningCard />
      </Col>

      <Col id="favorite-doctors" xs={24} md={24} order={(isTablet && 13) || 0}>
        <FavouritesDoctorsCard />
      </Col>

      <Col id="covid" xs={24} md={12} order={(isTablet && 12) || 0}>
        <CovidCard />
      </Col>

      <Col id="news" xs={24} md={24} order={(isTablet && 14) || 0}>
        <NewsCard />
      </Col>

      {isTablet && (
        <Col id="map" md={12} order={7}>
          <MapCard />
        </Col>
      )}
    </Row>
  );

  return isDesktop ? desktopLayout : mobileAndTabletLayout;
};

export default DashboardPage;
