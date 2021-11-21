import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './SignUpForm.styles';
import {
  FormWrapper,
  FormCheckbox,
  FormItem,
  FormInput,
  FormInputPassword,
  Text,
  LinkText,
  ActionsWrapper,
  SubmitButton,
  FooterWrapper,
} from 'components/layouts/auth/AuthLayout.styles';

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
        <FormItem
          name="firstName"
          label={t('common.firstName')}
          rules={[{ required: true, message: t('common.firstNameError') }]}
        >
          <FormInput placeholder={t('common.firstName')} />
        </FormItem>
        <FormItem
          name="lastName"
          label={t('common.lastName')}
          rules={[{ required: true, message: t('common.lastNameError') }]}
        >
          <FormInput placeholder={t('common.lastName')} />
        </FormItem>
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
        <FormItem
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
          <FormInputPassword placeholder={t('common.confirmPassword')} />
        </FormItem>
        <ActionsWrapper>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <FormCheckbox>
              <Text>
                {t('signup.agree')} <LinkText>{t('signup.termOfUse')}</LinkText> and{' '}
                <LinkText>{t('signup.privacyOPolicy')}</LinkText>
              </Text>
            </FormCheckbox>
          </Form.Item>
        </ActionsWrapper>
        <Form.Item noStyle>
          <SubmitButton type="primary" htmlType="submit">
            {t('common.signUp')}
          </SubmitButton>
        </Form.Item>
        <FooterWrapper>
          <Text>
            {t('signup.alreadyHaveAccount')}{' '}
            <Link to="/login">
              <LinkText>{t('signup.loginLink')}</LinkText>
            </Link>
          </Text>
        </FooterWrapper>
      </Form>
    </FormWrapper>
  );
};
