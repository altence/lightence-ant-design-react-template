import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { Severity } from '@app/interfaces/interfaces';
import { defineColorBySeverity } from '@app/utils/utils';
import { FONT_WEIGHT, FONT_SIZE } from '@app/styles/themes/constants';

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

  &.ant-btn.ant-btn-icon-only .anticon {
    font-size: ${FONT_SIZE.xxxl};
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

  &.ant-btn-dangerous {
    &.ant-btn-primary {
      box-shadow: none;
    }

    &.ant-btn-text:not(:disabled):hover {
      background-color: transparent;
    }
  }

  ${(props) =>
    !props.danger &&
    css`
      &.ant-btn-default,
      &.ant-btn-dashed {
        &:focus {
          background-color: var(--background-color);
        }

        &:focus,
        &:not(:disabled):hover {
          color: var(--ant-primary-color-hover);
          border-color: var(--ant-primary-color-hover);
        }
      }

      &.ant-btn-text {
        &:focus {
          background-color: rgba(0, 0, 0, 0.018);
        }

        &:not(:disabled):hover {
          background: transparent;
          color: var(--secondary-color);
        }
      }

      &.ant-btn-ghost {
        color: var(--primary-color);
        border-color: var(--primary-color);

        &:disabled {
          cursor: not-allowed;
          color: var(--disabled-color);
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
      }

      &.ant-btn-primary:not(:disabled) {
        background: var(--primary-color);

        &:focus {
          border-color: var(--ant-primary-color-hover);
          background: var(--ant-primary-color-hover);
        }

        &:hover {
          background: var(--secondary-color);

          border-color: var(--secondary-color);
        }
      }

      &.ant-btn-link {
        color: var(--primary-color);

        &:disabled {
          color: var(--disabled-color);
        }

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
      }

      ${props.$severity &&
      css`
        background: rgba(${defineColorBySeverity(props.$severity, true)}, 0.2);

        border-color: ${defineColorBySeverity(props.$severity)};

        color: ${defineColorBySeverity(props.$severity)};

        &.ant-btn-default:focus,
        &.ant-btn-default:not(:disabled):hover {
          background: var(--background-color);

          border-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);

          color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);
        }
      `}
    `}
`;
