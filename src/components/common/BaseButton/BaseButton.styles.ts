import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { Severity } from '@app/interfaces/interfaces';
import { colorTypeFrom } from '@app/utils/utils';

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
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  box-shadow: none;

  ${(props) =>
    props.$noStyle &&
    css`
      width: unset;
      padding: 0;
      height: unset;
    `}

  ${(props) =>
    !props.danger &&
    css`
      &.ant-btn-background-ghost {
        color: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.primary};

        &:disabled {
          background-color: ${({ theme }) => theme.disabledBg};
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
          color: ${({ theme }) => theme.primary5};
          border-color: ${({ theme }) => theme.primary5};
        }
      }

      &:focus {
        &.ant-btn-link,
        &.ant-btn-background-ghost {
          color: ${({ theme }) => theme.primary5};
        }

        &.ant-btn-primary {
          background-color: ${({ theme }) => theme.primary5};
        }

        &.ant-btn-primary,
        &.ant-btn-background-ghost {
          border-color: ${({ theme }) => theme.primary5};
        }
      }

      &:not(:disabled):hover {
        &.ant-btn-primary {
          background-color: ${({ theme }) => theme.secondary};
        }

        &.ant-btn-text,
        &.ant-btn-background-ghost {
          color: ${({ theme }) => theme.secondary};
          background-color: transparent;
        }

        &.ant-btn-primary,
        &.ant-btn-background-ghost {
          border-color: ${({ theme }) => theme.secondary};
        }
      }

      ${props.$severity &&
      css`
        background-color: rgba(${props.theme.rgb[colorTypeFrom(props.$severity)]}, 0.2);
        border-color: ${props.theme[colorTypeFrom(props.$severity)]};
        color: ${props.theme[colorTypeFrom(props.$severity)]};

        &.ant-btn-default {
          &:focus,
          &:not(:disabled):hover {
            background-color: ${({ theme }) => theme.background};
            border-color: rgba(${props.theme.rgb[colorTypeFrom(props.$severity)]}, 0.9);
            color: rgba(${props.theme.rgb[colorTypeFrom(props.$severity)]}, 0.9);
          }
        }
      `}
    `}
`;
