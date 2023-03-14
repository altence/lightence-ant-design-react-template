import styled from 'styled-components';
import { Radio as AntdRadio } from 'antd';

export const Radio = styled(AntdRadio)`
  .ant-radio-input:focus-visible + .ant-radio-inner {
    outline: none;
    box-shadow: 0 0 0 3px var(--ant-primary-color-outline);
  }

  .ant-radio-disabled + span {
    color: var(--disabled-color);
  }
`;

export const RadioButton = styled(AntdRadio.Button)`
  &.ant-radio-button-wrapper:has(:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 3px var(--ant-primary-color-outline);
  }

  &.ant-radio-button-wrapper-disabled {
    color: var(--disabled-color);
  }
`;
