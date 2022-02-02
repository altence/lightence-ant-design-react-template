import React, { useState } from 'react';
import { Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Badge } from '@app/components/common/Badge/Badge';
import { NotificationsOverlay } from '@app/components/header/dropdowns/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import { notifications as fetchedNotifications, Notification } from '@app/api/notifications.api';
import { DropdownHeader } from '@app/components/header/Header/Header.styles';

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(fetchedNotifications);
  const [isOpened, setOpened] = useState(false);

  return (
    <Dropdown
      trigger={['click']}
      overlay={<NotificationsOverlay notifications={notifications} setNotifications={setNotifications} />}
      onVisibleChange={setOpened}
    >
      <DropdownHeader>
        <Button
          type={isOpened ? 'ghost' : 'text'}
          icon={
            <Badge dot>
              <BellOutlined />
            </Badge>
          }
        />
      </DropdownHeader>
    </Dropdown>
  );
};
