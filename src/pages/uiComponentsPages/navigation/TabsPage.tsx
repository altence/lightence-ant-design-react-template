import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import { BaseTabs } from '@app/components/common/BaseTabs/BaseTabs';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const TabsPage: React.FC = () => {
  const { t } = useTranslation();
  const [tabPosition, setTabPosition] = useState<'top' | 'left' | 'right' | 'bottom'>('top');

  const commonTabs = useMemo(
    () => [
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
      {
        key: '4',
        label: `${t('tabs.tab')} 4`,
        children: `${t('tabs.tabContent')} 4`,
      },
    ],
    [t],
  );

  return (
    <>
      <PageTitle>{t('common.tabs')}</PageTitle>
      <BaseCol>
        <S.Card title={t('tabs.basic')}>
          <BaseTabs defaultActiveKey="1" items={commonTabs} />
        </S.Card>
        <S.Card title={t('tabs.disabled')}>
          <BaseTabs defaultActiveKey="1" items={commonTabs} />
        </S.Card>
        <S.Card title={t('tabs.withIcon')}>
          <BaseTabs
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
          <BaseSpace direction="vertical" size={20}>
            <BaseSpace wrap>
              {t('tabs.tabPosition')}
              <BaseRadio.Group value={tabPosition} onChange={(event) => setTabPosition(event.target.value)}>
                <BaseRadio.Button value="top">{t('tabs.top')}</BaseRadio.Button>
                <BaseRadio.Button value="bottom">{t('tabs.bottom')}</BaseRadio.Button>
                <BaseRadio.Button value="left">{t('tabs.left')}</BaseRadio.Button>
                <BaseRadio.Button value="right">{t('tabs.right')}</BaseRadio.Button>
              </BaseRadio.Group>
            </BaseSpace>
            <BaseTabs
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
          </BaseSpace>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default TabsPage;
