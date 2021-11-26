import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './SignUpForm.styles';
import * as Auth from 'components/layouts/auth/AuthLayout.styles';

export const SignUpForm: React.FC = () => {
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
        <S.Title>{t('common.signUp')}</S.Title>
        <Auth.FormItem
          name="firstName"
          label={t('common.firstName')}
          rules={[{ required: true, message: t('common.firstNameError') }]}
        >
          <Auth.FormInput placeholder={t('common.firstName')} />
        </Auth.FormItem>
        <Auth.FormItem
          name="lastName"
          label={t('common.lastName')}
          rules={[{ required: true, message: t('common.lastNameError') }]}
        >
          <Auth.FormInput placeholder={t('common.lastName')} />
        </Auth.FormItem>
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
        <Auth.FormItem
          label={t('common.confirmPassword')}
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: t('common.confirmPasswordError') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('common.confirmPasswordError')));
              },
            }),
          ]}
        >
          <Auth.FormInputPassword placeholder={t('common.confirmPassword')} />
        </Auth.FormItem>
        <Auth.ActionsWrapper>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <Auth.Text>
                {t('signup.agree')} <Auth.LinkText>{t('signup.termOfUse')}</Auth.LinkText> and{' '}
                <Auth.LinkText>{t('signup.privacyOPolicy')}</Auth.LinkText>
              </Auth.Text>
            </Auth.FormCheckbox>
          </Form.Item>
        </Auth.ActionsWrapper>
        <Form.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit">
            {t('common.signUp')}
          </Auth.SubmitButton>
        </Form.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {t('signup.alreadyHaveAccount')}{' '}
            <Link to="/login">
              <Auth.LinkText>{t('signup.loginLink')}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </Form>
    </Auth.FormWrapper>
  );
};
