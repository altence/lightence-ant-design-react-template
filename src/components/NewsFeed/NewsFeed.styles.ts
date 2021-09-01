import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const NewsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    margin-bottom: 1rem;

    @media only screen and ${theme.media.xl} {
      margin-bottom: 1.5rem;
    }

    @media only screen and ${theme.media.xxl} {
      margin-bottom: 2.5rem;
    }
  }

  & > div:first-of-type {
    @media only screen and ${theme.media.xl} {
      margin-right: 0.875rem;
    }

    @media only screen and ${theme.media.xxl} {
      margin-right: 1.25rem;
    }
  }
`;
