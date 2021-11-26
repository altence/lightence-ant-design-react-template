import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './LockForm.styles';
import * as Auth from 'components/layouts/auth/AuthLayout.styles';

export const LockForm: React.FC = () => {
  const navigate = useNavigate();
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();

  const handleSubmit = () => {
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <Auth.FormWrapper>
      <Form layout="vertical" onFinish={handleSubmit} requiredMark="optional">
        <S.ContentWrapper>
          <S.Time>10:20 AM</S.Time>
          <S.Date>Tuesday, December 21, 2021</S.Date>
          <S.Avatar
            src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
            size={mobileOnly ? 59 : 77}
          />
          <S.Name>Christopher Johnson</S.Name>
        </S.ContentWrapper>
        <Auth.FormItem
          label={t('common.password')}
          name="password"
          rules={[{ required: true, message: t('common.passwordError') }]}
        >
          <Auth.FormInputPassword placeholder={t('common.password')} />
        </Auth.FormItem>
        <Form.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit">
            {t('common.login')}
          </Auth.SubmitButton>
        </Form.Item>
      </Form>
    </Auth.FormWrapper>
  );
};
