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

  font-weight: 600;
  box-shadow: none;

  &.ant-btn.ant-btn-icon-only > span {
    transform: none;
  }

  &:not(:disabled):focus-visible {
    outline: none;
  }

  ${(props) =>
    props.$noStyle &&
    css`
      width: unset;
      padding: 0;
      height: unset;
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
      transition-duration: 0.3s;

      ${props.$severity &&
      css`
        box-shadow: none;
        text-shadow: none;
        background: rgba(${defineColorBySeverity(props.$severity, true)}, 0.2);

        border-color: ${defineColorBySeverity(props.$severity)};

        color: ${defineColorBySeverity(props.$severity)};

        &:focus,
        &:not(:disabled):hover {
          background: var(--background-color);

          border-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);

          color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);
        }
      `}

      ${(typeof props.type === 'undefined' || props.type === 'default' || props.type === 'dashed') &&
      css`
        &:focus {
          background-color: var(--background-color);
        }

        ${props.$severity === 'info' &&
        css`
          &:focus,
          &:not(:disabled):hover {
            color: var(--ant-primary-color-hover);
            border-color: var(--ant-primary-color-hover);
          }
        `}
      `}

      ${props.type === 'text' &&
      css`
        &:focus {
          background-color: rgba(0, 0, 0, 0.02);
        }

        &:not(:disabled):hover {
          background: transparent;
          color: var(--secondary-color);
        }
      `}

      ${props.type === 'ghost' &&
      css`
        color: var(--primary-color);
        border-color: var(--primary-color);

        &:disabled {
          cursor: not-allowed;
          border-color: var(--border-base-color);
          background-color: var(--disabled-bg-color);
        }

        &:focus {
          color: var(--ant-primary-color-hover);
          border-color: var(--ant-primary-color-hover);
        }

        &:not(:disabled):hover {
          color: var(--secondary-color);

          border-color: var(--secondary-color);
        }
      `}

      ${props.type === 'primary' &&
      css`
        background: var(--primary-color);

        &:focus {
          border-color: var(--ant-primary-color-hover);
          background: var(--ant-primary-color-hover);
        }

        &:not(:disabled):hover {
          background: var(--secondary-color);

          border-color: var(--secondary-color);
        }
      `}

      ${props.type === 'link' &&
      css`
        color: var(--primary-color);

        &:focus {
          color: var(--ant-primary-color-hover);
        }

        &:not(:disabled):hover {
          text-decoration: none;
          color: var(--ant-primary-color-hover);
        }

        & span,
        a {
          text-decoration: underline;
        }
      `};
    `}
`;
