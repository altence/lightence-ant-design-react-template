import React from 'react';
import * as S from './ActivityCard.styles';
import nftCollection from '@app/assets/images/nft/collection/collection.png';

interface NftCollectionProps {
  name?: string;
  author?: string;
  price?: string;
  count?: number;
}

export const ActivityCard: React.FC<NftCollectionProps> = ({ name, author, price, count }) => {
  return (
    <S.CardStyled>
      <S.CollectionImage src={nftCollection} alt="nft" />
      <S.BidButton>Bid</S.BidButton>
      <S.NftCollectionInfo>
        <S.AuthorAvatarWrapper>
          <S.AuthorImg src={nftCollection} />
        </S.AuthorAvatarWrapper>
        <S.InfoRow>
          <span>{name}</span>
          <span>{count}</span>
        </S.InfoRow>
        <S.InfoRow>
          <span>by {author}</span>
          <span>$ {price}</span>
        </S.InfoRow>
      </S.NftCollectionInfo>
    </S.CardStyled>
  );
};
