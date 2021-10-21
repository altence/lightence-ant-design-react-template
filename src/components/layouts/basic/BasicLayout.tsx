import React, { useState } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Header } from '../../Header/Header';
import BasicSider from './BasicSider';
import BasicContent from './BasicContent';
import BasicHeader from './BasicHeader';
import { LayoutProps } from '../interfaces';
import bg from 'assets/images/bg.png';

const BasicLayout: React.FC<LayoutProps> = ({ children, siderContent }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <LayoutMaster>
      <BasicSider isCollapsed={siderCollapsed} toggleSider={toggleSider}>
        {siderContent(toggleSider)}
      </BasicSider>
      <LayoutMain>
        <BasicHeader>
          <Header toggleSider={toggleSider} />
        </BasicHeader>
        <BasicContent>{children}</BasicContent>
      </LayoutMain>
    </LayoutMaster>
  );
};

const LayoutMaster = styled(Layout)`
  min-height: 100vh;
`;

const LayoutMain = styled(Layout)`
  background: url(${bg}) no-repeat;
  background-size: auto 200px;

  background-color: ${(props) => props.theme.colors.back.lightGray};

  @media only screen and ${(props) => props.theme.media.md} {
    margin-left: 60px;

    background: url(${bg}) no-repeat;
    background-size: 100% 250px;

    background-color: ${(props) => props.theme.colors.back.lightGray};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin-left: unset;
  }
`;

export default BasicLayout;
