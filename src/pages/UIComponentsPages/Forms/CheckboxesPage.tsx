import { useState } from 'react';
import { Col, Space } from 'antd';
import { Checkbox, CheckboxGroup, CheckboxChangeEvent } from 'components/common/Checkbox/Checkbox';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

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
    <Col>
      <S.Card title={t('checkboxes.basic')} padding="1.25rem 0">
        <Checkbox>{t('checkboxes.checkbox')}</Checkbox>
      </S.Card>
      <S.Card title={t('checkboxes.disabledCheckbox')} padding="1.25rem 0">
        <Checkbox defaultChecked={false} disabled />
        <Checkbox defaultChecked disabled />
      </S.Card>
      <S.Card title={t('checkboxes.controlled')} padding="1.25rem 0">
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
      <S.Card title={t('checkboxes.group')} padding="1.25rem 0">
        <CheckboxGroup options={groupOptions} defaultValue={[`${t('checkboxes.apple')}`]} />
      </S.Card>
    </Col>
  );
};

export default CheckboxesPage;
