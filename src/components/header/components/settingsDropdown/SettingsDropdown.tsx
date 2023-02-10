import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Button } from '@app/components/common/buttons/Button/Button';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';
import { SettingsOverlay } from './settingsOverlay/SettingsOverlay/SettingsOverlay';
import { Popover } from '@app/components/common/Popover/Popover';

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <Popover content={<SettingsOverlay />} trigger="click" onOpenChange={setOpened}>
      <HeaderActionWrapper>
        <Button type={isOpened ? 'ghost' : 'text'} icon={<SettingOutlined />} />
      </HeaderActionWrapper>
    </Popover>
  );
};
