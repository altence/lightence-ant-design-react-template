import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { InputItem } from './InputItem/InputItem';
import { socialLinksData } from 'constants/socialLinksData';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import { Col, Row } from 'antd';

export const SocialLinksItem: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = useMemo(
    () =>
      socialLinksData.map((link) => (
        <Col key={link.id} xs={24} md={12}>
          <InputItem name={link.name} Addon={link.Icon} />
        </Col>
      )),
    [],
  );

  return (
    <FormItem label={t('profile.nav.personalInfo.socialLinks')}>
      <Row gutter={[20, 0]}>{socialLinks}</Row>
    </FormItem>
  );
};
