import styled from 'styled-components';
import { Checkbox, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { Input as CommonInput } from '@app/components/common/inputs/Input/Input';
import { InputPassword as CommonInputPassword } from '@app/components/common/inputs/InputPassword/InputPassword';
import { hexToRGB } from '@app/utils/utils';
import loginBackground from '@app/assets/images/login-bg.webp';

export const Wrapper = styled.div`
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

export const FormWrapper = styled.div`
  padding: 2.5rem;
  width: 31.75rem;
  overflow: auto;
  background-color: ${(props) => hexToRGB(props.theme.colors.main.mainBackground, 0.93)};
  border-radius: ${(props) => props.theme.border.radius};

  @media only screen and ${(props) => props.theme.media.xs} {
    padding: 2.5rem 1.25rem;
    width: 20.75rem;
    max-height: calc(100vh - 3rem);
  }

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 2.5rem;
    width: 31.75rem;
    max-height: calc(100vh - 3rem);
  }
`;

export const FormTitle = styled.div`
  color: ${(props) => props.theme.colors.main.primary};

  @media only screen and ${(props) => props.theme.media.xs} {
    margin-bottom: 0.625rem;
    font-size: ${(props) => props.theme.commonFontSizes.lg};
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
    line-height: 1.5625rem;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    margin-bottom: 0.875rem;
    font-size: ${(props) => props.theme.commonFontSizes.xxl};
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
    line-height: 1.9375rem;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
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

export const FormItem = styled(BaseForm.Item)`
  margin-bottom: 0.75rem;
  & .ant-form-item-control-input {
    min-height: 3.125rem;
  }

  & .ant-form-item-explain-error {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  & label {
    color: ${(props) => props.theme.colors.main.primary};
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    line-height: 1.25rem;
  }

  &.ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 1.5rem;
  }
`;

export const FormInput = styled(CommonInput)`
  color: ${(props) => props.theme.colors.text.main};
  background: transparent;

  & input.ant-input {
    background: transparent;
  }
`;

export const FormInputPassword = styled(CommonInputPassword)`
  color: ${(props) => props.theme.colors.text.main};
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

export const SocialButton = styled(Button)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  color: ${(props) => props.theme.colors.main.primary};
  border: ${(props) => `1px solid ${props.theme.colors.main.primary}`};
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const FooterWrapper = styled.div`
  margin-top: 1.25rem;
  text-align: center;
`;

export const BackIcon = styled(LeftOutlined)`
  font-size: 0.75rem;
  margin-right: 0.75rem;
`;

export const BackWrapper = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.25rem;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  margin-right: 0.8125rem;
  @media only screen and ${(props) => props.theme.media.xs} {
    margin-right: 0.625rem;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    margin-right: 0.8125rem;
  }
`;
