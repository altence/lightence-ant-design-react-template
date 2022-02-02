import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Modal } from '@app/components/common/Modal/Modal';
import { SecurityCodeForm } from '@app/components/auth/SecurityCodeForm/SecurityCodeForm';
import { notificationController } from '@app/controllers/notificationController';
import { setUser } from '@app/store/slices/userSlice';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { TwoFactorAuthOption } from '@app/interfaces/interfaces';

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
    if (user) {
      notificationController.success({ message: t('common.success') });

      const newUser = { ...user, [option]: { ...user[option], verified: true } };
      dispatch(setUser(newUser));
    }
  }, [dispatch, t, option, user]);

  return (
    <>
      {children}

      {condition && (
        <Button type="link" loading={isLoading} onClick={handleClickVerify}>
          {t('profile.nav.securitySettings.verify')}
        </Button>
      )}

      {condition && (
        <Modal
          destroyOnClose
          footer={false}
          closable={false}
          visible={isModalVisible}
          onCancel={() => setModalVisible(false)}
        >
          <SecurityCodeForm onBack={() => setModalVisible(false)} onFinish={onVerify} />
        </Modal>
      )}
    </>
  );
};
