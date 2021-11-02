import React, { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { NoticesOverlay } from './NoticesOverlay/NoticesOverlay';
import { DropdownHeader } from '../../Header.styles';
import { Badge } from 'components/common/Badge/Badge';
import { Notice, noticesData } from 'constants/noticesData';

export const NoticesDropdown: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    setNotices(noticesData);
  }, []);

  return (
    <Dropdown trigger={['click']} overlay={<NoticesOverlay notices={notices} setNotices={setNotices} />}>
      <DropdownHeader>
        <Badge dot>
          <BellOutlined />
        </Badge>
      </DropdownHeader>
    </Dropdown>
  );
};
