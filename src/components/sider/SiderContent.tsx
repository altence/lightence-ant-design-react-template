import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as S from './SiderContent.styles';
import { sidebarNavigation } from './sidebarNavigation';
import { Menu } from 'antd';

const SiderContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Menu mode="inline">
      {sidebarNavigation.map((nav, index) =>
        nav.children && nav.children.length > 0 ? (
          <Menu.SubMenu key={index} title={t(nav.title)} icon={nav.icon}>
            {nav.children.map((childNav, index) => (
              <Menu.Item key={nav.title + index} title="">
                <Link to={childNav.url || ''}>{t(childNav.title)}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={index} title="" icon={nav.icon}>
            <Link to={nav.url || ''}>{t(nav.title)}</Link>
          </Menu.Item>
        ),
      )}
    </S.Menu>
  );
};

export default SiderContent;
