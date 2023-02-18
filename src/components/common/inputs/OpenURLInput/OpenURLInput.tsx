import React, { useMemo } from 'react';
import { SuffixInput } from '../SuffixInput/SuffixInput';
import { useTranslation } from 'react-i18next';
import { FileTextOutlined } from '@ant-design/icons';
import { BaseInputProps } from '../BaseInput/BaseInput';
import { websitePattern } from 'constants/patterns';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseTooltip } from '../../BaseTooltip/BaseTooltip';

interface OpenURLInputProps extends BaseInputProps {
  href?: string;
  target?: string;
}

export const OpenURLInput: React.FC<OpenURLInputProps> = ({ href, target = '_blank', ...props }) => {
  const { t } = useTranslation();

  const isMatch = useMemo(() => new RegExp(websitePattern).test(href || ' '), [href]);

  return (
    <SuffixInput
      suffix={
        <BaseTooltip title={t('common.openInNewTab')}>
          <BaseButton
            size="small"
            href={href}
            target={target}
            disabled={!isMatch}
            type="text"
            icon={<FileTextOutlined />}
          />
        </BaseTooltip>
      }
      {...props}
    />
  );
};
