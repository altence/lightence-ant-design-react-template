import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { ProfileForm } from '../../../../ProfileForm/ProfileForm';
import { ConfirmItemPassword } from '../ConfirmPasswordItem/ConfirmPasswordItem';
import { FormItem, Title } from '@app/components/common/Form/Form.styles';
import { CurrentPasswordItem } from '../CurrentPasswordItem/CurrentPasswordItem';
import { NewPasswordItem } from '../NewPasswordItem/NewPasswordItem';
import * as S from './PasswordForm.styles';

export const PasswordForm: React.FC = () => {
  const { t } = useTranslation();

  const onFinish = useCallback(async (values) => console.log(values), []);

  return (
    <ProfileForm
      name="newPassword"
      footer={(loading) => (
        <S.Btn loading={loading} type="primary" htmlType="submit">
          {t('common.confirm')}
        </S.Btn>
      )}
      onFinish={onFinish}
    >
      <Row gutter={{ md: 15, xl: 30 }}>
        <Col span={24}>
          <FormItem>
            <Title>{t('profile.nav.securitySettings.changePassword')}</Title>
          </FormItem>
        </Col>

        <Col xs={24} md={12} xl={24}>
          <CurrentPasswordItem />
        </Col>

        <Col xs={24} md={12} xl={24}>
          <NewPasswordItem />
        </Col>

        <Col xs={24} md={12} xl={24}>
          <ConfirmItemPassword />
        </Col>
      </Row>
    </ProfileForm>
  );
};
