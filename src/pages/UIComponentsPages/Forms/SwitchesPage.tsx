import { useState } from 'react';
import { Col, Space } from 'antd';
import { Switch } from 'components/common/Switch/Switch';
import { Button } from 'components/common/buttons/Button/Button';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

const SwitchesPage: React.FC = () => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  return (
    <Col>
      <S.Card title={t('switches.basic')} padding="1.25rem 0">
        <Switch defaultChecked />
      </S.Card>
      <S.Card title={t('switches.disabled')} padding="1.25rem 0">
        <Space direction="vertical" size={10}>
          <Switch disabled={disabled} defaultChecked />
          <Button type="primary" onClick={() => setDisabled(!disabled)}>
            {t('switches.toggleDisabled')}
          </Button>
        </Space>
      </S.Card>
      <S.Card title={t('switches.sizes')} padding="1.25rem 0">
        <Space direction="vertical" size={10}>
          <Switch defaultChecked />
          <Switch size="small" defaultChecked />
        </Space>
      </S.Card>
      <S.Card title={t('switches.loading')} padding="1.25rem 0">
        <Space direction="vertical" size={10}>
          <Switch loading defaultChecked />
          <Switch size="small" loading />
        </Space>
      </S.Card>
      <S.Card title={t('switches.icons')} padding="1.25rem 0">
        <Space direction="vertical" size={10}>
          <Switch checkedChildren={t('switches.yes')} unCheckedChildren={t('switches.no')} defaultChecked />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
        </Space>
      </S.Card>
    </Col>
  );
};

export default SwitchesPage;
