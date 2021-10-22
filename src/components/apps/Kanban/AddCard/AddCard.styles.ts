import { MinusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { hexToRGB } from 'helpers/hexToRGB';
import styled from 'styled-components';

export const TagWrapper = styled.div`
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
`;

export const Btn = styled(Button)`
  width: 100%;
`;

export const RemoveCard = styled(MinusCircleOutlined)`
  top: 5px;
  right: 5px;
  position: absolute;
`;

export const AddBtn = styled(Btn)`
  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.3)};
`;
