import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { notification, Tooltip } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { FileTextOutlined } from '@ant-design/icons';
import { websitePattern } from 'constants/patterns';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import { SuffixInput } from 'components/common/inputs/SuffixInput/SuffixInput';

const addonBefore = 'https://';

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
      <SuffixInput
        suffix={
          <Tooltip title={t('common.openInNewTab')}>
            <Button
              href={`${addonBefore}${website}`}
              target="_blank"
              disabled={!website}
              type="text"
              icon={<FileTextOutlined />}
            />
          </Tooltip>
        }
        addonBefore={<Button type="link">{addonBefore}</Button>}
      />
    </FormItem>
  );
};
