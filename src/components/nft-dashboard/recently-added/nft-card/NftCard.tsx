import React from 'react';
import * as S from './NftCard.styles';
import nft from 'assets/images/nft/nft-image.png';

interface NftCardProps {
  author?: string;
  price?: string;
  currentBid?: string;
}

export const NftCard: React.FC<NftCardProps> = ({ author, price, currentBid }) => {
  return (
    <S.CardStyled>
      <S.NftImage src={nft} alt="nft" />
      <S.NftInfo>
        <h4>Birth of Universe</h4>
        <S.InfoRow>
          <span>{author}</span>
          <span>{price}</span>
        </S.InfoRow>
        <S.InfoRow>
          <span>bid</span>
          <span>{currentBid}</span>
        </S.InfoRow>
      </S.NftInfo>
    </S.CardStyled>
  );
};
