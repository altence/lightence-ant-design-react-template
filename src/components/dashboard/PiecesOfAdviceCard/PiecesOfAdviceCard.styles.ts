import styled from 'styled-components';
import { media } from '../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div:first-of-type {
    margin-bottom: 0.625rem;

    @media only screen and ${media.md} {
      margin-bottom: 0;
      margin-right: 0.625rem;
    }

    @media only screen and ${media.xl} {
      margin-right: 0.875rem;
    }
  }
`;
