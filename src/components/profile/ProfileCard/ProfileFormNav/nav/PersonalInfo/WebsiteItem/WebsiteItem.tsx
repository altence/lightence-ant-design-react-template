import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, notification, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { websitePattern } from 'constants/patterns';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import { SuffixInput } from 'components/common/inputs/SuffixInput/SuffixInput';

const addonBefore = 'https://';

export const WebsiteItem: React.FC = () => {
  const { t } = useTranslation();

  const [website, setWebsite] = useState('');

  const handleOpen = useCallback(() => {
    website
      ? window.open(`${addonBefore}${website}`, '_blank')?.focus()
      : notification.open({ message: t('profile.nav.personalInfo.notValidWebsite') });
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
      <SuffixInput
        suffix={
          <Tooltip title={t('common.openInNewTab')}>
            <Button size="small" type="text" icon={<FileTextOutlined />} onClick={handleOpen} />
          </Tooltip>
        }
        isVisibleSuffix={!!website}
        addonBefore={addonBefore}
        onChange={(event) => setWebsite(event.target.value)}
      />
    </FormItem>
  );
};
