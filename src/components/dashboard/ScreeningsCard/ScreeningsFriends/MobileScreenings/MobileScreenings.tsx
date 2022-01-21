import React from 'react';
import { useTheme } from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { CarouselArrow } from '@app/components/common/CarouselArrow/CarouselArrow';
import { ScreeningsProps } from '../interfaces';
import * as S from './MobileScreenings.styles';

export const MobileScreenings: React.FC<ScreeningsProps> = ({ screeningsItems }) => {
  const theme = useTheme();

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
          breakpoint: theme.breakpoints.sm,
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
