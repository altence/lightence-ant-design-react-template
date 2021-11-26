import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './ForgotPasswordForm.styles';
import * as Auth from 'components/layouts/auth/AuthLayout.styles';

export const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleSubmit = () => {
    notification.open({
      message: t('common.success'),
      description: t('forgotPassword.successReset'),
    });

    setTimeout(() => {
      navigate('/auth/verify-email');
    }, 1000);
  };

  return (
    <Auth.FormWrapper>
      <Form layout="vertical" onFinish={handleSubmit} requiredMark="optional">
        <Auth.BackWrapper onClick={() => navigate(-1)}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <Auth.FormTitle>{t('forgotPassword.title')}</Auth.FormTitle>
        <S.Description>{t('forgotPassword.description')}</S.Description>
        <Auth.FormItem
          name="email"
          label={t('common.email')}
          rules={[{ required: true, message: t('common.emailError') }]}
        >
          <Auth.FormInput placeholder={t('common.email')} />
        </Auth.FormItem>
        <Form.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit">
            {t('forgotPassword.sendInstructions')}
          </S.SubmitButton>
        </Form.Item>
      </Form>
    </Auth.FormWrapper>
  );
};
