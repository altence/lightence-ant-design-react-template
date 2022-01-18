import { MinusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const RemoveBtn = styled(MinusCircleOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-150%);
`;
