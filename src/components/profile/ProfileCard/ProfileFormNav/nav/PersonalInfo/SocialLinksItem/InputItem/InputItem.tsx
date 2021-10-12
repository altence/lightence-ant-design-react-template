import React, { useCallback, useEffect, useState } from 'react';
import { Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { LinkOutlined } from '@ant-design/icons';
import { FormItem } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';
import { SuffixInput } from 'components/common/inputs/SuffixInput/SuffixInput';

interface InputItemProps {
  name: string;
  Addon: React.FC;
}

export const InputItem: React.FC<InputItemProps> = ({ name, Addon }) => {
  const [socialLink, setSocialLink] = useState('');
  const [isCopied, setCopied] = useState(false);

  const { t } = useTranslation();

  const handleCopy = useCallback(() => {
    setCopied(true);

    navigator.clipboard.writeText(socialLink);
  }, [socialLink, setCopied]);

  useEffect(() => {
    setCopied(false);
  }, [socialLink]);

  return (
    <FormItem name={name}>
      <SuffixInput
        addonBefore={<Addon />}
        isVisibleSuffix={!!socialLink}
        suffix={
          <Tooltip title={isCopied ? t('common.copied') : t('common.copy')}>
            <Button type="text" size="small" icon={<LinkOutlined />} onClick={handleCopy} />
          </Tooltip>
        }
        onChange={(event) => setSocialLink(event.target.value)}
      />
    </FormItem>
  );
};
