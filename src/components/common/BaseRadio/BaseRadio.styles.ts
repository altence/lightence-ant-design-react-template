import styled from 'styled-components';
import { Radio as AntdRadio } from 'antd';

export const Radio = styled(AntdRadio)`
  .ant-radio-input:focus-visible + .ant-radio-inner {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb-color), 0.12);
  }

  &.ant-radio-wrapper {
    .ant-radio {
      align-self: inherit;
    }

    .ant-radio-inner,
    .ant-radio-inner::after {
      width: 1rem;
      height: 1rem;
    }

    .ant-radio-inner::after {
      transform: scale(0.5);
      margin-block-start: -0.5rem;
      margin-inline-start: -0.5rem;
    }
  }

  .ant-radio-disabled + span {
    color: var(--disabled-color);
  }
`;

export const RadioButton = styled(AntdRadio.Button)`
  &.ant-radio-button-wrapper:has(:focus-visible) {
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb-color), 0.12);
  }

  &.ant-radio-button-wrapper-disabled {
    color: var(--disabled-color);
  }
`;
