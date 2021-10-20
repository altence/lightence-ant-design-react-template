import React, { ReactNode } from 'react';
import { Button, Layout } from 'antd';
import styled from 'styled-components';
import { SiderProps } from 'antd/lib/layout';
import { CloseOutlined } from '@ant-design/icons';
import Overlay from '../../common/Overlay';

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
        <SiderContent>
          <CloseWrapper>
            <Button type="link" size="middle" icon={<CloseIcon />} onClick={toggleSider} />
          </CloseWrapper>
          {children}
        </SiderContent>
      </SiderStyled>
      <Overlay onClick={toggleSider} show={!siderCollapsed} />
    </>
  );
};

const SiderStyled = styled(Sider)`
  position: fixed;
  right: 0;
  z-index: 5;
  height: 100%;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const CloseWrapper = styled.div`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const CloseIcon = styled(CloseOutlined)`
  color: ${(props) => props.theme.colors.text.secondary};
`;

const SiderContent = styled.div`
  padding: 0.75rem 1rem;
`;

export default MobileSider;
