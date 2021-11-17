import styled from 'styled-components';
import { Button, Typography, Form, Checkbox } from 'antd';
import { Input as CommonInput } from 'components/common/inputs/Input/Input';
import { InputPassword as CommonInputPassword } from 'components/common/inputs/InputPassword/InputPassword';
import theme from 'styles/theme';

export const LoginDescription = styled.div`
  margin-bottom: 1.875rem;
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  @media only screen and ${theme.media.xs} {
    margin-bottom: 1.5625rem;
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
  }

  @media only screen and ${theme.media.md} {
    margin-bottom: 1.75rem;
    font-weight: ${(props) => props.theme.commonFontWeight.regular};
  }

  @media only screen and ${theme.media.xl} {
    margin-bottom: 1.875rem;
    font-weight: ${(props) => props.theme.commonFontWeight.regular};
  }
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

export const InputPassword = styled(CommonInputPassword)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  color: ${(props) => props.theme.colors.text.main};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  background: transparent;

  & input.ant-input {
    background: transparent;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const CheckBox = styled(Checkbox)`
  display: flex;
  padding-left: 0.125rem;

  & .ant-checkbox-inner {
    border-radius: 3px;
    transform: scale(1.375);
  }

  & .ant-checkbox-input {
    transform: scale(1.375);
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.regular};
`;

export const RememberMeText = styled.span`
  color: ${(props) => props.theme.colors.main.primary};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const ForgotPasswordText = styled.span`
  color: ${(props) => props.theme.colors.text.light};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  text-decoration: underline;
`;

export const SubmitButton = styled(Button)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  width: 100%;
`;

export const SignupWrapper = styled.div`
  margin-top: 1.25rem;
  text-align: center;
`;

export const SignupText = styled(Typography.Text)`
  text-decoration: underline;

  color: ${(props) => props.theme.colors.main.primary};
`;
