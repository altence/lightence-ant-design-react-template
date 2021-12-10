import React from 'react';
import { ProgressProps } from 'antd';
import * as S from './Progress.styles';

export const Progress: React.FC<ProgressProps> = (props) => {
  return <S.Progress {...props} />;
};
