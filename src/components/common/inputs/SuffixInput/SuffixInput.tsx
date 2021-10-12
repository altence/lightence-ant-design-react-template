import React from 'react';
import { Input, InputProps } from '../Input/Input';
import * as S from './SuffixInput.styles';

interface SuffixInputProps extends InputProps {
  suffix: React.ReactNode;
  isVisibleSuffix?: boolean;
}

export const SuffixInput: React.FC<SuffixInputProps> = ({ suffix, isVisibleSuffix = true, ...props }) => (
  <Input suffix={<S.Suffix isVisible={isVisibleSuffix}>{suffix}</S.Suffix>} {...props} />
);
