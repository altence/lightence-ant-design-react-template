import React, { useState, useEffect, useCallback } from 'react';
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

interface SecurityCodeFormProps {
  onBack?: () => void;
  onFinish?: () => void;
}

export const SecurityCodeForm: React.FC<SecurityCodeFormProps> = ({ onBack, onFinish }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const navigateBack = useCallback(() => navigate(-1), [navigate]);
  const navigateForward = useCallback(() => navigate('/auth/new-password'), [navigate]);

  const [securityCode, setSecurityCode] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (securityCode.length === 6) {
      setLoading(true);
      dispatch(doVerifySecurityCode({ code: securityCode }))
        .unwrap()
        .then(onFinish || navigateForward)
        .catch((err) => {
          notificationController.error({ message: err.message });
          setLoading(false);
        });
    }
  }, [securityCode, navigateForward, onFinish, dispatch]);

  return (
    <Auth.FormWrapper>
      <Form layout="vertical" requiredMark="optional">
        <Auth.BackWrapper onClick={onBack || navigateBack}>
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
