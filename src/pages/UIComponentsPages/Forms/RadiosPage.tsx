import { useState } from 'react';
import { Col, Space } from 'antd';
import { Radio, RadioGroup, RadioButton, RadioChangeEvent } from 'components/common/Radio/Radio';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

const RadiosPage: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <Col>
      <S.Card title={t('radios.basic')} padding="1.25rem 0">
        <Radio>{t('radios.radio')}</Radio>
      </S.Card>
      <S.Card title={t('radios.disabledRadio')} padding="1.25rem 0">
        <Space direction="vertical" size={20}>
          <div>
            <Radio defaultChecked={false} disabled={disabled}>
              {t('radios.disabled')}
            </Radio>
            <Radio defaultChecked disabled={disabled}>
              {t('radios.disabled')}
            </Radio>
          </div>
          <Button type="primary" onClick={() => toggleDisabled()}>
            {t('radios.toggleDisabled')}
          </Button>
        </Space>
      </S.Card>
      <S.Card title={t('radios.radioGroup')} padding="1.25rem 0">
        <RadioGroup onChange={onChange} value={value}>
          <Radio value={1}>{t('radios.a')}</Radio>
          <Radio value={2}>{t('radios.b')}</Radio>
          <Radio value={3}>{t('radios.c')}</Radio>
          <Radio value={4}>{t('radios.d')}</Radio>
        </RadioGroup>
      </S.Card>
      <S.Card title={t('radios.radioButton')} padding="1.25rem 0">
        <Space direction="vertical" size={20}>
          <RadioGroup defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
          <RadioGroup disabled onChange={onChange} defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </Space>
      </S.Card>
      <S.Card title={t('radios.radioButtonSizes')} padding="1.25rem 0">
        <Space direction="vertical" size={10}>
          <RadioGroup size="small" defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
          <RadioGroup defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
          <RadioGroup size="large" defaultValue="a">
            <RadioButton value="a">Hangzhou</RadioButton>
            <RadioButton value="b">Shanghai</RadioButton>
            <RadioButton value="c">Beijing</RadioButton>
            <RadioButton value="d">Chengdu</RadioButton>
          </RadioGroup>
        </Space>
      </S.Card>
    </Col>
  );
};

export default RadiosPage;
