import { Typography, Form } from 'antd';
import styled, { css } from 'styled-components';

interface FormItemProps {
  $isSuccess?: boolean;
  $successText?: string;
}

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1.125rem;
  }
`;

export const FormList = styled(Form.List)``;

export const FormItem = styled(Form.Item)<FormItemProps>`
  @media only screen and ${(props) => props.theme.media.xl} {
    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }

  & label {
    color: ${(props) => props.theme.colors.main.primary};
  }

  & .ant-input-group-addon:first-of-type {
    font-weight: 600;
    width: 5rem;

    color: ${(props) => props.theme.colors.main.primary};

    @media only screen and ${(props) => props.theme.media.md} {
      width: 5.5rem;
    }
  }

  & .ant-input-suffix {
    margin: 0 0.5rem;

    & button,
    & a {
      padding: 0;
      width: unset;
      height: unset;
      line-height: 1;
    }
  }

  & div[role='alert'] {
    margin: 0.5rem 0;
    line-height: 1;
    display: flex;

    &:before {
      content: 'X';
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      margin: 0 0.25rem;
      color: ${(props) => props.theme.colors.text.secondary};
      background: ${(props) => props.theme.colors.main.error};
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      font-size: 0.5rem;
    }

    &:not(:first-of-type) {
      display: none;
    }
  }

  &.ant-form-item-has-feedback {
    .ant-input-suffix {
      padding-right: 0;
    }

    & .ant-form-item-children-icon {
      display: none;
    }
  }

  ${(props) =>
    props.$isSuccess &&
    css`
      .ant-input {
        &,
        &:hover {
          border-color: ${props.theme.colors.main.success};
        }
      }

      .ant-form-item-control-input {
        display: block;

        &::after {
          content: '✓ ${props.$successText}';
          color: ${props.theme.colors.main.success};
        }
      }
    `}

  & .ant-picker-suffix {
    font-size: 1rem;
  }

  & .ant-select-arrow {
    font-size: 1rem;
    width: unset;
    height: unset;
    top: 50%;
  }

  & .ant-input-group-addon {
    @media only screen and ${(props) => props.theme.media.md} {
      font-size: 1.125rem;
    }

    & > .anticon,
    & > svg {
      font-size: 1.25rem;

      @media only screen and ${(props) => props.theme.media.md} {
        font-size: 1.5rem;
      }
    }
  }

  &.ant-form-item-has-error .ant-input,
  &.ant-form-item-has-error .ant-input-affix-wrapper,
  &.ant-form-item-has-error .ant-input:hover,
  &.ant-form-item-has-error .ant-input-affix-wrapper:hover {
    border-color: ${(props) => props.theme.colors.main.error};
  }

  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input-affix-wrapper,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input:hover,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input-affix-wrapper:hover {
    border-color: ${(props) => props.theme.colors.main.success};
  }
`;
