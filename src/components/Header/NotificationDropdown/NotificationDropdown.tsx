import React from 'react';
import { Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { NotificationMenu } from './NotificationMenu/NotificationMenu';
import { DropdownHeader } from '../Header.styles';
import { Badge } from 'components/common/Badge/Badge';

export const NotificationDropdown: React.FC = () => {
  return (
    <Dropdown trigger={['click']} overlay={<NotificationMenu />}>
      <DropdownHeader>
        <Badge dot>
          <BellOutlined />
        </Badge>
      </DropdownHeader>
    </Dropdown>
  );
};
