import React from 'react';
import { useResponsive } from '@app/hooks/useResponsive';
import { NftItem } from '@app/api/nftDashboard.api';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import * as S from './NftCard.styles';

interface NftCardProps {
  nftItem: NftItem;
}

export const NftCard: React.FC<NftCardProps> = ({ nftItem }) => {
  const { isTablet } = useResponsive();

  const tabletLayout = (
    <>
      <S.InfoHeader>
        <S.InfoText>@{nftItem.author}</S.InfoText>
      </S.InfoHeader>

      <S.InfoFooter>
        <S.CurrentBidWrapper>
          <S.CurrentBid>Current Bid</S.CurrentBid>
          <S.BidCrypto>
            {getCurrencyPrice(formatNumberWithCommas(nftItem.currentBidCrypto), CurrencyTypeEnum.ETH, false)}
          </S.BidCrypto>
        </S.CurrentBidWrapper>

        <S.CurrentBidWrapper>
          <S.Bid>{getCurrencyPrice(formatNumberWithCommas(nftItem.currentBid), CurrencyTypeEnum.USD)}</S.Bid>
        </S.CurrentBidWrapper>
      </S.InfoFooter>
    </>
  );

  const mobileLayout = (
    <>
      <S.InfoRow>
        <S.InfoText>@{nftItem.author}</S.InfoText>
        <S.BidCrypto>
          {getCurrencyPrice(formatNumberWithCommas(nftItem.currentBidCrypto), CurrencyTypeEnum.ETH, false)}
        </S.BidCrypto>
      </S.InfoRow>

      <S.InfoRow>
        <S.CurrentBid>Current Bid</S.CurrentBid>
        <S.Bid>{getCurrencyPrice(formatNumberWithCommas(nftItem.currentBid), CurrencyTypeEnum.USD)}</S.Bid>
      </S.InfoRow>
    </>
  );

  return (
    <S.Card padding={0} $img={nftItem.image}>
      <S.NftImage src={nftItem.image} alt="nftImage" />
      <S.NftInfo>
        <S.InfoRow>
          <S.Title>{nftItem.title}</S.Title>
        </S.InfoRow>
        {isTablet ? tabletLayout : mobileLayout}
      </S.NftInfo>
    </S.Card>
  );
};
