import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media only screen and ${theme.media.md} {
    width: calc(55% - 0.25rem);
  }
`;
