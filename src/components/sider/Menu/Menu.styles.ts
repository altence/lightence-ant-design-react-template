import styled from 'styled-components';
import { Menu } from 'antd';
import { Badge } from 'components/common/Badge/Badge';

export const MenuItem = styled(Menu.Item)`
  color: ${(props) => props.theme.colors.text.secondary};

  & a button span {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

export const MenuContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationBadge = styled(Badge)`
  padding: 0 0.5rem;
`;
