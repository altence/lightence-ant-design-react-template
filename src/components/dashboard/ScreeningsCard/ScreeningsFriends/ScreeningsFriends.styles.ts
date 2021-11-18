import styled from 'styled-components';
import { Typography } from 'antd';
import { dashboardPaddings } from 'components/dashboard/DashboardCard/DashboardCard';
import { hexToRGB } from 'utils/utils';
import { Carousel } from 'components/common/Carousel/Carousel';

export const Wrapper = styled.div`
  padding: 0.9375rem;
  position: relative;

  background-color: ${(props) => props.theme.colors.main.mainBackground};

  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.25rem;

    margin: 0 ${dashboardPaddings.md.split(' ')[1]};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    position: absolute;
    width: 25rem;
    height: 20rem;
    margin: 0;
    z-index: 2;

    background-color: ${(props) => hexToRGB(props.theme.colors.main.mainBackground, 0.9)};
  }
`;

export const Title = styled(Typography.Text)`
  font-weight: ${(props) => props.theme.commonFontWeight.bold};

  font-size: ${(props) => props.theme.commonFontSizes.lg};
`;

export const ScreeningsCarousel = styled(Carousel)`
  & .slick-track {
  }

  & .slick-disabled {
    display: none !important;
  }

  & .slick-arrow {
    font-size: 1rem;
  }
`;
