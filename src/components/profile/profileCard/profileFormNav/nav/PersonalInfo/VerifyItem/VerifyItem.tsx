import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button } from '@app/components/common/buttons/Button/Button';
import { SecurityCodeForm } from '@app/components/auth/SecurityCodeForm/SecurityCodeForm';
import { notificationController } from '@app/controllers/notificationController';
import { setUser } from '@app/store/slices/userSlice';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { TwoFactorAuthOption } from '@app/interfaces/interfaces';
import * as S from './VerifyItem.styles';

interface VerifyItemProps {
  option: TwoFactorAuthOption;
  condition: boolean;
}

export const VerifyItem: React.FC<VerifyItemProps> = ({ option, condition, children }) => {
  const [isLoading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleClickVerify = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(true);
    }, 1000);
  }, []);

  const onVerify = useCallback(() => {
    setModalVisible(false);

    if (user && option) {
      notificationController.success({ message: t('common.success') });

      const newUser = { ...user, [option]: { ...user[option], verified: true } };
      dispatch(setUser(newUser));
    }
  }, [dispatch, t, option, user]);

  return (
    <S.VerifyWrapper>
      {children}

      {condition && (
        <Button type="link" noStyle loading={isLoading} onClick={handleClickVerify}>
          {t('common.verify')}
        </Button>
      )}

      {condition && (
        <S.TwoFactorAuthModal
          destroyOnClose
          footer={false}
          closable={false}
          visible={isModalVisible}
          onCancel={() => setModalVisible(false)}
        >
          <SecurityCodeForm onBack={() => setModalVisible(false)} onFinish={onVerify} option={t(`common.${option}`)} />
        </S.TwoFactorAuthModal>
      )}
    </S.VerifyWrapper>
  );
};
