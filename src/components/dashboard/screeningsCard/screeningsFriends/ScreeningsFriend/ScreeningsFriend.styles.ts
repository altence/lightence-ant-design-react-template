import { FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Typography, Avatar as AntAvatar, Row } from 'antd';
import styled from 'styled-components';

interface ScreeningsRowProps {
  $isActive: boolean;
}

interface PercentageProps {
  $isDowngrade: boolean;
}

interface Importance {
  $isPrimary: boolean;
  $isSecondary: boolean;
}

export const ScreeningsRow = styled(Row)<ScreeningsRowProps>`
  cursor: pointer;
  transition: all 0.3s ease;

  .ant-typography {
    font-weight: ${(props) => (props.$isActive ? FONT_WEIGHT.bold : FONT_WEIGHT.regular)};
  }
`;

export const Avatar = styled(AntAvatar)<Importance>`
  position: relative;

  ${(props) =>
    (props.$isPrimary && `border: 2px solid var(--primary-color)`) ||
    (props.$isSecondary && `border 2px solid var(--error-color)`)}
`;

export const Name = styled(Typography.Text)<Importance>`
  white-space: nowrap;

  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.semibold};

  color: ${(props) => (props.$isPrimary && 'var(--primary-color)') || (props.$isSecondary && 'var(--error-color)')};

  @media only screen and ${media.xl} {
    font-size: ${FONT_SIZE.md};
  }
`;

export const Percentage = styled(Typography.Text)<PercentageProps>`
  font-size: ${FONT_SIZE.xs};

  color: ${(props) => (props.$isDowngrade ? 'var(--error-color)' : 'var(--success-color)')};

  @media only screen and ${media.xl} {
    font-size: ${FONT_SIZE.md};
  }
`;
