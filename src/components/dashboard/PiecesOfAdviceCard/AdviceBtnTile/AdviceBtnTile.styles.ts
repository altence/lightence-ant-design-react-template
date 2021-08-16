import styled from 'styled-components';
import { BtnProps } from '../AdviceBtnList/AdviceBtnList.styles';

export const TileRow = styled.div`
  display: flex;

  &:nth-of-type(1) {
    margin-bottom: 0.0625rem;
  }
`;

export const Tile = styled.div<BtnProps>`
  border-radius: 3px;
  width: 0.375rem;
  height: 0.375rem;

  &:nth-of-type(1) {
    margin-right: 0.0625rem;
  }

  background-color: ${(props) => props.theme.colors.primary};

  ${(props) => !props.isActive && 'opacity: 0.4'};
`;
