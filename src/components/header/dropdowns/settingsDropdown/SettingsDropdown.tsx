import React from 'react';
import { Dropdown } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { SettingsOverlay } from './settingsOverlay/SettingsOverlay/SettingsOverlay';
import { DropdownHeader } from '../../Header/Header.styles';

export const SettingsDropdown: React.FC = () => {
  return (
    <Dropdown overlay={<SettingsOverlay />} trigger={['click']}>
      <DropdownHeader>
        <SettingOutlined />
      </DropdownHeader>
    </Dropdown>
  );
};
