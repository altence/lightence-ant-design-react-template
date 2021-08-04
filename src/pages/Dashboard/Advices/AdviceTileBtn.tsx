import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { AdviceBtnProps, ItemProps } from './AdviceListBtn';

export const AdviceTileBtn: React.FC<AdviceBtnProps> = ({ isActive, onClick }) => {
  return (
    <ButtonStyled type="text" onClick={onClick}>
      <Tile isActive={isActive} />
      <Tile isActive={isActive} />
      <Tile isActive={isActive} />
      <Tile isActive={isActive} />
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 55px;
`;

const Tile = styled.div<ItemProps>`
  height: 0.625rem;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  flex: 0 0 calc(50% - 1px);

  ${(props) => !props.isActive && 'opacity: 0.4'};
`;
