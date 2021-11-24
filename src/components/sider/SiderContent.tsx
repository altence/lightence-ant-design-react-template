import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import * as S from './SiderContent.styles';
import { sidebarNavigation, SidebarNavigationItem } from './sidebarNavigation';
import { Menu } from 'antd';

interface SiderContentProps {
  closeSidebar: () => void;
}

const sidebarNavFlat = sidebarNavigation.reduce(
  (result: SidebarNavigationItem[], current) =>
    result.concat(current.children && current.children.length > 0 ? current.children : current),
  [],
);

const SiderContent: React.FC<SiderContentProps> = ({ closeSidebar }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    const currentMenuItem = sidebarNavFlat.find(({ url }) => url === location.pathname);
    if (currentMenuItem) {
      setSelectedKeys([currentMenuItem.key]);
    }
  }, [location.pathname]);

  useEffect(() => {
    const openedSubmenu = sidebarNavigation.find(({ children }) =>
      children?.some(({ url }) => url === location.pathname),
    );
    if (openedSubmenu) {
      setOpenKeys([openedSubmenu.key]);
    }
  }, []);

  return (
    <S.Menu
      mode="inline"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      onClick={closeSidebar}
    >
      {sidebarNavigation.map((nav) =>
        nav.children && nav.children.length > 0 ? (
          <Menu.SubMenu key={nav.key} title={t(nav.title)} icon={nav.icon}>
            {nav.children.map((childNav) => (
              <Menu.Item key={childNav.key} title="">
                <Link to={childNav.url || ''}>{t(childNav.title)}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={nav.key} title="" icon={nav.icon}>
            <Link to={nav.url || ''}>{t(nav.title)}</Link>
          </Menu.Item>
        ),
      )}
    </S.Menu>
  );
};

export default SiderContent;
