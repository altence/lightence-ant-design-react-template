import React from 'react';
import { Col, Row } from 'antd';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import { TrendingCreators } from '@app/components/nft-dashboard/trending-creators/TrendingCreators';
import { RecentlyAddedNft } from '@app/components/nft-dashboard/recently-added/RecentlyAddedNft';
import { TrendingCollections } from '@app/components/nft-dashboard/trending-collections/TrendingCollections';
import { Balance } from '@app/components/nft-dashboard/Balance/Balance';
import { TotalEarning } from '@app/components/nft-dashboard/totalEarning/TotalEarning';
import { ActivityStory } from '@app/components/nft-dashboard/activityStory/ActivityStory';
import { RecentActivity } from '@app/components/nft-dashboard/recentActivity/RecentActivity';
import * as S from './DashboardPage.styles';

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
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
            <RecentActivity />
          </Col>
        </Row>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
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
        <RecentActivity />
      </Col>
    </Row>
  );

  return (
    <>
      <PageTitle>NFT Dashboard</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
