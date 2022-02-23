import React from 'react';
import * as S from './NftCard.styles';
import { NftItem } from '@app/api/nftDashboard.api';

interface NftCardProps {
  nftItem: NftItem;
}

export const NftCard: React.FC<NftCardProps> = ({ nftItem }) => {
  return (
    <S.CardStyled>
      <S.NftImage src={nftItem.image} alt="nftImage" />
      <S.NftInfo>
        <h4>Birth of Universe</h4>
        <S.InfoRow>
          <span>{nftItem.author}</span>
          <span>{nftItem.currentBidCrypto}</span>
        </S.InfoRow>
        <S.InfoRow>
          <span>Current Bid</span>
          <span>{nftItem.currentBid}</span>
        </S.InfoRow>
      </S.NftInfo>
    </S.CardStyled>
  );
};
