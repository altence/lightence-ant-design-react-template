// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useRef, useState } from 'react';
import * as S from './TrendingCreators.styles';
import { TrendingCreatorsStory } from '@app/components/nft-dashboard/trending-creators/story/TrendingCreatorsStory';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const TrendingCreators: React.FC = () => {
  const [isStoryOpened, setStoryOpened] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [authors] = useState([
    {
      name: 1,
      stories: [
        {
          url: 'https://media.istockphoto.com/photos/african-american-student-attending-webinar-from-home-picture-id1300821205?s=612x612',
        },
        {
          url: 'https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?s=612x612',
        },
      ],
    },
    {
      name: 2,
      stories: [
        {
          url: 'https://media.istockphoto.com/photos/abstract-graphic-world-map-illustration-on-blue-background-big-data-picture-id1294021851?s=612x612',
        },
        {
          url: 'https://media.istockphoto.com/photos/lots-of-multicoloured-cubes-moving-in-space-to-come-together-to-form-picture-id1312818032?s=612x612',
        },
      ],
    },
  ]);

  const sliderRef = useRef(null);

  return (
    <>
      <S.SectionHeader>
        <S.h1>Trending Creators</S.h1>
        <div>
          <S.ViewAll>View all</S.ViewAll>
        </div>
      </S.SectionHeader>
      <S.SectionContent>
        <TrendingCreatorsStory onStoryOpen={() => setStoryOpened(true)} />
        {isStoryOpened ? (
          <div
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              left: 0,
              top: 0,
              zIndex: 999,
            }}
          >
            <Slider
              slidesToShow={1}
              slidesToScroll={1}
              centerMode={false}
              ref={sliderRef}
              arrows={false}
              dots={false}
              lazyLoad="ondemand"
              autoplay={true}
              infinite={false}
            >
              {authors.map((author) => {
                return (
                  <S.StoriesStyled
                    key={author.name}
                    stories={author.stories}
                    defaultInterval={1500}
                    width="100%"
                    height="100%"
                    currentIndex={currentIndex}
                    onAllStoriesEnd={() => {
                      sliderRef.current.slickNext();
                      setCurrentIndex(0);
                    }}
                  />
                );
              })}
            </Slider>
          </div>
        ) : (
          <></>
        )}
      </S.SectionContent>
    </>
  );
};
