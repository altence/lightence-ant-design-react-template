import React from 'react';
import * as S from './RecentlyAddedNft.styles';
import { NftCard } from '@app/components/nft-dashboard/recently-added/nft-card/NftCard';

export const RecentlyAddedNft: React.FC = () => {
  return (
    <>
      <S.SectionHeader>
        <S.h1>Recently Added NFTs</S.h1>
      </S.SectionHeader>
      <S.SectionContent>
        <NftCard />
      </S.SectionContent>
    </>
  );
};
