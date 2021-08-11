import styled from 'styled-components';
import { Row as AntRow } from 'antd';

export const Row = styled(AntRow)`
  margin-bottom: 1.25rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;
