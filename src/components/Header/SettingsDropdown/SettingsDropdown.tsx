import React from 'react';
import { Dropdown } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import * as S from '../Header.styles';

export const SettingsDropdown: React.FC = () => {
  return (
    <Dropdown overlay={<S.DropdownContent>Temp item</S.DropdownContent>} trigger={['click']}>
      <S.DropdownHeader>
        <SettingOutlined />
      </S.DropdownHeader>
    </Dropdown>
  );
};
