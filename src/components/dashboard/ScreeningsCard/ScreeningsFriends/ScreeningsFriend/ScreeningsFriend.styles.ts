import { Typography, Avatar as AntAvatar } from 'antd';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

interface PercentageProps {
  isDowngrade: boolean;
}

interface AvatarProps {
  isPrimary: boolean;
  isSecondary: boolean;
}

export const Avatar = styled(AntAvatar).withConfig({
  shouldForwardProp: (prop) => !['isPrimary', 'isSecondary'].includes(prop),
})<AvatarProps>`
  position: relative;
  ${(props) =>
    (props.isPrimary && `border: 2px solid ${props.theme.colors.main.primary}`) ||
    (props.isSecondary && `border 2px solid ${hexToRGB(props.theme.colors.main.error, 0.7)}`)}
`;

export const Name = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
`;

export const Percentage = styled(Typography.Text)<PercentageProps>`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  color: ${(props) => (props.isDowngrade ? props.theme.colors.main.error : props.theme.colors.main.success)};
`;
