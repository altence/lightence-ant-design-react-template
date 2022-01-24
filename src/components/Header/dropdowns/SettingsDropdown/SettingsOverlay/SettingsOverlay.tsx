import React from 'react';
import { DropdownCollapse } from 'components/Header/Header.styles';
import { useTranslation } from 'react-i18next';
import { LanguagePicker } from './LanguagePicker/LanguagePicker';
import { NightModeSettings } from './NightModeSettings/NightModeSettings';
import { ThemePicker } from './ThemePicker/ThemePicker';
import * as S from './SettingsOverlay.styles';
import { Button } from '@app/components/common/buttons/Button/Button';
import { usePWA } from '@app/hooks/usePWA';

export const SettingsOverlay: React.FC = () => {
  const { t } = useTranslation();

  const { promptInstall, isPWASupported } = usePWA();

  return (
    <S.SettingsOverlayMenu mode="inline" selectable={false}>
      <DropdownCollapse bordered={false} expandIconPosition="right" ghost defaultActiveKey="themePicker">
        <DropdownCollapse.Panel header={t('header.changeLanguage')} key="languagePicker">
          <LanguagePicker />
        </DropdownCollapse.Panel>
        <DropdownCollapse.Panel header={t('header.changeTheme')} key="themePicker">
          <ThemePicker />
        </DropdownCollapse.Panel>
        <DropdownCollapse.Panel header={t('header.nightMode.title')} key="nightMode">
          <NightModeSettings />
        </DropdownCollapse.Panel>
      </DropdownCollapse>
      {isPWASupported && (
        <Button
          block
          type="primary"
          onClick={() => promptInstall && (promptInstall as BeforeInstallPromptEvent).prompt()}
        >
          {t('common.pwa')}
        </Button>
      )}
    </S.SettingsOverlayMenu>
  );
};
