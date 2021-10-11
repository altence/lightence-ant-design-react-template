import React from 'react';
import { MaskedInput as AntMaskedInput } from 'antd-mask-input';
import { InputProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

interface MaskedInputProps extends InputProps {
  mask: string;
  placeholderChar?: string;
  value?: string;
}

export const MaskedInput: React.FC<MaskedInputProps> = ({ mask, placeholderChar, value, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  return (
    <AntMaskedInput
      size={(isTablet && 'large') || 'middle'}
      mask={mask}
      placeholderChar={placeholderChar}
      value={value}
      {...props}
    />
  );
};
