import { defineColorBySeverity } from '@app/utils/utils';
import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';
import { NotificationType } from '../Notification/Notification';

interface BadgeProps {
  severity?: NotificationType;
}

export const Badge = styled(AntBadge)<BadgeProps>`
  color: inherit;

  & .ant-badge-count {
    background: ${(props) => defineColorBySeverity(props.severity, props.theme)};
  }
`;
