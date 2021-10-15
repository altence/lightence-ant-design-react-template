import styled, { css } from 'styled-components';

interface SliderWrapperProps {
  length: number | undefined;
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  margin-bottom: 1.5rem;

  & .rccs {
    width: 100%;

    height: ${(props) => props.length && props.length > 1 && '150px'};

    & .rccs__card {
      width: 100%;

      height: ${(props) => props.length && props.length > 1 && '150px'};
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

      height: ${(props) => props.length && props.length > 2 && '150px'};

      & .rccs__card {
        width: ${(props) => (props.length && props.length > 1 ? '100%' : '290px')};

        height: ${(props) => props.length && props.length > 2 && '150px'};
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
