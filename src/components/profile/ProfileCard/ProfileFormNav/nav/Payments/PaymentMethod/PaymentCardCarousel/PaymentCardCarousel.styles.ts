import { defaultPaddings } from 'constants/defaultPaddings';
import styled from 'styled-components';

interface CarouselWrapperProps {
  length: number | undefined;
  isEnd: boolean;
}

export const CarouselWrapper = styled.div<CarouselWrapperProps>`
  margin: ${(props) =>
    `0 -${!props.isEnd ? defaultPaddings.mobile[1] : 0}px 1.5rem -${props.isEnd ? defaultPaddings.mobile[1] : 0}px`};

  @media only screen and ${(props) => props.theme.media.md} {
    margin: ${(props) =>
      `0 -${!props.isEnd ? defaultPaddings.tablet[1] : 0}px 1.5rem -${props.isEnd ? defaultPaddings.tablet[1] : 0}px`};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin: ${(props) =>
      `0 -${!props.isEnd ? defaultPaddings.desktop[1] : 0}px 1.5rem -${
        props.isEnd ? defaultPaddings.desktop[1] : 0
      }px`};
  }

  & .swiper-slide > div {
    position: relative;
    max-width: 290px;

    @media only screen and ${(props) => props.theme.media.md} {
      max-width: 370px;
    }
  }

  & .rccs {
    width: 100%;
    min-width: 270px;

    @media only screen and ${(props) => props.theme.media.md} {
      min-width: 350px;
      height: 220px;
    }

    & .rccs__card {
      width: 100%;
      min-width: 270px;

      @media only screen and ${(props) => props.theme.media.md} {
        min-width: 350px;
        height: 220px;
      }
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  position: absolute;
  column-gap: 1rem;
  top: 13%;
  right: 7%;

  & > button {
    padding: 0 !important;
    width: unset !important;
    height: unset !important;

    color: ${(props) => props.theme.colors.text.secondary};
  }
`;
