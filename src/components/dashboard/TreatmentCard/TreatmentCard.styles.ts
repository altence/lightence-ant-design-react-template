import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;

  @media only screen and ${theme.media.xxl} {
    height: 350px;
  }
`;
