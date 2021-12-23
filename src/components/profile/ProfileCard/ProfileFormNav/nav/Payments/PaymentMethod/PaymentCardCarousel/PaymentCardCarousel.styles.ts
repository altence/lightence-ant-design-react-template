import { defaultPaddings } from 'constants/defaultPaddings';
import styled from 'styled-components';

interface CarouselWrapperProps {
  cardWidth: number | undefined;
}

export const CarouselWrapper = styled.div<CarouselWrapperProps>`
  margin: ${`0 -${defaultPaddings.mobile[1]}px 1.5rem -${defaultPaddings.mobile[1]}px`};

  @media only screen and ${(props) => props.theme.media.md} {
    margin: ${`0 -${defaultPaddings.tablet[1]}px 1.5rem -${defaultPaddings.tablet[1]}px`};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin: ${`0 -${defaultPaddings.desktop[1]}px 1.5rem -${defaultPaddings.desktop[1]}px`};
  }

  .slick-track > div > div {
    position: relative;
    margin: 0 0.5rem;
  }

  .rccs {
    width: 100%;
    height: ${(props) => (props.cardWidth ? `${props.cardWidth / 1.75}px` : '190px')};

    .rccs__card {
      width: 100%;
      height: ${(props) => (props.cardWidth ? `${props.cardWidth / 1.75}px` : '190px')};

      .rccs__number {
        font-size: ${(props) => (props.cardWidth ? `${props.cardWidth / 13}px` : '12px')};
      }

      .rccs__name {
        font-size: ${(props) => (props.cardWidth ? `${props.cardWidth / 15}px` : '14px')};
      }

      .rccs__expiry__valid {
        font-size: ${(props) => (props.cardWidth ? `${props.cardWidth / 27.5}px` : '8px')};
      }

      .rccs__expiry__value {
        font-size: ${(props) => (props.cardWidth ? `${props.cardWidth / 18}px` : '12px')};
      }
    }
  }
`;
