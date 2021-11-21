import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './SignUpForm.styles';
import { FormWrapper } from 'components/layouts/auth/AuthLayout.styles';

export const SignUpForm: React.FC = () => {
  const history = useHistory();

  const { t } = useTranslation();

  const handleSubmit = () => {
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  return (
    <FormWrapper>
      <Form layout="vertical" onFinish={handleSubmit} requiredMark="optional">
        <S.Title>{t('common.signUp')}</S.Title>
        <S.FormItem
          name="firstName"
          label={t('common.firstName')}
          rules={[{ required: true, message: t('common.firstNameError') }]}
        >
          <S.Input placeholder={t('common.firstName')} />
        </S.FormItem>
        <S.FormItem
          name="lastName"
          label={t('common.lastName')}
          rules={[{ required: true, message: t('common.lastNameError') }]}
        >
          <S.Input placeholder={t('common.lastName')} />
        </S.FormItem>
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
        <S.FormItem
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
          <S.InputPassword placeholder={t('common.confirmPassword')} />
        </S.FormItem>
        <S.ActionsWrapper>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <S.CheckBox>
              <S.Text>
                {t('signup.agree')} <S.LinkText>{t('signup.termOfUse')}</S.LinkText> and{' '}
                <S.LinkText>{t('signup.privacyOPolicy')}</S.LinkText>
              </S.Text>
            </S.CheckBox>
          </Form.Item>
        </S.ActionsWrapper>
        <Form.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit">
            {t('common.signUp')}
          </S.SubmitButton>
        </Form.Item>
        <S.SignupWrapper>
          <S.Text>
            {t('signup.alreadyHaveAccount')}{' '}
            <Link to="/login">
              <S.LinkText>{t('signup.loginLink')}</S.LinkText>
            </Link>
          </S.Text>
        </S.SignupWrapper>
      </Form>
    </FormWrapper>
  );
};
