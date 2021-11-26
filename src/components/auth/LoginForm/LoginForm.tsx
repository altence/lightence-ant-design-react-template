import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './LoginForm.styles';
import * as Auth from 'components/layouts/auth/AuthLayout.styles';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleSubmit = () => {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <Auth.FormWrapper>
      <Form layout="vertical" onFinish={handleSubmit} requiredMark="optional">
        <Auth.FormTitle>{t('common.login')}</Auth.FormTitle>
        <S.LoginDescription>{t('login.loginInfo')}</S.LoginDescription>
        <Auth.FormItem
          name="email"
          label={t('common.email')}
          rules={[{ required: true, message: t('common.emailError') }]}
        >
          <Auth.FormInput placeholder={t('common.email')} />
        </Auth.FormItem>
        <Auth.FormItem
          label={t('common.password')}
          name="password"
          rules={[{ required: true, message: t('common.passwordError') }]}
        >
          <Auth.FormInputPassword placeholder={t('common.password')} />
        </Auth.FormItem>
        <Auth.ActionsWrapper>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <S.RememberMeText>{t('login.rememberMe')}</S.RememberMeText>
            </Auth.FormCheckbox>
          </Form.Item>
          <Link to="/auth/forgot-password">
            <S.ForgotPasswordText>{t('login.forgotPassword')}</S.ForgotPasswordText>
          </Link>
        </Auth.ActionsWrapper>
        <Form.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit">
            {t('common.login')}
          </Auth.SubmitButton>
        </Form.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {t('login.noAccount')}{' '}
            <Link to="/auth/sign-up">
              <Auth.LinkText>{t('login.signupLink')}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </Form>
    </Auth.FormWrapper>
  );
};
