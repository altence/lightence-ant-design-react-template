import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import * as S from './LoginForm.styles';
import * as Auth from 'components/layouts/auth/AuthLayout.styles';
import { login, TokenData } from 'api/auth.api';
import { setAuthDataToLocalStorage } from 'services/auth.service';
import { notificationController } from '@app/controllers/notificationController';

interface LoginFormData {
  email: string;
  password: string;
}

export const initValues: LoginFormData = {
  email: 'hello@altence.com',
  password: 'some-test-pass',
};

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const { t } = useTranslation();

  const handleSubmit = (values: LoginFormData) => {
    setLoading(true);
    login(values)
      .then((res: TokenData) => {
        setAuthDataToLocalStorage(res);
        navigate('/');
      })
      .catch((e) => {
        notificationController.error({ message: e.message });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Auth.FormWrapper>
      <Form layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <Auth.FormTitle>{t('common.login')}</Auth.FormTitle>
        <S.LoginDescription>{t('login.loginInfo')}</S.LoginDescription>
        <Auth.FormItem
          name="email"
          label={t('common.email')}
          rules={[
            { required: true, message: t('common.requiredField') },
            {
              type: 'email',
              message: t('profile.nav.personalInfo.notValidEmail'),
            },
          ]}
        >
          <Auth.FormInput placeholder={t('common.email')} />
        </Auth.FormItem>
        <Auth.FormItem
          label={t('common.password')}
          name="password"
          rules={[{ required: true, message: t('common.requiredField') }]}
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
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.login')}
          </Auth.SubmitButton>
        </Form.Item>
        <Form.Item noStyle>
          <Auth.SocialButton type="default" htmlType="submit">
            <Auth.SocialIconWrapper>
              <GoogleIcon />
            </Auth.SocialIconWrapper>
            {t('login.googleLink')}
          </Auth.SocialButton>
        </Form.Item>
        <Form.Item noStyle>
          <Auth.SocialButton type="default" htmlType="submit">
            <Auth.SocialIconWrapper>
              <FacebookIcon />
            </Auth.SocialIconWrapper>
            {t('login.facebookLink')}
          </Auth.SocialButton>
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
