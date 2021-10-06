import { Button } from 'antd';
import styled from 'styled-components';

export const Btn = styled(Button)`
  margin: 0.5rem 0 1.5rem 0;
  width: 100%;

  @media only screen and ${(props) => props.theme.media.md} {
    max-width: 10rem;
  }
`;
