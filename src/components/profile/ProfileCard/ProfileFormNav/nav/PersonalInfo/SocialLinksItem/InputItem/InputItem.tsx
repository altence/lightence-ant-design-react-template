import React, { useCallback } from 'react';
import { Tooltip } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import { CopyOutlined } from '@ant-design/icons';
import { FormItem } from 'components/common/Form/Form.styles';
import { SuffixInput } from 'components/common/inputs/SuffixInput/SuffixInput';
import { notificationController } from 'controllers/notificationController';

interface InputItemProps {
  value: string | undefined;
  name: string;
  Addon: React.FC;
}

export const InputItem: React.FC<InputItemProps> = ({ value, name, Addon }) => {
  const { t } = useTranslation();

  const handleCopy = useCallback(() => {
    if (value) {
      navigator.clipboard.writeText(value).then(() => {
        notificationController.info({ message: t('common.copied') });
      });
    }
  }, [value]);

  return (
    <FormItem name={name}>
      <SuffixInput
        addonBefore={<Button type="link" icon={<Addon />} />}
        suffix={
          <Tooltip title={t('common.copy')}>
            <Button disabled={!value} type="text" icon={<CopyOutlined />} onClick={handleCopy} />
          </Tooltip>
        }
      />
    </FormItem>
  );
};
