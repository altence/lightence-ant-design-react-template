import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import styled, { css } from 'styled-components';

interface RadioBtnProps {
  $isActive: boolean;
}

export const RadioBtn = styled(BaseRadio)<RadioBtnProps>`
  margin-right: 0;
  width: 100%;
  transition: all 0.5s ease;

  ${(props) =>
    !props.$isActive &&
    css`
      opacity: 0.5;
    `}

  & > span:last-of-type {
    flex-grow: 1;
  }
`;
