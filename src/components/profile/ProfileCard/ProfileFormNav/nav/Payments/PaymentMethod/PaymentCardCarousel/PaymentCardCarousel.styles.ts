import styled from 'styled-components';

interface SliderWrapperProps {
  length: number | undefined;
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  margin-bottom: 1.5rem;

  & .swiper-slide {
    display: flex;
  }

  & .swiper-slide > div {
    position: relative;
  }

  & .rccs {
    width: 100%;
    min-width: 240px;
    height: 150px;

    & .rccs__card {
      width: 100%;
      min-width: 240px;
      height: 150px;
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
