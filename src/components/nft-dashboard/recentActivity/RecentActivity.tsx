import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { RecentActivityHeader } from '@app/components/nft-dashboard/recentActivity/RecentActivityHeader/RecentActivityHeader';
import { RecentActivityFeed } from '@app/components/nft-dashboard/recentActivity/recentActivityFeed/RecentActivityFeed';
import { RecentActivityFilter } from '@app/components/nft-dashboard/recentActivity/recentActivityFilters/RecentActivityFilter';
import { useResponsive } from '@app/hooks/useResponsive';
import { Activity, getActivities } from '@app/api/activity.api';

export interface RecentActivityFilterState {
  status: string[];
}

export const RecentActivity: React.FC = () => {
  const [activity, setActivity] = useState<Activity[]>([]);
  const [filteredActivity, setFilteredActivity] = useState<Activity[]>([]);
  const [hasMore] = useState(true);

  const [filters, setFilters] = useState<RecentActivityFilterState>({
    status: [],
  });

  const { isDesktop } = useResponsive();

  useEffect(() => {
    getActivities().then((res) => setActivity(res));
  }, []);

  const next = () => {
    getActivities().then((newActivity) => setActivity(activity.concat(newActivity)));
  };

  useEffect(() => {
    if (filters.status.length > 0) {
      setFilteredActivity(activity.filter((item) => filters.status.some((filter) => filter === item.status)));
    } else {
      setFilteredActivity(activity);
    }
  }, [filters.status, activity]);

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <RecentActivityHeader filters={filters} setFilters={setFilters} />
      </Col>

      <Col xs={24} sm={24} md={24} xl={16}>
        <RecentActivityFeed activity={filteredActivity} hasMore={hasMore} next={next} />
      </Col>

      {isDesktop && (
        <Col span={8}>
          <RecentActivityFilter filters={filters} setFilters={setFilters} withWrapper />
        </Col>
      )}
    </Row>
  );
};
