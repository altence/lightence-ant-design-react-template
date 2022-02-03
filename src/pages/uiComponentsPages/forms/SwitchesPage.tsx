import { useState } from 'react';
import { Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Switch } from '@app/components/common/Switch/Switch';
import { Button } from '@app/components/common/buttons/Button/Button';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const SwitchesPage: React.FC = () => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <PageTitle>{t('common.switch')}</PageTitle>
      <Col>
        <S.Card title={t('switches.basic')}>
          <Switch defaultChecked />
        </S.Card>
        <S.Card title={t('switches.disabled')}>
          <Space direction="vertical" size={10}>
            <Switch disabled={disabled} defaultChecked />
            <Button type="primary" onClick={() => setDisabled(!disabled)}>
              {t('switches.toggleDisabled')}
            </Button>
          </Space>
        </S.Card>
        <S.Card title={t('switches.sizes')}>
          <Space direction="vertical" size={10}>
            <Switch defaultChecked />
            <Switch size="small" defaultChecked />
          </Space>
        </S.Card>
        <S.Card title={t('switches.loading')}>
          <Space direction="vertical" size={10}>
            <Switch loading defaultChecked />
            <Switch size="small" loading />
          </Space>
        </S.Card>
        <S.Card title={t('switches.icons')}>
          <Space direction="vertical" size={10}>
            <Switch checkedChildren={t('switches.yes')} unCheckedChildren={t('switches.no')} defaultChecked />
            <Switch checkedChildren="1" unCheckedChildren="0" />
            <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
          </Space>
        </S.Card>
      </Col>
    </>
  );
};

export default SwitchesPage;
