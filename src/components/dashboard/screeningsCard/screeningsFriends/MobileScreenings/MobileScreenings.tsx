import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { CarouselArrow } from '@app/components/common/CarouselArrow/CarouselArrow';
import { ScreeningsProps } from '../interfaces';
import * as S from './MobileScreenings.styles';
import { BREAKPOINTS } from '@app/styles/themes/constants';

export const MobileScreenings: React.FC<ScreeningsProps> = ({ screeningsItems }) => {
  return (
    <S.ScreeningsCarousel
      centerMode={false}
      infinite={false}
      arrows
      prevArrow={
        <CarouselArrow>
          <ArrowLeftOutlined />
        </CarouselArrow>
      }
      nextArrow={
        <CarouselArrow>
          <ArrowRightOutlined />
        </CarouselArrow>
      }
      slidesToShow={6}
      responsive={[
        {
          breakpoint: BREAKPOINTS.sm,
          settings: {
            slidesToShow: 5,
          },
        },
      ]}
    >
      {screeningsItems}
    </S.ScreeningsCarousel>
  );
};
