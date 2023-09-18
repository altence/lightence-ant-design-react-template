import styled from 'styled-components';
import { Radio as AntRadio } from 'antd';

export const Radio = styled(AntRadio)`
  .ant-radio-input:focus-visible + .ant-radio-inner {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px rgba(${({ theme }) => theme.rgb.primary}, 0.12);
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
    color: ${({ theme }) => theme.disabled};
  }
`;

export const RadioButton = styled(AntRadio.Button)`
  &.ant-radio-button-wrapper:has(:focus-visible) {
    box-shadow: 0 0 0 3px rgba(${({ theme }) => theme.rgb.primary}, 0.12);
  }

  &.ant-radio-button-wrapper-disabled {
    color: ${({ theme }) => theme.disabled};
  }
`;
