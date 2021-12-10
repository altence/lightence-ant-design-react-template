import React from 'react';
import { ResultProps } from 'antd';
import * as S from './Result.styles';

export const Result: React.FC<ResultProps> = (props) => {
  return <S.Result {...props} />;
};
