import React from 'react';
import { Dropdown, Radio, RadioChangeEvent } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from '../Header.styles';

export const SettingsDropdown: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: RadioChangeEvent) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Dropdown
      overlay={
        <S.DropdownContent>
          <Radio.Group defaultValue={i18n.language} onChange={handleChange}>
            <Radio value="en">English</Radio>
            <Radio value="de">Deutsch</Radio>
          </Radio.Group>
        </S.DropdownContent>
      }
      trigger={['click']}
    >
      <S.DropdownHeader>
        <SettingOutlined />
      </S.DropdownHeader>
    </Dropdown>
  );
};
