import React from 'react';
import { MenuItemProps } from 'antd';
import { Link } from 'react-router-dom';
import * as S from './SiderMenuLink.styles';

interface SiderMenuLinkProps extends MenuItemProps {
  href: string;
  title: string;
  isActive: boolean;
}

export const SiderMenuLink: React.FC<SiderMenuLinkProps> = ({ icon, href, title, isActive, ...props }) => (
  <S.MenuItem icon={icon} {...props} isActive={isActive}>
    <Link to={href}>{title}</Link>
  </S.MenuItem>
);
