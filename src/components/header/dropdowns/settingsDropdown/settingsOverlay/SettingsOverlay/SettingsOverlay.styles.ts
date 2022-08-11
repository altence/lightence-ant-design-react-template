import styled from 'styled-components';
import { DropdownMenu } from '@app/components/header/Header/Header.styles';
import { Radio } from 'antd';

export const SettingsOverlayMenu = styled(DropdownMenu)`
  width: 13rem;

  &.ant-menu {
    box-shadow: var(--box-shadow);
  }
`;

export const RadioBtn = styled(Radio)`
  font-size: 0.875rem;
`;

export const PwaInstallWrapper = styled.div`
  padding: 0 1rem 0.75rem;
`;
