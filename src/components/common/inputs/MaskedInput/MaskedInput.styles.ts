import styled from 'styled-components';
import AntdMaskedInput from 'antd-mask-input';

export const MaskedInput = styled(AntdMaskedInput)`
  &.ant-input {
    font-family: inherit;
    color: var(--text-main-color);
    background-color: var(--background-color);
    padding: 11.4px 11px;
    border: 1px solid var(--border-base-color);
    border-radius: 7px;

    &::placeholder {
      color: var(--input-placeholder-color);
    }
  }
`;
