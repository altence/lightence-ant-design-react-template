import { Button } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1rem;
  }
`;

export const AddBtn = styled(Button)`
  width: 100%;

  @media only screen and ${(props) => props.theme.media.md} {
    max-width: 15rem;
  }
`;
