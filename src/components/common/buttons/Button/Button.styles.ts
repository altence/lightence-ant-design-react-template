import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { Severity } from '@app/interfaces/interfaces';
import { defineColorBySeverity } from '@app/utils/utils';

interface BtnProps {
  $severity?: Severity;
  $noStyle?: boolean;
}

export const Button = styled(AntButton)<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  ${(props) =>
    props.$noStyle &&
    css`
      width: unset !important;
      padding: 0 !important;
      height: unset !important;
    `}

  &[disabled],
  &[disabled]:active,
  &[disabled]:focus,
  &[disabled]:hover {
    color: var(--disabled-color);
  }
  ${(props) =>
    !props.danger &&
    css`
      ${props.$severity &&
      css`
        box-shadow: none;
        text-shadow: none;
        background: rgba(${defineColorBySeverity(props.$severity, true)}, 0.2) !important;

        border-color: ${defineColorBySeverity(props.$severity)} !important;

        color: ${defineColorBySeverity(props.$severity)} !important;

        &:hover {
          background: var(--background-color) !important;

          border-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9) !important;

          color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9) !important;
        }

        &:focus {
          background: var(--background-color) !important;

          border-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9) !important;

          color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9) !important;
        }
      `}

      ${props.type === 'text' &&
      css`
        &:hover {
          background: transparent;
          color: var(--secondary-color);
        }
      `}

      ${props.type === 'ghost' &&
      css`
        &:hover {
          color: var(--secondary-color);

          border-color: var(--secondary-color);
        }
      `}

      ${props.type === 'primary' &&
      css`
        background: ${(props) => props.theme.colors.main.primaryGradient};

        &:hover {
          background: var(--secondary-color);

          border-color: var(--secondary-color);
        }
      `}

      ${props.type === 'link' &&
      css`
        & span,
        a {
          text-decoration: underline;
        }
      `};
    `}
`;
