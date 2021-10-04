import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import { FileTextOutlined } from '@ant-design/icons';
import { websitePattern } from 'constants/patterns';

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
