import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { useResponsive } from 'hooks/useResponsive';
import { Dates } from 'constants/Dates';
import AvatarImg from 'assets/avatars/avatar1.png';
import * as S from './LockForm.styles';
import * as Auth from 'components/layouts/auth/AuthLayout.styles';

export const LockForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();
  const currentDateInUTC = dateState.toUTCString();
  const currentTime = Dates.format(currentDateInUTC, 'h:mm A');
  const currentDate = Dates.format(currentDateInUTC, 'dddd, MMMM D, YYYY');

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 10000);
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <Auth.FormWrapper>
      <Form layout="vertical" onFinish={handleSubmit} requiredMark="optional">
        <S.ContentWrapper>
          <S.Time>{currentTime}</S.Time>
          <S.Date>{currentDate}</S.Date>
          <S.AvatarCircle>
            <Avatar src={AvatarImg} size={mobileOnly ? 59 : 77} />
          </S.AvatarCircle>
          <S.Name>Christopher Johnson</S.Name>
        </S.ContentWrapper>
        <S.FormItem
          label={t('common.password')}
          name="password"
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <Auth.FormInputPassword placeholder={t('common.password')} />
        </S.FormItem>
        <Form.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.login')}
          </Auth.SubmitButton>
        </Form.Item>
      </Form>
    </Auth.FormWrapper>
  );
};
