import React, { useEffect, useRef, useState } from 'react';
import Stories from 'react-insta-stories';
import Slider from 'react-slick';
import { Col, Row } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Carousel } from '@app/components/common/Carousel/Carousel';
import { NFTCardHeader } from '@app/components/nft-dashboard/common/NFTCardHeader/NFTCardHeader';
import { ViewAll } from '@app/components/nft-dashboard/common/ViewAll/ViewAll';
import { TrendingCreatorsStory } from '@app/components/nft-dashboard/trending-creators/story/TrendingCreatorsStory';
import { useResponsive } from '@app/hooks/useResponsive';
import { getTrendingCreators, TrendingCreator } from '@app/api/trendingCreators';
import * as S from './TrendingCreators.styles';

export const TrendingCreators: React.FC = () => {
  const [isStoryOpened, setStoryOpened] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [stories, setStories] = useState<TrendingCreator[]>([]);
  const [key, setKey] = useState(Math.random());

  const { isTablet: isTabletOrHigher } = useResponsive();
  const { t } = useTranslation();
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    getTrendingCreators().then((res) => setStories(res));
  }, []);

  return (
    <>
      <NFTCardHeader title={t('nft.trendingCreators')}>
        <Row align="middle">
          <Col>
            <ViewAll bordered={false} />
          </Col>

          {isTabletOrHigher && (
            <>
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
            </>
          )}
        </Row>
      </NFTCardHeader>

      <S.SectionContent>
        <Carousel
          slidesToShow={9}
          ref={sliderRef}
          centerMode={false}
          infinite={false}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 8,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 7,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 6,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 4,
              },
            },
          ]}
        >
          {stories.map((story, index) => (
            <div key={index}>
              <S.CardWrapper>
                <TrendingCreatorsStory
                  img={story.header.profileImage}
                  viewed={story.viewed}
                  onStoryOpen={() => {
                    setStoryIndex(index);
                    setStoryOpened(true);
                  }}
                />
              </S.CardWrapper>
            </div>
          ))}
        </Carousel>
      </S.SectionContent>

      {isStoryOpened && (
        <S.StoriesModal
          visible={isStoryOpened}
          onCancel={() => {
            setStories((prevStories) =>
              prevStories.sort((a, b) => {
                return Number(a.viewed) - Number(b.viewed);
              }),
            );
            setStoryOpened(false);
            setKey(Math.random());
          }}
          footer={null}
          closable={false}
          destroyOnClose
        >
          <Stories
            key={key}
            currentIndex={storyIndex}
            stories={stories}
            defaultInterval={2000}
            keyboardNavigation
            width="100%"
            height={500}
            onStoryEnd={(storyNumber: number) =>
              setStories((prevStories) => {
                const storiesCopy = [...prevStories];
                storiesCopy.splice(storyNumber, 1, { ...prevStories[storyNumber], viewed: true });

                return storiesCopy;
              })
            }
            onAllStoriesEnd={() => {
              setStoryOpened(false);
            }}
          />
        </S.StoriesModal>
      )}
    </>
  );
};
