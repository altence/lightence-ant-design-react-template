import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@app/components/common/Card/Card';
import * as S from './TrendingCollection.styles';
import { Avatar } from '@app/components/common/Avatar/Avatar';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';

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
          <span>{getCurrencyPrice(formatNumberWithCommas(eth_price), 'ETH')}</span>
        </S.InfoRow>
        <S.InfoRow>
          <S.Text>
            {t('nft.by')} {owner}
          </S.Text>
          <span>{getCurrencyPrice(formatNumberWithCommas(usd_price), 'USD')}</span>
        </S.InfoRow>
      </S.NftCollectionInfo>
    </Card>
  );
};
