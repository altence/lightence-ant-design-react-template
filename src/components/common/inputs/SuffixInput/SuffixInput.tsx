import React from 'react';
import { Input, InputProps } from '../Input/Input';
import * as S from './SuffixInput.styles';

export interface SuffixInputProps extends InputProps {
  suffix: React.ReactNode;
  isOpenSuffix?: boolean;
}

export const SuffixInput: React.FC<SuffixInputProps> = ({ suffix, isOpenSuffix = true, ...props }) => (
  <Input suffix={<S.Suffix isOpen={isOpenSuffix}>{suffix}</S.Suffix>} {...props} />
);
