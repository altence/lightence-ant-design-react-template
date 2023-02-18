import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const CheckboxesPage: React.FC = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const label = `${checked ? t('checkboxes.checked') : t('checkboxes.unchecked')}-${
    disabled ? t('checkboxes.disabled') : t('checkboxes.enabled')
  }`;
  const groupOptions = [t('checkboxes.apple'), t('checkboxes.pear'), t('checkboxes.orange')];

  return (
    <>
      <PageTitle>{t('common.checkbox')}</PageTitle>
      <BaseCol>
        <S.Card title={t('checkboxes.basic')}>
          <BaseCheckbox>{t('checkboxes.checkbox')}</BaseCheckbox>
        </S.Card>
        <S.Card title={t('checkboxes.disabledCheckbox')}>
          <BaseCheckbox defaultChecked={false} disabled />
          <BaseCheckbox defaultChecked disabled />
        </S.Card>
        <S.Card title={t('checkboxes.controlled')}>
          <BaseSpace direction="vertical" size={20}>
            <BaseCheckbox checked={checked} disabled={disabled} onChange={(event) => setChecked(event.target.checked)}>
              {label}
            </BaseCheckbox>
            <BaseSpace>
              <BaseButton type="primary" size="small" onClick={() => setChecked(!checked)}>
                {!checked ? t('checkboxes.check') : t('checkboxes.uncheck')}
              </BaseButton>
              <BaseButton type="primary" size="small" onClick={() => setDisabled(!disabled)}>
                {!disabled ? t('checkboxes.disable') : t('checkboxes.enable')}
              </BaseButton>
            </BaseSpace>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('checkboxes.group')}>
          <BaseCheckbox.Group options={groupOptions} defaultValue={[`${t('checkboxes.apple')}`]} />
        </S.Card>
      </BaseCol>
    </>
  );
};

export default CheckboxesPage;
