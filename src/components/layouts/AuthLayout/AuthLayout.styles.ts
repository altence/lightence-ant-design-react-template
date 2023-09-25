import styled from 'styled-components';
import { LeftOutlined } from '@ant-design/icons';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseInput as CommonInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { InputPassword as CommonInputPassword } from '@app/components/common/inputs/InputPassword/InputPassword';
import loginBackground from '@app/assets/images/login-bg.webp';
import { media } from '@app/utils/utils';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';

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
  background-color: rgba(${({ theme }) => theme.rgb.background}, 0.93);
  border-radius: ${({ theme }) => theme.borderRadius};

  @media only screen and (${media('xs')}) {
    padding: 2.5rem 1.25rem;
    width: 20.75rem;
    max-height: calc(100vh - 3rem);
  }

  @media only screen and (${media('md')}) {
    padding: 2.5rem;
    width: 31.75rem;
    max-height: calc(100vh - 3rem);
  }
`;

export const FormTitle = styled.div`
  color: ${({ theme }) => theme.primary};

  @media only screen and (${media('xs')}) {
    margin-bottom: 0.625rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.5625rem;
  }

  @media only screen and (${media('md')}) {
    margin-bottom: 0.875rem;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.9375rem;
  }

  @media only screen and (${media('xl')}) {
    margin-bottom: 0.9375rem;
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
    line-height: 2.125rem;
  }
`;

export const FormCheckbox = styled(BaseCheckbox)`
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
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  & .ant-form-item-label label {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.25rem;
  }

  &.ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 1.5rem;
  }
`;

export const FormInput = styled(CommonInput)`
  color: ${({ theme }) => theme.textMain};
  background: transparent;

  & input.ant-input {
    background: transparent;
  }
`;

export const FormInputPassword = styled(CommonInputPassword)`
  color: ${({ theme }) => theme.textMain};
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
  color: ${({ theme }) => theme.textMain};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const LinkText = styled(Text)`
  text-decoration: underline;
  color: ${({ theme }) => theme.primary};
`;

export const SubmitButton = styled(BaseButton)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  width: 100%;
`;

export const SocialButton = styled(BaseButton)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
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
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  margin-right: 0.75rem;
`;

export const BackWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.25rem;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  margin-right: 0.8125rem;

  @media only screen and (${media('xs')}) {
    margin-right: 0.625rem;
  }

  @media only screen and (${media('md')}) {
    margin-right: 0.8125rem;
  }
`;
