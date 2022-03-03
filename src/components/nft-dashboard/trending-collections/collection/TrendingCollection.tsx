import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@app/components/common/Card/Card';
import { Avatar } from '@app/components/common/Avatar/Avatar';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './TrendingCollection.styles';

interface NftCollectionProps {
  title: string;
  owner: string;
  usd_price: number;
  eth_price: number;
  image: string;
  avatar: string;
}

export const TrendingCollection: React.FC<NftCollectionProps> = ({
  title,
  owner,
  usd_price,
  eth_price,
  image,
  avatar,
}) => {
  const { t } = useTranslation();

  return (
    <Card padding={0}>
      <S.CollectionImage src={image} alt="nft" />
      <S.BidButton type="ghost">{t('nft.bid')}</S.BidButton>
      <S.NftCollectionInfo>
        <S.AuthorAvatarWrapper>
          <Avatar shape="circle" size={64} src={avatar} alt={owner} />
        </S.AuthorAvatarWrapper>
        <S.InfoRow>
          <S.Title level={5}>{title}</S.Title>
          <S.Text>{getCurrencyPrice(formatNumberWithCommas(eth_price), 'ETH')}</S.Text>
        </S.InfoRow>
        <S.InfoRow>
          <S.OwnerText>
            {t('nft.by')} {owner}
          </S.OwnerText>
          <S.USDText>{getCurrencyPrice(formatNumberWithCommas(usd_price), 'USD')}</S.USDText>
        </S.InfoRow>
      </S.NftCollectionInfo>
    </Card>
  );
};
