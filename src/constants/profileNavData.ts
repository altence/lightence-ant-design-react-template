import { BellOutlined, DollarOutlined, SecurityScanOutlined, UserOutlined } from '@ant-design/icons';
import { FC } from 'react';

interface ProfileNavItem {
  id: number;
  name: string;
  Icon: FC;
  color: 'primary' | 'error' | 'warning' | 'success';
  href: string;
}

export const profileNavData: ProfileNavItem[] = [
  {
    id: 1,
    name: 'profile.nav.personalInfo.title',
    Icon: UserOutlined,
    color: 'primary',
    href: 'info',
  },
  {
    id: 2,
    name: 'profile.nav.securitySettings.title',
    Icon: SecurityScanOutlined,
    color: 'success',
    href: 'security',
  },
  {
    id: 3,
    name: 'profile.nav.notifications.title',
    Icon: BellOutlined,
    color: 'error',
    href: 'notifications',
  },
  {
    id: 4,
    name: 'profile.nav.payments.title',
    Icon: DollarOutlined,
    color: 'warning',
    href: 'payments',
  },
];
