import React from 'react';
import { Dropdown } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { LanguagePicker } from './LanguagePicker/LanguagePicker';
import { ThemePicker } from './ThemePicker/ThemePicker';
import * as S from '../Header.styles';
import { NightModeSettings } from './NightModeSettings/NightModeSettings';

export const SettingsDropdown: React.FC = () => {
  return (
    <Dropdown
      overlay={
        <S.Menu>
          <S.DropdownContent>
            <LanguagePicker />
            <ThemePicker />
            <NightModeSettings />
          </S.DropdownContent>
        </S.Menu>
      }
      trigger={['click']}
    >
      <S.DropdownHeader>
        <SettingOutlined />
      </S.DropdownHeader>
    </Dropdown>
  );
};
