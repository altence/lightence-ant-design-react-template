import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { OpenURLInput } from '@app/components/common/inputs/OpenURLInput/OpenURLInput';
import { websitePattern } from '@app/constants/patterns';

const scheme = 'https://';

interface WebsiteItemProps {
  website?: string;
}

export const WebsiteItem: React.FC<WebsiteItemProps> = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item shouldUpdate>
      {({ getFieldValue }) => {
        const website = getFieldValue('website');

        return (
          <BaseButtonsForm.Item
            name="website"
            label={t('profile.nav.personalInfo.website')}
            rules={[
              {
                pattern: websitePattern,
                message: t('profile.nav.personalInfo.notValidWebsite'),
              },
            ]}
          >
            <OpenURLInput href={`${scheme}${website}`} target="_blank" addonBefore={scheme} />
          </BaseButtonsForm.Item>
        );
      }}
    </BaseButtonsForm.Item>
  );
};
