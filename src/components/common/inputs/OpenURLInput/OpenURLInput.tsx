import React, { useMemo } from 'react';
import { Tooltip } from 'antd';
import { SuffixInput } from '../SuffixInput/SuffixInput';
import { useTranslation } from 'react-i18next';
import { FileTextOutlined } from '@ant-design/icons';
import { InputProps } from '../Input/Input';
import { websitePattern } from 'constants/patterns';
import { Button } from '@app/components/common/buttons/Button/Button';

interface OpenURLInputProps extends InputProps {
  href?: string;
  target?: string;
}

export const OpenURLInput: React.FC<OpenURLInputProps> = ({ href, target = '_blank', ...props }) => {
  const { t } = useTranslation();

  const isMatch = useMemo(() => new RegExp(websitePattern).test(href || ' '), [href]);

  return (
    <SuffixInput
      suffix={
        <Tooltip title={t('common.openInNewTab')}>
          <Button
            size="small"
            href={href}
            target={target}
            disabled={!isMatch}
            type="text"
            icon={<FileTextOutlined />}
          />
        </Tooltip>
      }
      {...props}
    />
  );
};
