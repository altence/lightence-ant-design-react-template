import React from 'react';
import { Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import * as S from '../Header.styles';

export const NotificationDropdown: React.FC = () => {
  return (
    <Dropdown overlay={<S.DropdownContent>Temp item</S.DropdownContent>} trigger={['click']}>
      <S.DropdownHeader>
        <S.Badge color="red">
          <BellOutlined />
        </S.Badge>
      </S.DropdownHeader>
    </Dropdown>
  );
};
