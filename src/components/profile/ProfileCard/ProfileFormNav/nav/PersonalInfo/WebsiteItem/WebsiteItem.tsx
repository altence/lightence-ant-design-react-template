import React from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { FileTextOutlined } from '@ant-design/icons';
import { websitePattern } from 'constants/patterns';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

export const WebsiteItem: React.FC = () => {
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
      <Input addonBefore={'https:'} addonAfter={<FileTextOutlined />} />
    </FormItem>
  );
};
