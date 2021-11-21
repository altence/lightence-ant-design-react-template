import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './LoginForm.styles';
import {
  FormWrapper,
  FormTitle,
  FormCheckbox,
  FormItem,
  FormInput,
  FormInputPassword,
  ActionsWrapper,
  Text,
  LinkText,
  SubmitButton,
  FooterWrapper,
} from 'components/layouts/auth/AuthLayout.styles';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleSubmit = () => {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <FormWrapper>
      <Form layout="vertical" onFinish={handleSubmit} requiredMark="optional">
        <FormTitle>{t('common.login')}</FormTitle>
        <S.LoginDescription>{t('login.loginInfo')}</S.LoginDescription>
        <FormItem name="email" label={t('common.email')} rules={[{ required: true, message: t('common.emailError') }]}>
          <FormInput placeholder={t('common.email')} />
        </FormItem>
        <FormItem
          label={t('common.password')}
          name="password"
          rules={[{ required: true, message: t('common.passwordError') }]}
        >
          <FormInputPassword placeholder={t('common.password')} />
        </FormItem>
        <ActionsWrapper>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <FormCheckbox>
              <S.RememberMeText>{t('login.rememberMe')}</S.RememberMeText>
            </FormCheckbox>
          </Form.Item>
          <Link to="/forgot-password">
            <S.ForgotPasswordText>{t('login.forgotPassword')}</S.ForgotPasswordText>
          </Link>
        </ActionsWrapper>
        <Form.Item noStyle>
          <SubmitButton type="primary" htmlType="submit">
            {t('common.login')}
          </SubmitButton>
        </Form.Item>
        <FooterWrapper>
          <Text>
            {t('login.noAccount')}{' '}
            <Link to="/signup">
              <LinkText>{t('login.signupLink')}</LinkText>
            </Link>
          </Text>
        </FooterWrapper>
      </Form>
    </FormWrapper>
  );
};
