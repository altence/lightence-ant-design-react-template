import React, { useEffect, useState } from 'react';
import * as S from './RecentlyAddedNft.styles';
import { NftCard } from '@app/components/nft-dashboard/recently-added/nft-card/NftCard';
import { getRecentlyAddedNfts, NftItem } from '@app/api/nftDashboard.api';

export const RecentlyAddedNft: React.FC = () => {
  const [nfts, setNfts] = useState<NftItem[]>([]);

  useEffect(() => {
    getRecentlyAddedNfts().then((result) => {
      setNfts(result);
    });
  }, []);

  return (
    <>
      <S.SectionHeader>
        <S.h1>Recently Added NFTs</S.h1>
      </S.SectionHeader>
      <S.SectionContent>
        {nfts.length > 0 && nfts.map((nft) => <NftCard key={nft.title} nftItem={nft} />)}
        <S.ViewAll>
          <S.ViewAllLink>View All</S.ViewAllLink>
        </S.ViewAll>
      </S.SectionContent>
    </>
  );
};
