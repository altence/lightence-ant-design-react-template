import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { BaseSwitch } from '@app/components/common/BaseSwitch/BaseSwitch';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const SwitchesPage: React.FC = () => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <PageTitle>{t('common.switch')}</PageTitle>
      <BaseCol>
        <S.Card title={t('switches.basic')}>
          <BaseSwitch defaultChecked />
        </S.Card>
        <S.Card title={t('switches.disabled')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSwitch disabled={disabled} defaultChecked />
            <BaseButton type="primary" onClick={() => setDisabled(!disabled)}>
              {t('switches.toggleDisabled')}
            </BaseButton>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('switches.sizes')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSwitch defaultChecked />
            <BaseSwitch size="small" defaultChecked />
          </BaseSpace>
        </S.Card>
        <S.Card title={t('switches.loading')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSwitch loading defaultChecked />
            <BaseSwitch size="small" loading />
          </BaseSpace>
        </S.Card>
        <S.Card title={t('switches.icons')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSwitch checkedChildren={t('switches.yes')} unCheckedChildren={t('switches.no')} defaultChecked />
            <BaseSwitch checkedChildren="1" unCheckedChildren="0" />
            <BaseSwitch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
          </BaseSpace>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default SwitchesPage;
