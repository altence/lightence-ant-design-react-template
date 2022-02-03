import React from 'react';
import { Col, Popconfirm, Row, Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { useDispatch } from 'react-redux';
import { setUser } from '@app/store/slices/userSlice';
import { useAppSelector } from '@app/hooks/reduxHooks';

interface TwoFactorSwitchProps {
  isEnabled: boolean;
  setEnabled: (state: boolean) => void;
}

export const TwoFactorSwitch: React.FC<TwoFactorSwitchProps> = ({ isEnabled, setEnabled }) => {
  const { t } = useTranslation();

  const user = useAppSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleSwitch = () => {
    setEnabled(!isEnabled);

    if (isEnabled) {
      const newUser = {
        ...user,
        twoFactorAuth: {
          enabled: false,
          type: null,
        },
      };
      dispatch(setUser(newUser));
    }
  };

  return (
    <BaseButtonsForm.Item>
      <Row justify="space-between">
        <Col>
          <BaseButtonsForm.Title>{t('profile.nav.securitySettings.twoFactorAuth')}</BaseButtonsForm.Title>
        </Col>
        <Col>
          <Popconfirm
            title={
              !isEnabled
                ? t('profile.nav.securitySettings.enableTwoFactorAuth')
                : t('profile.nav.securitySettings.disableTwoFactorAuth')
            }
            onConfirm={handleSwitch}
          >
            <Switch checked={isEnabled} />
          </Popconfirm>
        </Col>
      </Row>
    </BaseButtonsForm.Item>
  );
};
