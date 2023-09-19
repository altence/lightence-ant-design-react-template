import styled from 'styled-components';
import { Badge as AntBadge } from 'antd';
import { colorTypeFrom } from '@app/utils/utils';
import { NotificationType } from '../BaseNotification/BaseNotification';

interface BadgeProps {
  $severity?: NotificationType;
}

export const Badge = styled(AntBadge)<BadgeProps>`
  .ant-badge-count {
    background: ${({ $severity, theme }) => theme[colorTypeFrom($severity)]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  .ant-badge-count-sm {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
