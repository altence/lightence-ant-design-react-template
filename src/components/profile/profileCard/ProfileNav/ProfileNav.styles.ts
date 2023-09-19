import styled, { css } from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';

interface BtnProps {
  $isActive: boolean;
  color: 'primary' | 'error' | 'warning' | 'success';
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const Btn = styled(BaseButton)<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: unset !important;
  width: 100%;
  column-gap: 12px;

  &.ant-btn:not(:disabled):hover {
    background-color: rgba(${({ theme }) => theme.rgb.primary}, 0.05);
  }

  ${(props) =>
    props.$isActive &&
    css`
      background-color: rgba(${props.theme.rgb.primary}, 0.05);
    `}

  & > span:first-of-type {
    padding: 0.625rem;
    border-radius: 10px;
    color: ${(props) => props.theme[props.color]};
    background-color: rgba(${({ theme }) => theme.rgb.primary}, 0.05);
  }
`;
