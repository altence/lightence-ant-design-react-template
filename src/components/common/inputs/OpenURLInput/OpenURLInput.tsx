import React, { useEffect, useState } from 'react';
import { Button, Tooltip } from 'antd';
import { SuffixInput } from '../SuffixInput/SuffixInput';
import { useTranslation } from 'react-i18next';
import { FileTextOutlined } from '@ant-design/icons';
import { InputProps } from '../Input/Input';
import { websitePattern } from 'constants/patterns';

interface OpenURLInputProps extends InputProps {
  href: string | undefined;
  target?: string;
}

export const OpenURLInput: React.FC<OpenURLInputProps> = ({ href, target, ...props }) => {
  const [isMatchesRegex, setMatchesRegexp] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    setMatchesRegexp(websitePattern.test(href || ' '));
  }, [href]);

  return (
    <SuffixInput
      suffix={
        <Tooltip title={t('common.openInNewTab')}>
          <Button href={href} target={target} disabled={!isMatchesRegex} type="text" icon={<FileTextOutlined />} />
        </Tooltip>
      }
      {...props}
    />
  );
};
