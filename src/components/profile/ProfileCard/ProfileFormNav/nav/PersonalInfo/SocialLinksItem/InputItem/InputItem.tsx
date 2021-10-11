import React, { useCallback, useState } from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { LinkOutlined } from '@ant-design/icons';
import { FormItem } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';
import { Button, notification } from 'antd';
import { useTranslation } from 'react-i18next';

interface InputItemProps {
  name: string;
  Addon: React.FC;
}

export const InputItem: React.FC<InputItemProps> = ({ name, Addon }) => {
  const [socialLink, setSocialLink] = useState('');

  const { t } = useTranslation();

  const handleCopy = useCallback(() => {
    notification.open({ message: t('common.copy') });

    navigator.clipboard.writeText(socialLink);
  }, [socialLink]);

  return (
    <FormItem name={name}>
      <Input
        value={socialLink}
        addonBefore={<Addon />}
        suffix={<Button type="text" size="small" icon={<LinkOutlined />} onClick={handleCopy} />}
        onChange={(event) => setSocialLink(event.target.value)}
      />
    </FormItem>
  );
};
