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

  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
`;

export const Avatar = styled(AntAvatar)<Importance>`
  position: relative;

  ${(props) =>
    (props.$isPrimary && `border: 2px solid ${props.theme.colors.main.primary}`) ||
    (props.$isSecondary && `border 2px solid ${props.theme.colors.main.error}`)}
`;

export const Name = styled(Typography.Text)<Importance>`
  white-space: nowrap;

  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-weight: ${(props) => props.theme.commonFontWeight.semibold};

  color: ${(props) =>
    (props.$isPrimary && props.theme.colors.main.primary) || (props.$isSecondary && props.theme.colors.main.error)};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const Percentage = styled(Typography.Text)<PercentageProps>`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  color: ${(props) => (props.$isDowngrade ? props.theme.colors.main.error : props.theme.colors.main.success)};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;
