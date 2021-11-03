import React, { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { NotificationsOverlay } from './NotificationsOverlay/NotificationsOverlay';
import { DropdownHeader } from '../../Header.styles';
import { Badge } from 'components/common/Badge/Badge';
import { Notification, notificationsData } from 'constants/notificationsData';

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setNotifications(notificationsData);
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
