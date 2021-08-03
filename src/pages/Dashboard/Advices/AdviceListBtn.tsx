import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

export interface AdviceBtnProps {
  isActive: boolean;
  onClick: () => void;
}

export const AdviceListBtn: React.FC<AdviceBtnProps> = ({ isActive, onClick }) => {
  return (
    <ButtonStyled type="text" onClick={onClick}>
      <Item isActive={isActive} />
      <Item isActive={isActive} />
      <Item isActive={isActive} />
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Button)``;

export interface ItemProps {
  isActive: boolean;
}

const Item = styled.div<ItemProps>`
  width: 1.5rem;
  height: 0.3rem;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.2rem;

  ${(props) => !props.isActive && 'opacity: 0.4'};
`;
