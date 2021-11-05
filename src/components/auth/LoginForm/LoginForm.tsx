import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './LoginForm.styles';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleSubmit = () => {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <S.Wrapper>
      <Form layout="vertical" onFinish={handleSubmit}>
        <S.Title>{t('common.login')}</S.Title>
        <S.FormItem name="email" rules={[{ required: true, message: t('common.emailError') }]}>
          <S.Input placeholder={t('common.email')} />
        </S.FormItem>
        <S.FormItem name="password" rules={[{ required: true, message: t('common.passwordError') }]}>
          <S.Input placeholder={t('common.password')} />
        </S.FormItem>
        <S.ActionsWrapper>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <S.CheckBox>
              <S.Text>{t('login.rememberMe')}</S.Text>
            </S.CheckBox>
          </Form.Item>
          <Link to="/forgot-password">
            <S.Text>{t('login.forgotPassword')}</S.Text>
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
    </S.Wrapper>
  );
};
