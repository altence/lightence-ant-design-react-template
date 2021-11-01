import React from 'react';
import { DropdownCollapse } from 'components/Header/Header.styles';
import { useTranslation } from 'react-i18next';
import { LanguagePicker } from './LanguagePicker/LanguagePicker';
import { NightModeSettings } from './NightModeSettings/NightModeSettings';
import { ThemePicker } from './ThemePicker/ThemePicker';
import * as S from './SettingsOverlay.styles';

export const SettingsOverlay: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.SettingsOverlayMenu mode="inline" selectable={false}>
      <DropdownCollapse bordered={false} expandIconPosition="right" ghost defaultActiveKey="nightMode">
        <DropdownCollapse.Panel header={t('header.changeLanguage')} key="languagePicker">
          <LanguagePicker />
        </DropdownCollapse.Panel>
        <DropdownCollapse.Panel header={t('header.changeTheme')} key="themePicker">
          <ThemePicker />
        </DropdownCollapse.Panel>
        <DropdownCollapse.Panel header={t('header.nightMode.title')} key="nightMode" collapsible="disabled">
          <NightModeSettings />
        </DropdownCollapse.Panel>
      </DropdownCollapse>
    </S.SettingsOverlayMenu>
  );
};
