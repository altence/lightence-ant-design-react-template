import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NotFound } from '@app/components/common/NotFound/NotFound';
import { NFTCardHeader } from '@app/components/nft-dashboard/common/NFTCardHeader/NFTCardHeader';
import { ViewAll } from '@app/components/nft-dashboard/common/ViewAll/ViewAll';
import { NftCard } from '@app/components/nft-dashboard/recently-added/nft-card/NftCard';
import { getRecentlyAddedNfts, NftItem } from '@app/api/nftDashboard.api';
import * as S from './RecentlyAddedNft.styles';
import { Carousel } from '@app/components/common/Carousel/Carousel';
import { useResponsive } from '@app/hooks/useResponsive';
import { Col, Row } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

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
      mobile: nfts.map((nft) => <NftCard key={nft.title} nftItem={nft} />),
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
      </NFTCardHeader>

      <S.SectionContent>
        {mobileOnly && <S.SectionWrapper>{nfts.length > 0 ? cards.mobile : <NotFound />}</S.SectionWrapper>}

        {isTablet && (
          <Carousel ref={sliderRef} slidesToShow={2}>
            {cards.tablet}
          </Carousel>
        )}
      </S.SectionContent>

      {mobileOnly && (
        <S.ViewAllWrapper>
          <ViewAll />
        </S.ViewAllWrapper>
      )}
    </>
  );
};
