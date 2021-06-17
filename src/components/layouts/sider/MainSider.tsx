import { Layout } from 'antd';

import React from 'react';
import { SiderProps } from 'antd/lib/layout';
import styled from 'styled-components';
import Overlay from '../../common/Overlay';

const { Sider } = Layout;

interface MainSiderProps extends SiderProps {
  toggleSider: () => void;
  siderCollapsed: boolean;
}

const MainSider: React.FC<MainSiderProps> = ({ children, toggleSider, siderCollapsed, ...props }) => {
  return (
    <>
      <SiderStyled {...props}>{children}</SiderStyled>
      <Overlay onClick={toggleSider} show={!siderCollapsed} />
    </>
  );
};

const SiderStyled = styled(Sider)`
  position: fixed;
  z-index: 2;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
`;

export default MainSider;
