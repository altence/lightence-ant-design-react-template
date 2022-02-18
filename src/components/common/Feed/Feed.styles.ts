import { media } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 1.25rem;

    @media only screen and ${media.xl} {
      margin-bottom: 1.5rem;
    }

    @media only screen and ${media.xxl} {
      margin-bottom: 2.5rem;
    }
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
`;
