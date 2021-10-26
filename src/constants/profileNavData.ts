import { BellOutlined, DollarOutlined, SecurityScanOutlined, UserOutlined } from '@ant-design/icons';

export const profileNavData = [
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
