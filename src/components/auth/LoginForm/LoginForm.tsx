import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './LoginForm.styles';
import { FormWrapper, FormTitle } from 'components/layouts/auth/AuthLayout.styles';

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
        <S.FormItem
          name="email"
          label={t('common.email')}
          rules={[{ required: true, message: t('common.emailError') }]}
        >
          <S.Input placeholder={t('common.email')} />
        </S.FormItem>
        <S.FormItem
          label={t('common.password')}
          name="password"
          rules={[{ required: true, message: t('common.passwordError') }]}
        >
          <S.InputPassword placeholder={t('common.password')} />
        </S.FormItem>
        <S.ActionsWrapper>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <S.CheckBox>
              <S.RememberMeText>{t('login.rememberMe')}</S.RememberMeText>
            </S.CheckBox>
          </Form.Item>
          <Link to="/forgot-password">
            <S.ForgotPasswordText>{t('login.forgotPassword')}</S.ForgotPasswordText>
          </Link>
        </S.ActionsWrapper>
        <Form.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit">
            {t('common.login')}
          </S.SubmitButton>
        </Form.Item>
        <S.SignupWrapper>
          <S.Text>
            {t('login.noAccount')}{' '}
            <Link to="/signup">
              <S.SignupText>{t('login.signupLink')}</S.SignupText>
            </Link>
          </S.Text>
        </S.SignupWrapper>
      </Form>
    </FormWrapper>
  );
};
