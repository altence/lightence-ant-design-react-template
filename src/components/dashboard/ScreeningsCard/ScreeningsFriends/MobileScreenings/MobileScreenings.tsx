import React, { useContext } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { CarouselArrow } from 'components/common/CarouselArrow/CarouselArrow';
import { ScreeningsProps } from '../interfaces';
import * as S from './MobileScreenings.styles';
import { ThemeContext } from 'styled-components';

export const MobileScreenings: React.FC<ScreeningsProps> = ({ screeningsItems }) => {
  const theme = useContext(ThemeContext);

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
