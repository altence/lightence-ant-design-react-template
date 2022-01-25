import { Typography, Avatar as AntAvatar, Row } from 'antd';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

interface ScreeningsRowProps {
  isActive: boolean;
}

interface PercentageProps {
  isDowngrade: boolean;
}

interface AvatarProps {
  isPrimary: boolean;
  isSecondary: boolean;
}

export const ScreeningsRow = styled(Row).withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<ScreeningsRowProps>`
  cursor: pointer;
  transition: all 0.3s ease;

  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

export const Avatar = styled(AntAvatar).withConfig({
  shouldForwardProp: (prop) => !['isPrimary', 'isSecondary'].includes(prop),
})<AvatarProps>`
  position: relative;

  ${(props) =>
    (props.isPrimary && `border: 2px solid ${props.theme.colors.main.primary}`) ||
    (props.isSecondary && `border 2px solid ${hexToRGB(props.theme.colors.main.error, 0.7)}`)}
`;

export const Name = styled(Typography.Text)`
  white-space: nowrap;

  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-weight: ${(props) => props.theme.commonFontWeight.semibold};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const Percentage = styled(Typography.Text).withConfig({
  shouldForwardProp: (prop) => !['isDowngrade'].includes(prop),
})<PercentageProps>`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  color: ${(props) => (props.isDowngrade ? props.theme.colors.main.error : props.theme.colors.main.success)};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;
