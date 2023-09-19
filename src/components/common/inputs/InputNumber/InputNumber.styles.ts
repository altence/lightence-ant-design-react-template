import { InputNumber as AntInputNumber } from 'antd';
import styled, { css } from 'styled-components';

interface InputNumberProps {
  $block?: boolean;
}

export const InputNumber = styled(AntInputNumber)<InputNumberProps>`
  ${(props) =>
    props.$block &&
    css`
      display: block;
      width: 100%;
    `}
`;
