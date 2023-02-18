import React from 'react';
import { useTranslation } from 'react-i18next';
import { TwitterOutlined } from '@ant-design/icons';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { ClipboardInput } from 'components/common/inputs/ClipboardInput/ClipboardInput';
import { OpenURLInput } from '@app/components/common/inputs/OpenURLInput/OpenURLInput';
import { LinkedinIcon } from '@app/components/common/icons/LinkedinIcon';
import { FacebookIcon } from '@app/components/common/icons/FacebookIcon';
import { websitePattern } from '@app/constants/patterns';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const SocialLinksItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item label={t('profile.nav.personalInfo.socialLinks')}>
      <BaseRow gutter={[20, 0]}>
        <BaseCol xs={24} md={12}>
          <BaseButtonsForm.Item shouldUpdate>
            {({ getFieldValue }) => {
              const twitter = getFieldValue('twitter');

              return (
                <label>
                  <BaseButtonsForm.Item name="twitter">
                    <ClipboardInput valueToCopy={twitter} addonBefore={<TwitterOutlined />} />
                  </BaseButtonsForm.Item>
                </label>
              );
            }}
          </BaseButtonsForm.Item>
        </BaseCol>
        <BaseCol xs={24} md={12}>
          <BaseButtonsForm.Item shouldUpdate>
            {({ getFieldValue }) => {
              const linkedin = getFieldValue('linkedin');

              return (
                <label>
                  <BaseButtonsForm.Item
                    name="linkedin"
                    rules={[
                      {
                        pattern: new RegExp(websitePattern),
                        message: t('profile.nav.personalInfo.notValidWebsite'),
                      },
                    ]}
                  >
                    <OpenURLInput href={linkedin} target="_blank" addonBefore={<LinkedinIcon />} />
                  </BaseButtonsForm.Item>
                </label>
              );
            }}
          </BaseButtonsForm.Item>
        </BaseCol>
        <BaseCol xs={24} md={12}>
          <BaseButtonsForm.Item shouldUpdate>
            {({ getFieldValue }) => {
              const facebook = getFieldValue('facebook');

              return (
                <label>
                  {' '}
                  <BaseButtonsForm.Item
                    name="facebook"
                    rules={[
                      {
                        pattern: new RegExp(websitePattern),
                        message: t('profile.nav.personalInfo.notValidWebsite'),
                      },
                    ]}
                  >
                    <OpenURLInput href={facebook} target="_blank" addonBefore={<FacebookIcon />} />
                  </BaseButtonsForm.Item>
                </label>
              );
            }}
          </BaseButtonsForm.Item>
        </BaseCol>
      </BaseRow>
    </BaseButtonsForm.Item>
  );
};
