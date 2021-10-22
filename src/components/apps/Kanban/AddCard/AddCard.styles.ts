import { MinusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

export const TagWrapper = styled.div`
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
`;

export const Btn = styled(Button)`
  width: 100%;
`;

export const RemoveCard = styled(MinusCircleOutlined)`
  top: 0;
  right: 0;
  position: absolute;
`;
