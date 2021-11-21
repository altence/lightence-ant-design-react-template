import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './ForgotPasswordForm.styles';
import { FormWrapper, FormTitle, FormItem, FormInput } from 'components/layouts/auth/AuthLayout.styles';

export const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleSubmit = () => {
    notification.open({
      message: t('common.success'),
      description: t('forgotPassword.successReset'),
    });

    setTimeout(() => {
      navigate('/verify-email');
    }, 1000);
  };

  return (
    <FormWrapper>
      <Form layout="vertical" onFinish={handleSubmit} requiredMark="optional">
        <S.BackWrapper onClick={() => history.goBack()}>
          <S.BackIcon />
          Back
        </S.BackWrapper>
        <FormTitle>{t('forgotPassword.title')}</FormTitle>
        <S.ResetPasswordDescription>{t('forgotPassword.description')}</S.ResetPasswordDescription>
        <FormItem name="email" label={t('common.email')} rules={[{ required: true, message: t('common.emailError') }]}>
          <FormInput placeholder={t('common.email')} />
        </FormItem>
        <Form.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit">
            {t('forgotPassword.sendInstructions')}
          </S.SubmitButton>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};
