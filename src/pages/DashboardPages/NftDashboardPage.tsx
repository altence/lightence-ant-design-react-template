import React from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { MapCard } from '@app/components/medical-dashboard/mapCard/MapCard';
import { ScreeningsCard } from '@app/components/medical-dashboard/screeningsCard/ScreeningsCard/ScreeningsCard';
import { ActivityCard } from '@app/components/medical-dashboard/activityCard/ActivityCard';
import { TreatmentCard } from '@app/components/medical-dashboard/treatmentCard/TreatmentCard';
import { CovidCard } from '@app/components/medical-dashboard/covidCard/CovidCard';
import { HealthCard } from '@app/components/medical-dashboard/HealthCard/HealthCard';
import { FavoritesDoctorsCard } from '@app/components/medical-dashboard/favoriteDoctors/FavoriteDoctorsCard/FavoritesDoctorsCard';
import { PatientResultsCard } from '@app/components/medical-dashboard/PatientResultsCard/PatientResultsCard';
import { StatisticsCards } from '@app/components/medical-dashboard/statisticsCards/StatisticsCards';
import { BloodScreeningCard } from '@app/components/medical-dashboard/bloodScreeningCard/BloodScreeningCard/BloodScreeningCard';
import { NewsCard } from '@app/components/medical-dashboard/NewsCard/NewsCard';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './DashboardPage.styles';
import { TrendingCreators } from '@app/components/nft-dashboard/trending-creators/TrendingCreators';
import { RecentlyAddedNft } from '@app/components/nft-dashboard/recently-added/RecentlyAddedNft';
import { TrendingCollection } from '@app/components/nft-dashboard/trending-collections/collection/TrendingCollection';
import { TrendingCollections } from '@app/components/nft-dashboard/trending-collections/TrendingCollections';
import { RecentActivites } from '@app/components/nft-dashboard/recent-activities/RecentActivites';
import { Balance } from '@app/components/nft-dashboard/Balance/Balance';
import { TotalEarning } from '@app/components/nft-dashboard/totalEarning/TotalEarning';
import { ActivityStory } from '@app/components/nft-dashboard/activityStory/ActivityStory';
import { RecentActivity } from '@app/components/nft-dashboard/recentActivity/RecentActivity';

const MedicalDashboardPage: React.FC = () => {
  const { isTablet, isDesktop } = useResponsive();

  const { t } = useTranslation();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol xl={16} xxl={16} id="desktop-content">
        <Row gutter={[60, 60]}>
          <Col span={24}>
            <TrendingCreators />
          </Col>

          <Col span={24}>
            <RecentlyAddedNft />
          </Col>

          <Col span={24}>
            <TrendingCollections />
          </Col>

          <Col span={24}>
            <RecentActivites />
          </Col>

          <Col span={24}>
            <RecentActivity />
          </Col>
        </Row>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={8}>
        <div id="balance">
          <Balance />
        </div>
        <S.Space />
        <div id="total-earning">
          <TotalEarning />
        </div>
        <S.Space />
        <S.ScrollWrapper id="activity-story">
          <ActivityStory />
        </S.ScrollWrapper>
      </S.RightSideCol>
    </Row>
  );

  const mobileAndTabletLayout = (
    <Row gutter={[20, 24]}>
      <Col span={24}>
        <TrendingCreators />
      </Col>

      <Col span={24}>
        <RecentlyAddedNft />
      </Col>

      <Col span={24}>
        <TrendingCollections />
      </Col>

      <Col span={24}>
        <RecentActivites />
      </Col>

      <Col span={24}>
        <RecentActivity />
      </Col>
    </Row>
  );

  return (
    <>
      <PageTitle>{t('common.medical-dashboard')}</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
