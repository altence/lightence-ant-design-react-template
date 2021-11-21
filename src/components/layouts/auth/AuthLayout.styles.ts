import styled from 'styled-components';
import { Typography, Checkbox, Form, Button } from 'antd';
import loginBackground from 'assets/images/login-bg.webp';
import theme from 'styles/theme';
import { hexToRGB } from 'utils/utils';
import { Input as CommonInput } from 'components/common/inputs/Input/Input';
import { InputPassword as CommonInputPassword } from 'components/common/inputs/InputPassword/InputPassword';

export const Wrapper = styled.div`
  font-family: Poppins, sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${loginBackground});
  background-size: cover;
  position: relative;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Copyright = styled(Typography.Text)`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.625rem;

  color: ${(props) => hexToRGB(props.theme.colors.text.secondary, 0.7)};

  @media only screen and ${theme.media.xl} {
    color: ${(props) => props.theme.colors.text.light};
  }
`;

export const FormWrapper = styled.div`
  padding: 2.5rem;
  width: 31.75rem;
  background-color: ${(props) => hexToRGB(props.theme.colors.main.mainBackground, 0.93)};
  border-radius: ${(props) => props.theme.border.radius};

  @media only screen and ${theme.media.xs} {
    padding: 2.5rem 1.25rem;
    width: 20.75rem;
  }

  @media only screen and ${theme.media.md} {
    padding: 2.5rem;
    width: 31.75rem;
  }

  @media only screen and ${theme.media.xl} {
    padding: 2.5rem;
    width: 31.75rem;
  }
`;

export const FormTitle = styled.div`
  color: ${(props) => props.theme.colors.main.primary};

  @media only screen and ${theme.media.xs} {
    margin-bottom: 0.625rem;
    font-size: ${(props) => props.theme.commonFontSizes.lg};
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
    line-height: 1.5625rem;
  }

  @media only screen and ${theme.media.md} {
    margin-bottom: 0.875rem;
    font-size: ${(props) => props.theme.commonFontSizes.xxl};
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
    line-height: 1.9375rem;
  }

  @media only screen and ${theme.media.xl} {
    margin-bottom: 0.9375rem;
    font-size: ${(props) => props.theme.commonFontSizes.xxxl};
    font-weight: ${(props) => props.theme.commonFontWeight.extraBold};
    line-height: 2.125rem;
  }
`;

export const FormCheckbox = styled(Checkbox)`
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

export const FormInput = styled(CommonInput)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  color: ${(props) => props.theme.colors.text.main};
  background: transparent;

  & input.ant-input {
    background: transparent;
  }
`;

export const FormInputPassword = styled(CommonInputPassword)`
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

export const Text = styled.span`
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.regular};
`;

export const LinkText = styled(Text)`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.main.primary};
`;

export const SubmitButton = styled(Button)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  width: 100%;
`;

export const FooterWrapper = styled.div`
  margin-top: 1.25rem;
  text-align: center;
`;
