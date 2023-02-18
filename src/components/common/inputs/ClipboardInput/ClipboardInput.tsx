import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CopyOutlined } from '@ant-design/icons';
import { SuffixInput } from '../SuffixInput/SuffixInput';
import { BaseInputProps } from '../BaseInput/BaseInput';
import { notificationController } from 'controllers/notificationController';
import { BaseTooltip } from '../../BaseTooltip/BaseTooltip';
import { BaseButton } from '../../BaseButton/BaseButton';

interface ClipboardInputProps extends BaseInputProps {
  valueToCopy?: string;
}

export const ClipboardInput: React.FC<ClipboardInputProps> = ({ valueToCopy, ...props }) => {
  const { t } = useTranslation();

  const handleCopy = useCallback(
    () =>
      valueToCopy &&
      navigator.clipboard.writeText(valueToCopy).then(() => {
        notificationController.info({ message: t('common.copied') });
      }),
    [valueToCopy, t],
  );

  return (
    <SuffixInput
      suffix={
        <BaseTooltip title={t('common.copy')}>
          <BaseButton size="small" disabled={!valueToCopy} type="text" icon={<CopyOutlined />} onClick={handleCopy} />
        </BaseTooltip>
      }
      {...props}
    />
  );
};
