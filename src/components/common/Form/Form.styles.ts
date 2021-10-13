import { Typography, Form } from 'antd';
import { hexToRGB } from 'helpers/hexToRGB';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1.125rem;
  }
`;

export const FormItem = styled(Form.Item)`
  @media only screen and ${(props) => props.theme.media.xl} {
    margin-bottom: 2rem;
  }

  & label {
    font-weight: 500;
    font-size: 0.85rem;

    color: ${(props) => props.theme.colors.main.primary};
  }

  & .ant-input-group-addon {
    font-weight: 600;
    width: 4.75rem;

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
  }

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
    border-color: ${(props) => props.theme.colors.main.additional};
  }

  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input-affix-wrapper,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input:hover,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input-affix-wrapper:hover {
    border-color: ${(props) => props.theme.colors.main.additional3};
  }
`;
