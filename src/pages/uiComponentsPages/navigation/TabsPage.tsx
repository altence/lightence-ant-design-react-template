import { useState } from 'react';
import { Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { RadioGroup, RadioButton, RadioChangeEvent } from '@app/components/common/Radio/Radio';
import { Tabs } from '@app/components/common/Tabs/Tabs';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const TabsPage: React.FC = () => {
  const { t } = useTranslation();
  const [tabPosition, setTabPosition] = useState<'top' | 'left' | 'right' | 'bottom'>('top');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      <PageTitle>{t('common.tabs')}</PageTitle>
      <Col>
        <S.Card title={t('tabs.basic')}>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: '1',
                label: `${t('tabs.tab')} 1`,
                children: `${t('tabs.tabContent')} 1`,
              },
              {
                key: '2',
                label: `${t('tabs.tab')} 2`,
                children: `${t('tabs.tabContent')} 2`,
              },
              {
                key: '3',
                label: `${t('tabs.tab')} 3`,
                children: `${t('tabs.tabContent')} 3`,
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('tabs.disabled')}>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: '1',
                label: `${t('tabs.tab')} 1`,
                children: `${t('tabs.tabContent')} 1`,
              },
              {
                key: '2',
                label: `${t('tabs.tab')} 2`,
                children: `${t('tabs.tabContent')} 2`,
                disabled: true,
              },
              {
                key: '3',
                label: `${t('tabs.tab')} 3`,
                children: `${t('tabs.tabContent')} 3`,
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('tabs.withIcon')}>
          <Tabs
            defaultActiveKey="2"
            items={[
              {
                key: '1',
                label: (
                  <span>
                    <AppleOutlined />
                    {t('tabs.tab')} 1
                  </span>
                ),
                children: `${t('tabs.tabContent')} 1`,
              },
              {
                key: '2',
                label: (
                  <span>
                    <AndroidOutlined />
                    {t('tabs.tab')} 2
                  </span>
                ),
                children: `${t('tabs.tabContent')} 2`,
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('tabs.positions')}>
          <Space direction="vertical" size={20}>
            <Space wrap>
              {t('tabs.tabPosition')}
              <RadioGroup value={tabPosition} onChange={changeTabPosition}>
                <RadioButton value="top">{t('tabs.top')}</RadioButton>
                <RadioButton value="bottom">{t('tabs.bottom')}</RadioButton>
                <RadioButton value="left">{t('tabs.left')}</RadioButton>
                <RadioButton value="right">{t('tabs.right')}</RadioButton>
              </RadioGroup>
            </Space>
            <Tabs
              tabPosition={tabPosition}
              items={[
                {
                  key: '1',
                  label: `${t('tabs.tab')} 1`,
                  children: `${t('tabs.tabContent')} 1`,
                },
                {
                  key: '2',
                  label: `${t('tabs.tab')} 2`,
                  children: `${t('tabs.tabContent')} 2`,
                },
                {
                  key: '3',
                  label: `${t('tabs.tab')} 3`,
                  children: `${t('tabs.tabContent')} 3`,
                },
              ]}
            />
          </Space>
        </S.Card>
      </Col>
    </>
  );
};

export default TabsPage;
