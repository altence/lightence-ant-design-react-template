import { useState } from 'react';
import { Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Checkbox, CheckboxGroup, CheckboxChangeEvent } from '@app/components/common/Checkbox/Checkbox';
import { Button } from '@app/components/common/buttons/Button/Button';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const CheckboxesPage: React.FC = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const label = `${checked ? t('checkboxes.checked') : t('checkboxes.unchecked')}-${
    disabled ? t('checkboxes.disabled') : t('checkboxes.enabled')
  }`;
  const groupOptions = [t('checkboxes.apple'), t('checkboxes.pear'), t('checkboxes.orange')];

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <PageTitle>{t('common.checkbox')}</PageTitle>
      <Col>
        <S.Card title={t('checkboxes.basic')}>
          <Checkbox>{t('checkboxes.checkbox')}</Checkbox>
        </S.Card>
        <S.Card title={t('checkboxes.disabledCheckbox')}>
          <Checkbox defaultChecked={false} disabled />
          <Checkbox defaultChecked disabled />
        </S.Card>
        <S.Card title={t('checkboxes.controlled')}>
          <Space direction="vertical" size={20}>
            <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
              {label}
            </Checkbox>
            <Space>
              <Button type="primary" size="small" onClick={() => setChecked(!checked)}>
                {!checked ? t('checkboxes.check') : t('checkboxes.uncheck')}
              </Button>
              <Button type="primary" size="small" onClick={() => setDisabled(!disabled)}>
                {!disabled ? t('checkboxes.disable') : t('checkboxes.enable')}
              </Button>
            </Space>
          </Space>
        </S.Card>
        <S.Card title={t('checkboxes.group')}>
          <CheckboxGroup options={groupOptions} defaultValue={[`${t('checkboxes.apple')}`]} />
        </S.Card>
      </Col>
    </>
  );
};

export default CheckboxesPage;
