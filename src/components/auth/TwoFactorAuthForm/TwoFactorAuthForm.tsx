import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './TwoFactorAuthForm.styles';
import * as Auth from 'components/layouts/auth/AuthLayout.styles';
import { VerificationCodeInput } from 'components/common/VerificationCodeInput/VerificationCodeInput';
import VerifyEmailImage from 'assets/images/verify-email.png';

export const TwoFactorAuthForm: React.FC = () => {
  const { t } = useTranslation();
  const [verifyCode, setVerifyCode] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (verifyCode.length === 6) {
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  }, [verifyCode]);

  return (
    <Auth.FormWrapper>
      <Form layout="vertical" requiredMark="optional">
        <Auth.BackWrapper onClick={() => navigate(-1)}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <S.ContentWrapper>
          <S.ImageWrapper>
            <Image src={VerifyEmailImage} alt="Not found" preview={false} />
          </S.ImageWrapper>
          <Auth.FormTitle>{t('twoFactorAuth.title')}</Auth.FormTitle>
          <S.VerifyEmailDescription>{t('twoFactorAuth.description')}</S.VerifyEmailDescription>
          <S.EnterCodeText>{t('twoFactorAuth.enterCode')}</S.EnterCodeText>
          <VerificationCodeInput autoFocus onChange={(value) => setVerifyCode(value)} />
          <S.NoCodeText>{t('twoFactorAuth.noCode')}</S.NoCodeText>
        </S.ContentWrapper>
      </Form>
    </Auth.FormWrapper>
  );
};
