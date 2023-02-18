import { useTranslation } from 'react-i18next';
import { BaseCollapse } from '@app/components/common/BaseCollapse/BaseCollapse';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const CollapsePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.collapse')}</PageTitle>
      <BaseCol>
        <S.Card title={t('dataDisplay.collapse.basic')}>
          <S.CollapseWrapper defaultActiveKey={['1']}>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
          </S.CollapseWrapper>
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.accordion')}>
          <S.CollapseWrapper accordion defaultActiveKey={['2']}>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
          </S.CollapseWrapper>
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.nested')}>
          <S.CollapseWrapper defaultActiveKey="1">
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <BaseCollapse defaultActiveKey="1">
                <BaseCollapse.Panel header={t('dataDisplay.collapse.nestPanel')} key="1">
                  <p>{t('dataDisplay.collapse.text')}</p>
                </BaseCollapse.Panel>
              </BaseCollapse>
            </BaseCollapse.Panel>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
          </S.CollapseWrapper>
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.ghost')}>
          <S.CollapseWrapper defaultActiveKey={['1']} ghost>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
            <BaseCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </BaseCollapse.Panel>
          </S.CollapseWrapper>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default CollapsePage;
