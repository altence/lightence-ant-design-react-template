import styled from 'styled-components';
import { Divider, Row, Typography } from 'antd';
import { DropdownMenu } from '@app/components/header/Header.styles';
import { Button } from 'components/common/buttons/Button/Button';
import { media } from '@app/styles/themes/constants';

export const MenuRow = styled(Row).withConfig({
  shouldForwardProp: (prop) => !['eventKey', 'warnKey'].includes(prop),
})``;

export const NoticesOverlayMenu = styled(DropdownMenu)`
  padding: 12px 16px;
  max-width: 15rem;
  border-right: 0;

  @media only screen and ${media.md} {
    max-width: 25rem;
  }
`;

export const SplitDivider = styled(Divider)`
  margin: 0 0.5rem;
`;

export const LinkBtn = styled(Button)`
  &.ant-btn {
    padding: 0;
    font-size: 0.875rem;
    height: unset;
    line-height: unset;
  }
`;

export const Btn = styled(Button)`
  width: 100%;
`;

export const Text = styled(Typography.Text)`
  display: block;
  text-align: center;
`;
