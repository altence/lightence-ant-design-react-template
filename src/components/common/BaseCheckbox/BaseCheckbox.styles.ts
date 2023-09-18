import styled from 'styled-components';
import { Checkbox as AntCheckbox } from 'antd';

const { Group } = AntCheckbox;

export const Checkbox = styled(AntCheckbox)`
  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid ${({ theme }) => theme.primary};
  }

  .ant-checkbox-disabled .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.borderBase};
  }

  &.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: ${({ theme }) => theme.disabled};
  }
`;

export const CheckboxGroup = styled(Group)`
  .ant-form-vertical &.ant-checkbox-group {
    display: inline-block;
  }

  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
