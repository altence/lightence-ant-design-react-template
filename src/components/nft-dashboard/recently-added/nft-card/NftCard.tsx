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
        <S.Title>{nftItem.title}</S.Title>
        <S.InfoRow>
          <S.InfoText>@{nftItem.author}</S.InfoText>
          <S.BidCrypto>{nftItem.currentBidCrypto} ETH</S.BidCrypto>
        </S.InfoRow>
        <S.InfoRow>
          <S.CurrentBid>Current Bid</S.CurrentBid>
          <S.Bid>${nftItem.currentBid}</S.Bid>
        </S.InfoRow>
      </S.NftInfo>
    </S.CardStyled>
  );
};
