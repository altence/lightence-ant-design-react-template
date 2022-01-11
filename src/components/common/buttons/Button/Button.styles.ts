import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { Severity } from '@app/interfaces/interfaces';
import { defineColorBySeverity, hexToRGB, shadeColor } from '@app/utils/utils';

interface BtnProps {
  type: ButtonType;
  $severity?: Severity;
}

export const Button = styled(AntButton)<BtnProps>`
  ${(props) =>
    !props.danger &&
    css`
      ${props.$severity &&
      css`
        background: ${hexToRGB(defineColorBySeverity(props.$severity, props.theme), 0.2)};

        border-color: ${defineColorBySeverity(props.$severity, props.theme)};

        color: ${defineColorBySeverity(props.$severity, props.theme)};

        &:hover {
          background: '#fff';

          border-color: ${shadeColor(defineColorBySeverity(props.$severity, props.theme), 10)} !important;

          color: ${shadeColor(defineColorBySeverity(props.$severity, props.theme), 10)} !important;
        }

        &:focus {
          background: '#fff';

          border-color: ${shadeColor(defineColorBySeverity(props.$severity, props.theme), 10)} !important;

          color: ${shadeColor(defineColorBySeverity(props.$severity, props.theme), 10)} !important;
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
