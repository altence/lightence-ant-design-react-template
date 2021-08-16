import styled from 'styled-components';
import { media } from '../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;

  @media only screen and ${media.xxl} {
    height: 350px;
  }
`;
