import { defaultPaddings } from 'constants/defaultPaddings';
import styled, { css } from 'styled-components';

interface SliderWrapperProps {
  length: number | undefined;
  currentSlide: number;
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  margin: 0 -${defaultPaddings.mobile[1]}px 1.5rem -${defaultPaddings.mobile[1]}px;

  @media only screen and ${(props) => props.theme.media.md} {
    margin: 0 -${defaultPaddings.tablet[1]}px 1.5rem -${defaultPaddings.tablet[1]}px;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin: 0 -${defaultPaddings.desktop[1]}px 1.5rem -${defaultPaddings.desktop[1]}px;
  }

  & .swiper-slide > div {
    position: relative;
    max-width: 290px;
  }

  & .rccs {
    width: 100%;
    min-width: 270px;

    & .rccs__card {
      width: 100%;
      min-width: 270px;
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  position: absolute;
  column-gap: 1rem;
  top: 10px;
  right: 20px;

  & > button {
    padding: 0;
    width: unset;
    height: unset;

    color: ${(props) => props.theme.colors.text.secondary};
  }
`;
