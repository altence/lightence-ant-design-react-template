import { defaultPaddings } from 'constants/defaultPaddings';
import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  margin: ${`0 -${defaultPaddings.mobile[1]}px 1.5rem -${defaultPaddings.mobile[1]}px`};

  @media only screen and ${(props) => props.theme.media.md} {
    margin: ${`0 -${defaultPaddings.tablet[1]}px 1.5rem -${defaultPaddings.tablet[1]}px`};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin: ${`0 -${!defaultPaddings.desktop[1]}px 1.5rem -${defaultPaddings.desktop[1]}px`};
  }

  .slick-track > div > div {
    position: relative;
    margin: 0 1rem;
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
