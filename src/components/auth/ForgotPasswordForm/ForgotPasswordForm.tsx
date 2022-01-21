import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './ForgotPasswordForm.styles';
import * as Auth from 'components/layouts/auth/AuthLayout.styles';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doResetPassword } from '@app/store/slices/authSlice';
import { notificationController } from '@app/controllers/notificationController';

interface ForgotPasswordFormData {
  email: string;
}

const initValues = {
  email: 'christopher.johnson@altence.com',
};

export const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: ForgotPasswordFormData) => {
    setLoading(true);
    dispatch(doResetPassword(values))
      .unwrap()
      .then(() => {
        navigate('/auth/security-code');
      })
      .catch((err) => {
        notificationController.error({ message: err.message });
        setLoading(false);
      });
  };

  return (
    <Auth.FormWrapper>
      <Form layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <Auth.BackWrapper onClick={() => navigate(-1)}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <Auth.FormTitle>{t('common.resetPassword')}</Auth.FormTitle>
        <S.Description>{t('forgotPassword.description')}</S.Description>
        <Auth.FormItem
          name="email"
          label={t('common.email')}
          rules={[{ required: true, message: t('common.emailError') }]}
        >
          <Auth.FormInput placeholder={t('common.email')} />
        </Auth.FormItem>
        <Form.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('forgotPassword.sendInstructions')}
          </S.SubmitButton>
        </Form.Item>
      </Form>
    </Auth.FormWrapper>
  );
};
