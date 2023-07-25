import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { Severity } from '@app/interfaces/interfaces';
import { defineColorBySeverity } from '@app/utils/utils';
import { FONT_WEIGHT } from '@app/styles/themes/constants';

interface BtnProps {
  $severity?: Severity;
  $noStyle?: boolean;
}

export const Button = styled(AntButton)<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  transition-duration: 0.3s;

  font-weight: ${FONT_WEIGHT.semibold};
  box-shadow: none;

  ${(props) =>
    props.$noStyle &&
    css`
      width: unset;
      padding: 0;
      height: unset;
    `}

  &.ant-btn-dangerous {
    &.ant-btn-text {
      &:focus,
      &:not(:disabled):hover {
        background: rgba(0, 0, 0, 0.018);
      }
    }
  }

  ${(props) =>
    !props.danger &&
    css`
      &.ant-btn-background-ghost {
        color: var(--primary-color);
        border-color: var(--primary-color);

        &:disabled {
          background-color: var(--disabled-bg-color);
        }
      }

      &.ant-btn-link {
        span,
        a {
          text-decoration: underline;
        }
      }

      &:focus,
      &:not(:disabled):hover {
        &.ant-btn-default,
        &.ant-btn-dashed {
          color: var(--ant-primary-5);
          border-color: var(--ant-primary-5);
        }
      }

      &:focus {
        &.ant-btn-link,
        &.ant-btn-background-ghost {
          color: var(--ant-primary-5);
        }

        &.ant-btn-text {
          background-color: rgba(0, 0, 0, 0.018);
        }

        &.ant-btn-primary {
          background-color: var(--ant-primary-5);
        }

        &.ant-btn-primary,
        &.ant-btn-background-ghost {
          border-color: var(--ant-primary-5);
        }
      }

      &:not(:disabled):hover {
        &.ant-btn-primary {
          background-color: var(--secondary-color);
        }

        &.ant-btn-text,
        &.ant-btn-background-ghost {
          color: var(--secondary-color);
          background-color: transparent;
        }

        &.ant-btn-primary,
        &.ant-btn-background-ghost {
          border-color: var(--secondary-color);
        }
      }

      ${props.$severity &&
      css`
        background-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.2);
        border-color: ${defineColorBySeverity(props.$severity)};
        color: ${defineColorBySeverity(props.$severity)};

        &.ant-btn-default {
          &:focus,
          &:not(:disabled):hover {
            background-color: var(--background-color);
            border-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);
            color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);
          }
        }
      `}
    `}
`;
