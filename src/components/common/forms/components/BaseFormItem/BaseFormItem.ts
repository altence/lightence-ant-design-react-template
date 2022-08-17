import styled, { css } from 'styled-components';
import { Form } from 'antd';
import { media } from '@app/styles/themes/constants';

interface FormItemProps {
  $isSuccess?: boolean;
  $successText?: string;
}

export const BaseFormItem = styled(Form.Item)<FormItemProps>`
  .ant-form-item-label > label {
    color: var(--primary-color);
  }

  .ant-input-group-addon:first-of-type {
    font-weight: 600;
    width: 5rem;

    color: var(--primary-color);

    .anticon,
    svg {
      font-size: 1.25rem;
    }

    @media only screen and ${media.md} {
      width: 5.5rem;
      font-size: 1.125rem;
    }

    @media only screen and ${media.xl} {
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
      color: var(--text-secondary-color);
      background: var(--error-color);
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
          border-color: var(--success-color);
        }
      }

      .ant-form-item-control-input {
        display: block;

        &::after {
          content: '✓ ${props.$successText}';
          color: var(--success-color);
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

  &.ant-form-item-has-error .ant-input,
  &.ant-form-item-has-error .ant-input-affix-wrapper,
  &.ant-form-item-has-error .ant-input:hover,
  &.ant-form-item-has-error .ant-input-affix-wrapper:hover {
    border-color: var(--error-color);
  }

  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input-affix-wrapper,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input:hover,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input-affix-wrapper:hover {
    border-color: var(--success-color);
  }
`;
