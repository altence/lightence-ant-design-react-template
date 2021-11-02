import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';
import { NoticeType } from '../Notice/Notice';

interface BadgeProps {
  severity?: NoticeType;
}

export const Badge = styled(AntBadge)<BadgeProps>`
  & .ant-badge-count {
    background: ${(props) =>
      (props.severity === 'error' && props.theme.colors.main.error) ||
      (props.severity === 'warning' && props.theme.colors.main.warning) ||
      (props.severity === 'success' && props.theme.colors.main.success) ||
      (props.severity === 'info' && props.theme.colors.main.primary) ||
      props.theme.colors.main.primary};
  }
`;
