import React from 'react';
import { Button } from 'antd';
import * as S from './AdviceBtnList.styles';

export interface AdviceBtnProps {
  isActive: boolean;
  onClick: () => void;
}

export const AdviceListBtn: React.FC<AdviceBtnProps> = ({ isActive, onClick }) => {
  return (
    <Button type="text" onClick={onClick}>
      <S.Line isActive={isActive} />
      <S.Line isActive={isActive} />
      <S.Line isActive={isActive} />
    </Button>
  );
};
