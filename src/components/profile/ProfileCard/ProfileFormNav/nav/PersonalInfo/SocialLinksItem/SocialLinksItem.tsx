import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormItem } from '@app/components/common/Form/Form.styles';
import { Col, Row } from 'antd';
import { ClipboardInput } from 'components/common/inputs/ClipboardInput/ClipboardInput';
import { TwitterOutlined } from '@ant-design/icons';
import { websitePattern } from '@app/constants/patterns';
import { OpenURLInput } from '@app/components/common/inputs/OpenURLInput/OpenURLInput';
import { LinkedinIcon } from '@app/components/common/icons/LinkedinIcon';
import { FacebookIcon } from '@app/components/common/icons/FacebookIcon';

interface SocialLinksItemProps {
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const SocialLinksItem: React.FC<SocialLinksItemProps> = ({ socialLinks }) => {
  const { t } = useTranslation();

  const { twitter, facebook, linkedin } = socialLinks;

  return (
    <FormItem label={t('profile.nav.personalInfo.socialLinks')}>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12}>
          <FormItem name="twitter">
            <ClipboardInput valueToCopy={twitter} addonBefore={<TwitterOutlined />} />
          </FormItem>
        </Col>
        <Col xs={24} md={12}>
          <FormItem
            name="linkedin"
            rules={[
              {
                pattern: new RegExp(websitePattern),
                message: t('profile.nav.personalInfo.notValidWebsite'),
              },
            ]}
          >
            <OpenURLInput href={linkedin} target="_blank" addonBefore={<LinkedinIcon />} />
          </FormItem>
        </Col>
        <Col xs={24} md={12}>
          <FormItem
            name="facebook"
            rules={[
              {
                pattern: new RegExp(websitePattern),
                message: t('profile.nav.personalInfo.notValidWebsite'),
              },
            ]}
          >
            <OpenURLInput href={facebook} target="_blank" addonBefore={<FacebookIcon />} />
          </FormItem>
        </Col>
      </Row>
    </FormItem>
  );
};
