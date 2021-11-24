import React, { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { NotificationsOverlay } from './NotificationsOverlay/NotificationsOverlay';
import { Badge } from 'components/common/Badge/Badge';
import { getNotifications, Notification } from 'api/notifications.api';
import { DropdownHeader } from '../../Header.styles';

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    getNotifications().then((res) => setNotifications(res));
  }, []);

  return (
    <Dropdown
      trigger={['click']}
      overlay={<NotificationsOverlay notifications={notifications} setNotifications={setNotifications} />}
    >
      <DropdownHeader>
        <Badge dot>
          <BellOutlined />
        </Badge>
      </DropdownHeader>
    </Dropdown>
  );
};
