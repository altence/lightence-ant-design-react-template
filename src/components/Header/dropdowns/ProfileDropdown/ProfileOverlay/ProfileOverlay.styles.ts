import styled from 'styled-components';
import { Typography, Divider } from 'antd';
import { DropdownMenu } from 'components/Header/Header.styles';

export const Text = styled(Typography.Text)`
  font-size: 0.875rem;
  font-weight: 600;

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1rem;
  }
`;

export const ProfileDropdownOverlay = styled(DropdownMenu)`
  .ant-menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemsDivider = styled(Divider).withConfig({
  shouldForwardProp: (prop) => !['eventKey', 'warnKey'].includes(prop),
})`
  margin: 0;
`;
