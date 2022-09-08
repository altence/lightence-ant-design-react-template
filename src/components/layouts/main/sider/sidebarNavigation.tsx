import React from 'react';
import {
  CompassOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
  BlockOutlined,
} from '@ant-design/icons';
import { ReactComponent as NftIcon } from '@app/assets/icons/nft-icon.svg';
import { Link } from 'react-router-dom';

export interface SidebarNavigationItem {
  label: React.ReactNode;
  key: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    label: (
      <Link to={'/'} rel={'Home page'}>
        NFT Dashboard
      </Link>
    ),
    key: 'nft-dashboard',
    // TODO use path variable
    icon: <NftIcon />,
  },
  {
    label: (
      <Link to={'/medical-dashboard'} rel={'medical dashboard'}>
        Medical Dashboard
      </Link>
    ),
    key: 'medical-dashboard',
    icon: <DashboardOutlined />,
  },
  {
    label: 'Apps',
    key: 'apps',
    icon: <HomeOutlined />,
    children: [
      {
        label: (
          <Link to={'/apps/feed'} rel={'feed'}>
            Feed
          </Link>
        ),
        key: 'feed',
      },
      {
        label: (
          <Link to={'/apps/kanban'} rel={'kanban'}>
            Kanban
          </Link>
        ),
        key: 'kanban',
      },
    ],
  },
  {
    label: 'Auth Pages',
    key: 'auth',
    icon: <UserOutlined />,
    children: [
      {
        label: (
          <Link to={'/auth/login'} rel={'login'}>
            Login
          </Link>
        ),
        key: 'login',
      },
      {
        label: (
          <Link to={'/auth/sign-up'} rel={'sign up'}>
            Sign Up
          </Link>
        ),
        key: 'singUp',
      },
      {
        label: (
          <Link to={'/auth/lock'} rel={'lock'}>
            Lock
          </Link>
        ),
        key: 'lock',
      },
      {
        label: (
          <Link to={'/auth/forgot-password'} rel={'forgot password'}>
            Forgot Password
          </Link>
        ),
        key: 'forgotPass',
      },
      {
        label: (
          <Link to={'/auth/security-code'} rel={'security code'}>
            Security Code
          </Link>
        ),
        key: 'securityCode',
      },
      {
        label: (
          <Link to={'/auth/new-password'} rel={'new password'}>
            New Password
          </Link>
        ),
        key: 'newPass',
      },
    ],
  },
  {
    label: 'Forms',
    key: 'forms',
    icon: <FormOutlined />,
    children: [
      {
        label: (
          <Link to={'/forms/advanced-forms'} rel={'advanced forms'}>
            Advanced Forms
          </Link>
        ),
        key: 'advanced-forms',
      },
    ],
  },
  {
    label: (
      <Link to={'/data-tables'} rel={'data tables'}>
        Data Tables
      </Link>
    ),
    key: 'dataTables',
    icon: <TableOutlined />,
  },
  {
    label: (
      <Link to={'/charts'} rel={'charts'}>
        Charts
      </Link>
    ),
    key: 'charts',
    icon: <LineChartOutlined />,
  },
  {
    label: 'Maps',
    key: 'maps',
    icon: <CompassOutlined />,
    children: [
      {
        label: (
          <Link to={'/maps/google-maps'} rel={'google maps'}>
            Google Maps
          </Link>
        ),
        key: 'google-maps',
      },
      {
        label: (
          <Link to={'/maps/leaflet-maps'} rel={'leaflet maps'}>
            Leaflet Maps
          </Link>
        ),
        key: 'leaflet-maps',
      },
      {
        label: (
          <Link to={'/maps/react-simple-maps'} rel={'react simple maps'}>
            React Simple Maps
          </Link>
        ),
        key: 'react-simple-maps',
      },
      {
        label: (
          <Link to={'/maps/pigeon-maps'} rel={'pigeon maps'}>
            Pigeon Maps
          </Link>
        ),
        key: 'pigeon-maps',
      },
    ],
  },
  {
    label: 'Pages',
    key: 'pages',
    icon: <LayoutOutlined />,
    children: [
      {
        label: (
          <Link to={'/profile'} rel={'profile page'}>
            Profile Page
          </Link>
        ),
        key: 'profile',
      },
      {
        label: (
          <Link to={'/server-error'} rel={'server error'}>
            Server Error
          </Link>
        ),
        key: 'serverError',
      },
      {
        label: (
          <Link to={'/404'} rel={'client error'}>
            Client Error
          </Link>
        ),
        key: '404Error',
        url: '/404',
      },
    ],
  },
  {
    label: 'UI Components',
    key: 'ui',
    icon: <BlockOutlined />,
    children: [
      {
        label: (
          <Link to={'/ui-components/alert'} rel={'alert'}>
            Alert
          </Link>
        ),
        key: 'alert',
      },
      {
        label: (
          <Link to={'/ui-components/avatar'} rel={'avatar'}>
            Avatar
          </Link>
        ),
        key: 'avatar',
      },
      {
        label: (
          <Link to={'/ui-components/auto-complete'} rel={'autocorrect'}>
            AutoComplete
          </Link>
        ),
        key: 'auto-complete',
      },
      {
        label: (
          <Link to={'/ui-components/badge'} rel={'badge'}>
            Badge
          </Link>
        ),
        key: 'badge',
      },
      {
        label: (
          <Link to={'/ui-components/breadcrumbs'} rel={'breadcrumbs'}>
            Breadcrumbs
          </Link>
        ),
        key: 'breadcrumbs',
      },
      {
        label: (
          <Link to={'/ui-components/button'} rel={'button'}>
            Button
          </Link>
        ),
        key: 'button',
      },
      {
        label: (
          <Link to={'/ui-components/checkbox'} rel={'checkbox'}>
            Checkbox
          </Link>
        ),
        key: 'checkbox',
      },
      {
        label: (
          <Link to={'/ui-components/collapse'} rel={'collapse'}>
            Collapse
          </Link>
        ),
        key: 'collapse',
      },
      {
        label: (
          <Link to={'/ui-components/date-time-picker'} rel={'datetime picker'}>
            DateTime Picker
          </Link>
        ),
        key: 'dateTimePicker',
      },
      {
        label: (
          <Link to={'/ui-components/dropdown'} rel={'dropdown'}>
            Dropdown
          </Link>
        ),
        key: 'dropdown',
      },
      {
        label: (
          <Link to={'/ui-components/input'} rel={'input'}>
            Input
          </Link>
        ),
        key: 'input',
      },
      {
        label: (
          <Link to={'/ui-components/modal'} rel={'modal'}>
            Modal
          </Link>
        ),
        key: 'modal',
      },
      {
        label: (
          <Link to={'/ui-components/notification'} rel={'notification'}>
            Notification
          </Link>
        ),
        key: 'notification',
      },
      {
        label: (
          <Link to={'/ui-components/pagination'} rel={'pagination'}>
            Pagination
          </Link>
        ),
        key: 'pagination',
      },
      {
        label: (
          <Link to={'/ui-components/popconfirm'} rel={'popconfirm'}>
            Popconfirm
          </Link>
        ),
        key: 'popconfirm',
      },
      {
        label: (
          <Link to={'/ui-components/popover'} rel={'popover'}>
            Popover
          </Link>
        ),
        key: 'popover',
      },
      {
        label: (
          <Link to={'/ui-components/progress'} rel={'progress'}>
            Progress
          </Link>
        ),
        key: 'progress',
      },
      {
        label: (
          <Link to={'/ui-components/radio'} rel={'radio'}>
            Radio
          </Link>
        ),
        key: 'radio',
      },
      {
        label: (
          <Link to={'/ui-components/rate'} rel={'rate'}>
            Rate
          </Link>
        ),
        key: 'rate',
      },
      {
        label: (
          <Link to={'/ui-components/result'} rel={'result'}>
            Result
          </Link>
        ),
        key: 'result',
      },
      {
        label: (
          <Link to={'/ui-components/select'} rel={'select'}>
            Select
          </Link>
        ),
        key: 'select',
      },
      {
        label: (
          <Link to={'/ui-components/skeleton'} rel={'skeleton'}>
            Skeleton
          </Link>
        ),
        key: 'skeleton',
      },
      {
        label: (
          <Link to={'/ui-components/spinner'} rel={'spinner'}>
            Spinner
          </Link>
        ),
        key: 'spinner',
      },
      {
        label: (
          <Link to={'/ui-components/steps'} rel={'steps'}>
            Steps
          </Link>
        ),
        key: 'steps',
      },
      {
        label: (
          <Link to={'/ui-components/switch'} rel={'switch'}>
            Switch
          </Link>
        ),
        key: 'switch',
      },
      {
        label: (
          <Link to={'/ui-components/tabs'} rel={'tabs'}>
            Tabs
          </Link>
        ),
        key: 'tabs',
      },
      {
        label: (
          <Link to={'/ui-components/upload'} rel={'upload'}>
            Upload
          </Link>
        ),
        key: 'upload',
      },
    ],
  },
];
