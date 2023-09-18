import styled, { css } from 'styled-components';
import { Form, FormItemProps } from 'antd';
import { media } from '@app/utils/utils';

interface InternalFormItemProps {
  $isSuccess?: boolean;
  $successText?: string;
}

export type BaseFormItemProps = FormItemProps;

export const BaseFormItem = styled(Form.Item as React.FC<FormItemProps>)<InternalFormItemProps>`
  .ant-input {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  .ant-input:disabled {
    color: ${({ theme }) => theme.disabled};
    background-color: ${({ theme }) => theme.disabledBg};
    cursor: not-allowed;
  }

  .ant-form-item-label > label {
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fontSizes.xs};

    .ant-form-item-optional {
      color: ${({ theme }) => theme.subText};
    }
  }

  .ant-input-group-addon:first-of-type {
    font-weight: 600;
    width: 5rem;
    color: ${({ theme }) => theme.primary};

    .anticon,
    svg {
      font-size: 1.25rem;
    }

    @media only screen and (${media('md')}) {
      width: 5.5rem;
      font-size: 1.125rem;
    }

    @media only screen and (${media('xl')}) {
      font-size: 1.5rem;
    }
  }

  .ant-input-suffix .ant-btn {
    padding: 0;
    width: unset;
    height: unset;
    line-height: 1;
  }

  .ant-form-item-explain-error {
    display: flex;
    margin: 0.5rem 0;
    line-height: 1;

    &:before {
      content: 'X';
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      margin: 0 0.25rem;
      color: ${({ theme }) => theme.textSecondary};
      background: ${({ theme }) => theme.error};
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      font-size: 0.5rem;
    }

    &:not(:first-of-type) {
      display: none;
    }
  }

  ${(props) =>
    props.$isSuccess &&
    css`
      .ant-input {
        &,
        &:hover {
          border-color: ${({ theme }) => theme.success};
        }
      }

      .ant-form-item-control-input {
        display: block;

        &::after {
          content: '✓ ${props.$successText}';
          color: ${({ theme }) => theme.success};
        }
      }
    `}

  &.ant-form-item-has-feedback .ant-form-item-children-icon {
    display: none;
  }

  .ant-picker-suffix {
    font-size: 1rem;
  }

  .ant-select-arrow {
    font-size: 1rem;
    width: unset;
    height: unset;
    top: 50%;
  }

  &.ant-form-item-has-error {
    .ant-input,
    .ant-input-affix-wrapper,
    .ant-input:hover,
    .ant-input-affix-wrapper:hover {
      border-color: ${({ theme }) => theme.error};
    }
  }

  &.ant-form-item-has-success.ant-form-item-has-feedback {
    .ant-input,
    .ant-input-affix-wrapper,
    .ant-input:hover,
    .ant-input-affix-wrapper:hover {
      border-color: ${({ theme }) => theme.success};
    }
  }

  & .ant-form-item-row {
    flex-wrap: inherit;
  }
`;
