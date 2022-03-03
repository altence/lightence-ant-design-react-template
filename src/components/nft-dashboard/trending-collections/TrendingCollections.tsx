import React, { useEffect, useMemo, useState } from 'react';
import { TrendingCollection } from '@app/components/nft-dashboard/trending-collections/collection/TrendingCollection';
import { getTrendingActivities, TrendingActivity } from '@app/api/activity.api';
import * as S from './TrendingCollections.styles';

export const TrendingCollections: React.FC = () => {
  const [trending, setTrending] = useState<TrendingActivity[]>([]);

  useEffect(() => {
    getTrendingActivities().then((res) => setTrending(res));
  }, []);

  const trendingList = useMemo(
    () => trending.map((item, index) => <TrendingCollection key={index} {...item} />),
    [trending],
  );

  return (
    <>
      <S.SectionHeader>
        <S.h1>Trending Collections</S.h1>
      </S.SectionHeader>
      <S.SectionContent>
        {trendingList}
        <S.ViewAll>
          <S.ViewAllLink>View All</S.ViewAllLink>
        </S.ViewAll>
      </S.SectionContent>
    </>
  );
};
