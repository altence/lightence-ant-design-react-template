import styled from 'styled-components';
import { Typography, Divider } from 'antd';
import { MenuItem as MenuItemBase } from '@app/components/common/Menu/Menu';

export const Text = styled(Typography.Text)`
  font-size: 0.875rem;
  font-weight: 600;

  & > a {
    display: block;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1rem;
  }
`;

export const MenuItem = styled(MenuItemBase)`
  height: 50px;
`;

export const ItemsDivider = styled(Divider).withConfig({
  shouldForwardProp: (prop) => !['eventKey', 'warnKey'].includes(prop),
})`
  margin: 0;
`;
