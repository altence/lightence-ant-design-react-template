import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Image, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './SecurityCodeForm.styles';
import * as Auth from 'components/layouts/AuthLayout/AuthLayout.styles';
import { VerificationCodeInput } from 'components/common/VerificationCodeInput/VerificationCodeInput';
import VerifyEmailImage from 'assets/images/verify-email.png';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doVerifySecurityCode } from '@app/store/slices/authSlice';
import { notificationController } from '@app/controllers/notificationController';

export const SecurityCodeForm: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [securityCode, setSecurityCode] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (securityCode.length === 6) {
      setLoading(true);
      dispatch(doVerifySecurityCode({ code: securityCode }))
        .unwrap()
        .then(() => navigate('/auth/new-password'))
        .catch((err) => {
          notificationController.error({ message: err.message });
          setLoading(false);
        });
    }
  }, [securityCode, navigate, dispatch]);

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
          <Auth.FormTitle>{t('securityCodeForm.title')}</Auth.FormTitle>
          <S.VerifyEmailDescription>{t('common.verifCodeSent')}</S.VerifyEmailDescription>
          {isLoading ? <Spin /> : <VerificationCodeInput autoFocus onChange={setSecurityCode} />}
          <Link to="/" target="_blank">
            <S.NoCodeText>{t('securityCodeForm.noCode')}</S.NoCodeText>
          </Link>
        </S.ContentWrapper>
      </Form>
    </Auth.FormWrapper>
  );
};
