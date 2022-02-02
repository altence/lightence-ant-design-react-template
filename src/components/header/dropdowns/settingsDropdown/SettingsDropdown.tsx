import React, { useState } from 'react';
import { Dropdown } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Button } from '@app/components/common/buttons/Button/Button';
import { SettingsOverlay } from '@app/components/header/dropdowns/settingsDropdown/settingsOverlay/SettingsOverlay/SettingsOverlay';
import { DropdownHeader } from '@app/components/header/Header/Header.styles';

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <Dropdown overlay={<SettingsOverlay />} trigger={['click']} onVisibleChange={setOpened}>
      <DropdownHeader>
        <Button type={isOpened ? 'ghost' : 'text'} icon={<SettingOutlined />} />
      </DropdownHeader>
    </Dropdown>
  );
};
