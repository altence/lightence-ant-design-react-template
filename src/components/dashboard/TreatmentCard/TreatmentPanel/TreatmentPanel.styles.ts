import styled from 'styled-components';
import { media } from '../../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media only screen and ${media.md} {
    width: calc(55% - 0.25rem);
  }
`;
