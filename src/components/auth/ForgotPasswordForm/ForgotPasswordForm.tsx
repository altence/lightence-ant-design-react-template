import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './ForgotPasswordForm.styles';

export const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleSubmit = () => {
    notification.open({
      message: t('common.success'),
      description: t('forgotPassword.successReset'),
    });

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <S.Wrapper>
      <Form layout="vertical" onFinish={handleSubmit}>
        <S.Title>{t('forgotPassword.title')}</S.Title>
        <S.Text>{t('forgotPassword.description')}</S.Text>
        <S.FormItem name="email" rules={[{ required: true, message: t('common.emailError') }]}>
          <S.Input placeholder={t('common.email')} />
        </S.FormItem>
        <Form.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit">
            {t('forgotPassword.reset')}
          </S.SubmitButton>
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};
