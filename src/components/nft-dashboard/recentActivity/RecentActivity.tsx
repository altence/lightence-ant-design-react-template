import React, { useEffect, useState } from 'react';
import { RecentActivityHeader } from '@app/components/nft-dashboard/recentActivity/RecentActivityHeader/RecentActivityHeader';
import { RecentActivityFeed } from '@app/components/nft-dashboard/recentActivity/recentActivityFeed/RecentActivityFeed';
import { RecentActivityFilter } from '@app/components/nft-dashboard/recentActivity/recentActivityFilters/RecentActivityFilter';
import { useResponsive } from '@app/hooks/useResponsive';
import { Activity, getActivities } from '@app/api/activity.api';
import * as S from './RecentActivity.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

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
    <BaseRow gutter={[30, 0]}>
      <BaseCol span={24}>
        <RecentActivityHeader filters={filters} setFilters={setFilters} />
      </BaseCol>

      <BaseCol xs={24} sm={24} md={24} xl={16}>
        <RecentActivityFeed activity={filteredActivity} hasMore={hasMore} next={next} />
      </BaseCol>

      {isDesktop && (
        <S.FilterCol span={8}>
          <RecentActivityFilter filters={filters} setFilters={setFilters} withWrapper />
        </S.FilterCol>
      )}
    </BaseRow>
  );
};
