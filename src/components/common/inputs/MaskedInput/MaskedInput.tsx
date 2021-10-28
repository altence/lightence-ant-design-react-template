import React from 'react';
import { MaskedInput as AntMaskedInput } from 'antd-mask-input';
import { InputProps } from 'antd';

interface MaskedInputProps extends InputProps {
  mask: string;
  placeholderChar?: string;
  value?: string;
}

export const MaskedInput: React.FC<MaskedInputProps> = ({ mask, placeholderChar, value, ...props }) => (
  <AntMaskedInput size="large" mask={mask} placeholderChar={placeholderChar} value={value} {...props} />
);
