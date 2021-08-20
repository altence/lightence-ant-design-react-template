import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div:first-of-type {
    margin-bottom: 0.625rem;

    @media only screen and ${theme.media.md} {
      margin-bottom: 0;
      margin-right: 0.625rem;
    }

    @media only screen and ${theme.media.xl} {
      margin-right: 0.875rem;
    }

    @media only screen and ${theme.media.xxl} {
      margin-right: 1.25rem;
    }
  }
`;
