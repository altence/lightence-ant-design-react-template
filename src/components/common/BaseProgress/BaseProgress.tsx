import React from 'react';
import { ProgressProps } from 'antd';
import * as S from './BaseProgress.styles';

export type BaseProgressProps = ProgressProps;

export const BaseProgress: React.FC<ProgressProps> = (props) => {
  return <S.Progress {...props} />;
};
