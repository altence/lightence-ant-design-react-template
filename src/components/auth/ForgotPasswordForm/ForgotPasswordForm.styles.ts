import styled from 'styled-components';
import { Button, Typography, Form, Checkbox } from 'antd';
import { Input as CommonInput } from 'components/common/inputs/Input/Input';
import { LeftOutlined } from '@ant-design/icons';
import theme from 'styles/theme';

export const BackIcon = styled(LeftOutlined)`
  font-size: 0.75rem;
  margin-right: 0.75rem;
`;

export const ResetPasswordDescription = styled.div`
  margin-bottom: 1.875rem;
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.regular};

  @media only screen and ${theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xxs};
  }

  @media only screen and ${theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  @media only screen and ${theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const Text = styled(Typography.Text)`
  display: block;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: 0.75rem;
  position: relative;

  & .ant-form-item-control-input {
    min-height: 3.125rem;
  }

  & .ant-form-item-explain {
    position: absolute;
    font-size: 0.68rem;
    top: 110%;

    color: ${(props) => props.theme.colors.main.error};
  }

  & label {
    color: ${(props) => props.theme.colors.main.primary};
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    line-height: 1.25rem;
  }
`;

export const Input = styled(CommonInput)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  color: ${(props) => props.theme.colors.text.main};
  background: transparent;

  & input.ant-input {
    background: transparent;
  }
`;

export const CheckBox = styled(Checkbox)`
  display: flex;
  align-items: center;

  & .ant-checkbox-inner {
    border-radius: 4px;
  }
`;

export const SubmitButton = styled(Button)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  width: 100%;
  margin-top: 1.125rem;
  margin-bottom: 1rem;
`;

export const BackWrapper = styled.div`
  margin-top: 1rem;
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.25rem;
`;
