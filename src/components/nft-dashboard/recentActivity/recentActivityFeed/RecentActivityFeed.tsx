import React, { useEffect, useMemo, useRef } from 'react';
import { BaseFeed } from '@app/components/common/BaseFeed/BaseFeed';
import { NotFound } from '@app/components/common/NotFound/NotFound';
import { RecentActivityItem } from '@app/components/nft-dashboard/recentActivity/recentActivityFeed/RecentActivityItem/RecentActivityItem';
import { Activity } from '@app/api/activity.api';
import * as S from './RecentActivityFeed.styles';

interface RecentActivityFeedProps {
  activity: Activity[];
  hasMore: boolean;
  next: () => void;
}

export const RecentActivityFeed: React.FC<RecentActivityFeedProps> = ({ activity, hasMore, next }) => {
  const activityItems = useMemo(
    () => activity.map((item, index) => <RecentActivityItem key={index} {...item} />),
    [activity],
  );

  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activity.length < 4) {
      feedRef.current?.dispatchEvent(new CustomEvent('scroll'));
    }
  }, [activity]);

  return activityItems.length > 0 ? (
    <S.FeedWrapper ref={feedRef} id="recent-activity-feed">
      <BaseFeed hasMore={hasMore} next={next} target="recent-activity-feed">
        {activityItems}
      </BaseFeed>
    </S.FeedWrapper>
  ) : (
    <NotFound />
  );
};
