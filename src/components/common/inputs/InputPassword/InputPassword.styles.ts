import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const InputPassword = styled(AntInput.Password)`
  .ant-input-password-icon.anticon {
    color: var(--disabled-color);
    &:hover {
      color: var(--text-main-color);
    }
  }
`;
