import React, { useState } from 'react';
import { Layout } from 'antd';
import { Header } from '../../../Header/Header';
import BasicSider from '../BasicSider/BasicSider';
import BasicContent from '../BasicContent/BasicContent';
import { LayoutProps } from '../../interfaces';
import * as S from './BasicLayout.styles';

const BasicLayout: React.FC<LayoutProps> = ({ children, siderContent }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <S.LayoutMaster>
      <BasicSider isCollapsed={siderCollapsed} toggleSider={toggleSider}>
        {siderContent(toggleSider)}
      </BasicSider>
      <S.LayoutMain>
        <Layout.Header>
          <Header toggleSider={toggleSider} />
        </Layout.Header>
        <BasicContent>{children}</BasicContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default BasicLayout;
