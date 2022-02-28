import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { RecentActivityHeader } from '@app/components/nft-dashboard/recentActivity/RecentActivityHeader/RecentActivityHeader';
import { RecentActivityFeed } from '@app/components/nft-dashboard/recentActivity/recentActivityFeed/RecentActivityFeed';
import { Activity, getActivities } from '@app/api/activity.api';

export const RecentActivity = () => {
  const [activity, setActivity] = useState<Activity[]>([]);
  const [hasMore] = useState(true);

  useEffect(() => {
    getActivities().then((res) => setActivity(res));
  }, []);

  const next = () => {
    getActivities().then((newActivity) => setActivity(activity.concat(newActivity)));
  };

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <RecentActivityHeader />
      </Col>

      <Col span={24}>
        <RecentActivityFeed activity={activity} hasMore={hasMore} next={next} />
      </Col>
    </Row>
  );
};
