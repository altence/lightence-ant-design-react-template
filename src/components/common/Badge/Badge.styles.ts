import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';
import { BadgeType } from './Badge';

interface BadgeProps {
  severity: BadgeType;
}

export const Badge = styled(AntBadge)<BadgeProps>`
  & .ant-badge-count {
    background: ${(props) =>
      (props.severity === 'error' && props.theme.colors.main.additional) ||
      (props.severity === 'warning' && props.theme.colors.main.additional2) ||
      (props.severity === 'success' && props.theme.colors.main.additional3) ||
      (props.severity === 'default' && props.theme.colors.main.primary) ||
      props.theme.colors.main.primary};
  }
`;
