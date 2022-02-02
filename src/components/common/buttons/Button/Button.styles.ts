import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { Severity } from '@app/interfaces/interfaces';
import { defineColorBySeverity, hexToRGB, shadeColor } from '@app/utils/utils';

interface BtnProps {
  type: ButtonType;
  $severity?: Severity;
  $noStyle?: boolean;
}

export const Button = styled(AntButton)<BtnProps>`
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
      ${props.$severity &&
      css`
        box-shadow: none;
        text-shadow: none;

        background: ${hexToRGB(defineColorBySeverity(props.$severity, props.theme), 0.2)};

        border-color: ${defineColorBySeverity(props.$severity, props.theme)};

        color: ${defineColorBySeverity(props.$severity, props.theme)};

        &:hover {
          background: ${props.theme.colors.main.mainBackground};

          border-color: ${shadeColor(defineColorBySeverity(props.$severity, props.theme), 10)};

          color: ${shadeColor(defineColorBySeverity(props.$severity, props.theme), 10)};
        }

        &:focus {
          background: ${props.theme.colors.main.mainBackground};

          border-color: ${shadeColor(defineColorBySeverity(props.$severity, props.theme), 10)};

          color: ${shadeColor(defineColorBySeverity(props.$severity, props.theme), 10)};
        }
      `}

      ${props.type === 'text' &&
      css`
        &:hover {
          background: transparent;
          color: ${props.theme.colors.main.secondary};
        }
      `}

      ${props.type === 'ghost' &&
      css`
        &:hover {
          color: ${props.theme.colors.main.secondary};

          border-color: ${props.theme.colors.main.secondary};
        }
      `}

      ${props.type === 'primary' &&
      css`
        &:hover {
          background: ${props.theme.colors.main.secondary};

          border-color: ${props.theme.colors.main.secondary};
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
