import React from 'react';
import { useTranslation } from 'react-i18next';
import { websitePattern } from 'constants/patterns';
import { FormItem } from '@app/components/common/Form/Form.styles';
import { OpenURLInput } from 'components/common/inputs/OpenURLInput/OpenURLInput';

const scheme = 'https://';

interface WebsiteItemProps {
  website: string | undefined;
}

export const WebsiteItem: React.FC<WebsiteItemProps> = ({ website }) => {
  const { t } = useTranslation();

  return (
    <FormItem
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
    </FormItem>
  );
};
