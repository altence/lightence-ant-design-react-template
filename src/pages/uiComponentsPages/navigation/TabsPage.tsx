import { useState } from 'react';
import { Col, Space } from 'antd';
import { RadioGroup, RadioButton, RadioChangeEvent } from 'components/common/Radio/Radio';
import { Tabs, TabPane } from 'components/common/Tabs/Tabs';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

const TabsPage: React.FC = () => {
  const { t } = useTranslation();
  const [tabPosition, setTabPosition] = useState<'top' | 'left' | 'right' | 'bottom'>('top');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <Col>
      <S.Card title={t('tabs.basic')}>
        <Tabs defaultActiveKey="1">
          <TabPane tab={`${t('tabs.tab')} 1`} key="1">
            {t('tabs.tabContent')} 1
          </TabPane>
          <TabPane tab={`${t('tabs.tab')} 2`} key="2">
            {t('tabs.tabContent')} 2
          </TabPane>
          <TabPane tab={`${t('tabs.tab')} 3`} key="3">
            {t('tabs.tabContent')} 3
          </TabPane>
        </Tabs>
      </S.Card>
      <S.Card title={t('tabs.disabled')}>
        <Tabs defaultActiveKey="1">
          <TabPane tab={`${t('tabs.tab')} 1`} key="1">
            {t('tabs.tabContent')} 1
          </TabPane>
          <TabPane tab={`${t('tabs.tab')} 2`} disabled key="2">
            {t('tabs.tabContent')} 2
          </TabPane>
          <TabPane tab={`${t('tabs.tab')} 3`} key="3">
            {t('tabs.tabContent')} 3
          </TabPane>
        </Tabs>
      </S.Card>
      <S.Card title={t('tabs.withIcon')}>
        <Tabs defaultActiveKey="2">
          <TabPane
            tab={
              <span>
                <AppleOutlined />
                {t('tabs.tab')} 1
              </span>
            }
            key="1"
          >
            {t('tabs.tabContent')} 1
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                {t('tabs.tab')} 2
              </span>
            }
            key="2"
          >
            {t('tabs.tabContent')} 2
          </TabPane>
        </Tabs>
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
          <Tabs tabPosition={tabPosition}>
            <TabPane tab={`${t('tabs.tab')} 1`} key="1">
              {t('tabs.tabContent')} 1
            </TabPane>
            <TabPane tab={`${t('tabs.tab')} 2`} key="2">
              {t('tabs.tabContent')} 2
            </TabPane>
            <TabPane tab={`${t('tabs.tab')} 3`} key="3">
              {t('tabs.tabContent')} 3
            </TabPane>
          </Tabs>
        </Space>
      </S.Card>
    </Col>
  );
};

export default TabsPage;
