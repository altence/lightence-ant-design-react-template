import React from 'react';
import { Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import * as S from '../Header.styles';

export const NotificationDropdown: React.FC = () => {
  return (
    <Dropdown
      overlay={
        <S.Menu>
          <S.DropdownContent>Temp item</S.DropdownContent>
        </S.Menu>
      }
      trigger={['click']}
    >
      <S.DropdownHeader>
        <S.Badge color="red">
          <BellOutlined />
        </S.Badge>
      </S.DropdownHeader>
    </Dropdown>
  );
};
