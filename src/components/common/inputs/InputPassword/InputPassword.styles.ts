import styled from 'styled-components';
import { BaseInput } from '../BaseInput/BaseInput';

export const InputPassword = styled(BaseInput.Password)`
  .ant-input-password-icon.anticon {
    color: var(--disabled-color);
    &:hover {
      color: var(--text-main-color);
    }
  }
`;
