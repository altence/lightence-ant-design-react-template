import { Button } from 'components/common/buttons/Button/Button';
import styled, { css } from 'styled-components';

interface BtnProps {
  $isFirstActive: boolean;
}

export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  &.ant-btn-icon-only.ant-btn-sm {
    height: 1.875rem;
  }
`;

export const ButtonGroup = styled.div<BtnProps>`
  display: inline-flex;
  padding: 0.325rem;
  column-gap: 0.325rem;

  border-radius: var(--border-radius);

  background-color: rgba(var(--primary-rgb-color), 0.1);

  ${(props) =>
    props.$isFirstActive
      ? css`
          & > ${Btn}:first-of-type {
            background: var(--primary-color);
            color: var(--text-secondary-color);
          }
        `
      : css`
          & > ${Btn}:last-of-type {
            background: var(--warning-color);
            color: var(--text-secondary-color);
          }
        `}

  &:not(:last-of-type) {
    margin-bottom: 0.625rem;
  }
`;
