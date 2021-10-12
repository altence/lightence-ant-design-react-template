import React, { useCallback, useEffect, useState } from 'react';
import { Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { LinkOutlined } from '@ant-design/icons';
import { FormItem } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';
import { SuffixInput } from 'components/common/inputs/SuffixInput/SuffixInput';

interface InputItemProps {
  value: string | undefined;
  name: string;
  Addon: React.FC;
}

export const InputItem: React.FC<InputItemProps> = ({ value, name, Addon }) => {
  const [isCopied, setCopied] = useState(false);

  const { t } = useTranslation();

  const handleCopy = useCallback(() => {
    if (value) {
      setCopied(true);

      navigator.clipboard.writeText(value);
    }
  }, [value, setCopied]);

  useEffect(() => {
    setCopied(false);
  }, [value]);

  return (
    <FormItem name={name}>
      <SuffixInput
        addonBefore={<Addon />}
        isVisibleSuffix={!!value}
        suffix={
          <Tooltip title={isCopied ? t('common.copied') : t('common.copy')}>
            <Button type="text" size="small" icon={<LinkOutlined />} onClick={handleCopy} />
          </Tooltip>
        }
      />
    </FormItem>
  );
};
