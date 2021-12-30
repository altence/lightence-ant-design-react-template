import React, { useCallback } from 'react';
import { Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { CopyOutlined } from '@ant-design/icons';
import { SuffixInput } from '../SuffixInput/SuffixInput';
import { InputProps } from '../Input/Input';
import { notificationController } from 'controllers/notificationController';

interface ClipboardInputProps extends InputProps {
  value: string | undefined;
}

export const ClipboardInput: React.FC<ClipboardInputProps> = ({ value, ...props }) => {
  const { t } = useTranslation();

  const handleCopy = useCallback(
    () =>
      value &&
      navigator.clipboard.writeText(value).then(() => {
        notificationController.info({ message: t('common.copied') });
      }),
    [value, t],
  );

  return (
    <SuffixInput
      suffix={
        <Tooltip title={t('common.copy')}>
          <Button disabled={!value} type="text" icon={<CopyOutlined />} onClick={handleCopy} />
        </Tooltip>
      }
      {...props}
    />
  );
};
