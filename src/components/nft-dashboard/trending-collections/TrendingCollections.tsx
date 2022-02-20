// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useRef, useState } from 'react';
import * as S from './TrendingCollections.styles';
import { TrendingCreatorsStory } from '@app/components/nft-dashboard/trending-creators/story/TrendingCreatorsStory';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NftCard } from '@app/components/nft-dashboard/recently-added/nft-card/NftCard';
import { TrendingCollection } from '@app/components/nft-dashboard/trending-collections/collection/TrendingCollection';

export const TrendingCollections: React.FC = () => {
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
        <S.h1>Trending Collections</S.h1>
      </S.SectionHeader>
      <S.SectionContent>
        <TrendingCollection />
        <S.ViewAll>
          <S.ViewAllLink>View All</S.ViewAllLink>
        </S.ViewAll>
      </S.SectionContent>
    </>
  );
};
