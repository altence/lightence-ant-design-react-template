import { Button, Layout } from 'antd';

import React, { ReactNode } from 'react';
import { SiderProps } from 'antd/lib/layout';
import styled from 'styled-components';
import Overlay from '../../common/Overlay';
import { CloseOutlined } from '@ant-design/icons';

const { Sider } = Layout;

interface MainSiderProps extends SiderProps {
  toggleSider: () => void;
  siderCollapsed: boolean;
  logo: ReactNode;
}

const MobileSider: React.FC<MainSiderProps> = ({ children, toggleSider, siderCollapsed, logo, ...props }) => {
  return (
    <>
      <SiderStyled trigger={null} collapsedWidth={0} collapsible={true} width={260} {...props}>
        <SiderHeader>
          <Button type="link" size="small" icon={<CloseIcon />} onClick={toggleSider} />
        </SiderHeader>
        <LogoDiv>
          <a href="/">{logo}</a>
        </LogoDiv>
        <SiderContent>{children}</SiderContent>
      </SiderStyled>
      <Overlay onClick={toggleSider} show={!siderCollapsed} />
    </>
  );
};

const SiderStyled = styled(Sider)`
  position: fixed;
  z-index: 5;
  height: 100%;
  color: #ffffff;
`;

const SiderHeader = styled.div`
  height: 3rem;
  padding: 0 0.75rem 0 1rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseIcon = styled(CloseOutlined)`
  color: ${(props) => props.theme.colors.basic};
`;

const SiderContent = styled.div`
  padding: 0.75rem 1rem;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export default MobileSider;
