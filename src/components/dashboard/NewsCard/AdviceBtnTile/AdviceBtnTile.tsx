import React from 'react';
import { Button } from 'antd';
import { AdviceBtnProps } from '../AdviceBtnList/AdviceBtnList';
import * as S from './AdviceBtnTile.styles';

export const AdviceTileBtn: React.FC<AdviceBtnProps> = ({ isActive, onClick }) => {
  return (
    <Button type="text" onClick={onClick}>
      <S.TileRow>
        <S.Tile isActive={isActive} />
        <S.Tile isActive={isActive} />
      </S.TileRow>
      <S.TileRow>
        <S.Tile isActive={isActive} />
        <S.Tile isActive={isActive} />
      </S.TileRow>
    </Button>
  );
};
