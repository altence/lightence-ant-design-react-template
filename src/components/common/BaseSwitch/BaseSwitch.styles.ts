import styled from 'styled-components';
import { Switch as AntdSwitch } from 'antd';

export const Switch = styled(AntdSwitch)`
  &.ant-switch-checked:focus {
    box-shadow: 0 0 0 2px var(--ant-primary-1);
  }

  &.ant-switch[aria-checked='false'] {
    background-image: linear-gradient(to right, var(--disabled-color), var(--disabled-color)),
      linear-gradient(to right, var(--background-color), var(--background-color));
  }
`;
