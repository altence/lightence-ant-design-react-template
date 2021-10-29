import styled from 'styled-components';
import { Checkbox as AntCheckbox } from 'antd';

export const Checkbox = styled(AntCheckbox)`
  display: flex;
  color: inherit;
  font-size: inherit;
  flex-direction: row-reverse;

  & > .ant-checkbox {
    margin-left: auto;

    &-checked::after {
      border: 0;
    }

    & > .ant-checkbox-inner {
      background: transparent;
      border: 0;
    }
  }
`;
