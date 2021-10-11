import React, { useCallback, useState } from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { websitePattern } from 'constants/patterns';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

const addonBefore = 'https://';

export const WebsiteItem: React.FC = () => {
  const { t } = useTranslation();

  const [website, setWebsite] = useState('');

  const handleOpen = useCallback(() => {
    window.open(`${addonBefore}${website}`, '_blank')?.focus();
  }, [website]);

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
      <Input
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        addonBefore={addonBefore}
        suffix={<Button size="small" type="text" icon={<FileTextOutlined />} onClick={handleOpen} />}
      />
    </FormItem>
  );
};
