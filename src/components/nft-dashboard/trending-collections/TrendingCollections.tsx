import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingCollection } from '@app/components/nft-dashboard/trending-collections/collection/TrendingCollection';
import { NFTCardHeader } from '@app/components/nft-dashboard/common/NFTCardHeader/NFTCardHeader';
import { getTrendingActivities, TrendingActivity } from '@app/api/activity.api';
import * as S from './TrendingCollections.styles';
import { ViewAll } from '../common/ViewAll/ViewAll';

export const TrendingCollections: React.FC = () => {
  const [trending, setTrending] = useState<TrendingActivity[]>([]);

  useEffect(() => {
    getTrendingActivities().then((res) => setTrending(res));
  }, []);

  const { t } = useTranslation();

  const trendingList = useMemo(
    () => trending.map((item, index) => <TrendingCollection key={index} {...item} />),
    [trending],
  );

  return (
    <>
      <NFTCardHeader title={t('nft.trendingCollections')} />
      <S.SectionContent>{trendingList}</S.SectionContent>
      <S.ViewAllWrapper>
        <ViewAll />
      </S.ViewAllWrapper>
    </>
  );
};
