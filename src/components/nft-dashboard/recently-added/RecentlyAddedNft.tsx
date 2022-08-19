import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from '@app/components/common/Carousel/Carousel';
import { NFTCardHeader } from '@app/components/nft-dashboard/common/NFTCardHeader/NFTCardHeader';
import { ViewAll } from '@app/components/nft-dashboard/common/ViewAll/ViewAll';
import { NftCard } from '@app/components/nft-dashboard/recently-added/nft-card/NftCard';
import { getRecentlyAddedNfts, NftItem } from '@app/api/nftDashboard.api';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './RecentlyAddedNft.styles';

export const RecentlyAddedNft: React.FC = () => {
  const [nfts, setNfts] = useState<NftItem[]>([]);

  const { t } = useTranslation();
  const { mobileOnly, isTablet } = useResponsive();

  useEffect(() => {
    getRecentlyAddedNfts().then((result) => {
      setNfts(result);
    });
  }, []);

  const cards = useMemo(() => {
    return {
      mobile: nfts.slice(0, 3).map((nft) => <NftCard key={nft.title} nftItem={nft} />),
      tablet: nfts.map((nft) => (
        <div key={nft.title}>
          <S.CardWrapper>
            <NftCard nftItem={nft} />
          </S.CardWrapper>
        </div>
      )),
    };
  }, [nfts]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>();

  return (
    <>
      <NFTCardHeader title={t('nft.recentlyAddedNFTs')}>
        {isTablet && (
          <Row align="middle">
            <Col>
              <ViewAll bordered={false} />
            </Col>

            <Col>
              <S.ArrowBtn type="text" size="small" onClick={() => sliderRef.current && sliderRef.current.slickPrev()}>
                <LeftOutlined />
              </S.ArrowBtn>
            </Col>

            <Col>
              <S.ArrowBtn type="text" size="small" onClick={() => sliderRef.current && sliderRef.current.slickNext()}>
                <RightOutlined />
              </S.ArrowBtn>
            </Col>
          </Row>
        )}
      </NFTCardHeader>

      <S.SectionWrapper>
        {mobileOnly && cards.mobile}

        {isTablet && nfts.length > 0 && (
          <Carousel
            ref={sliderRef}
            slidesToShow={3}
            responsive={[
              {
                breakpoint: 1900,
                settings: {
                  slidesToShow: 2,
                },
              },
            ]}
          >
            {cards.tablet}
          </Carousel>
        )}
      </S.SectionWrapper>

      {mobileOnly && (
        <S.ViewAllWrapper>
          <ViewAll />
        </S.ViewAllWrapper>
      )}
    </>
  );
};
