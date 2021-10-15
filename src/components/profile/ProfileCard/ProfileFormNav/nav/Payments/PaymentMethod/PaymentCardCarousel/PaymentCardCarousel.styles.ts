import styled, { css } from 'styled-components';

interface SliderWrapperProps {
  length: number | undefined;
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  margin-bottom: 1.5rem;

  & .rccs {
    width: 100%;

    & .rccs__card {
      width: 100%;
    }
  }

  @media only screen and ${(props) => props.theme.media.md} {
    ${(props) =>
      props.length &&
      props.length === 1 &&
      css`
        & .swiper-slide {
          display: flex;
          justify-content: center;

          & > div {
            display: inline-block;
            position: relative;
          }
        }
      `}

    & .rccs {
      width: ${(props) => (props.length && props.length > 1 ? '100%' : '290px')};

      & .rccs__card {
        width: ${(props) => (props.length && props.length > 1 ? '100%' : '290px')};
      }
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  & > button {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

/* & .rccs {
    ${(props) =>
    props.length &&
    props.length > 1 &&
    css`
      width: 100%;
      height: 150px;
    `};

    @media only screen and ${(props) => props.theme.media.md} {
      width: 290px;
    }

    & > .rccs__card {
      ${(props) =>
    props.length &&
    props.length > 1 &&
    css`
      width: 100%;
      height: 150px;
    `};

      @media only screen and ${(props) => props.theme.media.md} {
        width: 290px;
      }
    }
  } */
