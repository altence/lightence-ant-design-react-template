import styled from 'styled-components';
import { Switch as AntSwitch } from 'antd';

export const Switch = styled(AntSwitch)`
  &.ant-switch-checked:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary1};
  }

  &.ant-switch[aria-checked='false'] {
    background-image: ${({ theme }) => `linear-gradient(to right, ${theme.disabled}, ${theme.disabled})`},
      ${({ theme }) => `linear-gradient(to right, ${theme.background}, ${theme.background})`};
  }
`;
