import styled from 'styled-components';
import { default as AntIcon } from '@ant-design/icons';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const Icon = styled(AntIcon)`
  position: absolute;
  top: 0;
  right: 0;
`;
