import styled from 'styled-components';
import { Button } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;

  & > div {
    width: 50%;
  }
`;

export const Btn = styled(Button)`
  color: inherit;
  font-size: 1rem;
  font-weight: 600;
  padding: 0;
  height: unset;
`;
