import { defineColorBySeverity } from '@app/utils/utils';
import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';
import { NotificationType } from '../BaseNotification/BaseNotification';
import { FONT_SIZE } from '@app/styles/themes/constants';

interface BadgeProps {
  $severity?: NotificationType;
}

export const Badge = styled(AntBadge)<BadgeProps>`
  .ant-badge-count {
    background: ${(props) => defineColorBySeverity(props.$severity)};
    font-size: ${FONT_SIZE.xs};
  }

  .ant-badge-count-sm {
    font-size: ${FONT_SIZE.xs};
  }
`;
