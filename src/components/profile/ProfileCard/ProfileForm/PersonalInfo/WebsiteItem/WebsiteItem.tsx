import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../ProfileForm.styles';
import { FileTextOutlined } from '@ant-design/icons';

export const WebsiteItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="website"
      label={t('profile.nav.personalInfo.website')}
      rules={[
        {
          pattern: new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi),
          message: t('profile.nav.personalInfo.notValidWebsite'),
        },
      ]}
    >
      <Input addonBefore={'https:'} addonAfter={<FileTextOutlined />} />
    </FormItem>
  );
};
