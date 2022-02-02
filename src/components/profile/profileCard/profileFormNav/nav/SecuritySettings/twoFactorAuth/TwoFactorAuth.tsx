import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { TwoFactorOptions } from '@app/components/profile/profileCard/profileFormNav/nav/SecuritySettings/twoFactorAuth/TwoFactorOptions/TwoFactorOptions';
import { TwoFactorSwitch } from '@app/components/profile/profileCard/profileFormNav/nav/SecuritySettings/twoFactorAuth/TwoFactorSwitch/TwoFactorSwitch';
import { Button } from '@app/components/common/buttons/Button/Button';
import { notificationController } from '@app/controllers/notificationController';
import { setUser } from '@app/store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { TwoFactorAuthOption } from '@app/interfaces/interfaces';

export interface CurrentOption {
  value: 'phone' | 'email';
  isVerified: boolean;
}

export type TwoFactorAuthOptionState = TwoFactorAuthOption | undefined;

export const TwoFactorAuth: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const [isLoading, setLoading] = useState(false);

  const [isEnabled, setEnabled] = useState(Boolean(user?.twoFactorAuth.enabled));
  const [selectedOption, setSelectedOption] = useState<TwoFactorAuthOptionState>(user?.twoFactorAuth.type);

  const { t } = useTranslation();

  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      if (user) {
        notificationController.success({ message: t('common.success') });

        const newUser = {
          ...user,
          twoFactorAuth: {
            enabled: true,
            type: selectedOption,
          },
        };
        dispatch(setUser(newUser));
      }
    });
  };

  return (
    <>
      <BaseButtonsForm
        name="twoFactorAuth"
        requiredMark={false}
        isFieldsChanged={Boolean(isEnabled && selectedOption)}
        initialValues={{
          email: user?.email.name,
          phone: user?.phone.number,
        }}
        onFinish={onFinish}
        footer={
          user?.twoFactorAuth.enabled ? (
            <span />
          ) : (
            (user && selectedOption && user[selectedOption].verified && (
              <Button type="link" loading={isLoading} htmlType="submit">
                {t('common.enable')}
              </Button>
            )) || <span>{t('common.notVerified')}</span>
          )
        }
      >
        <Row>
          <Col span={24}>
            <TwoFactorSwitch isEnabled={isEnabled} setEnabled={setEnabled} />
          </Col>

          {isEnabled && (
            <Col span={24}>
              <TwoFactorOptions selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </Col>
          )}
        </Row>
      </BaseButtonsForm>
    </>
  );
};
