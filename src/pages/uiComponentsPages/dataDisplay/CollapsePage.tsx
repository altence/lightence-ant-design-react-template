import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Collapse, Panel } from '@app/components/common/Collapse/Collapse';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const CollapsePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.collapse')}</PageTitle>
      <Col>
        <S.Card title={t('dataDisplay.collapse.basic')}>
          <S.CollapseWrapper defaultActiveKey={['1']}>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
          </S.CollapseWrapper>
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.accordion')}>
          <S.CollapseWrapper accordion defaultActiveKey={['2']}>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
          </S.CollapseWrapper>
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.nested')}>
          <S.CollapseWrapper defaultActiveKey="1">
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <Collapse defaultActiveKey="1">
                <Panel header={t('dataDisplay.collapse.nestPanel')} key="1">
                  <p>{t('dataDisplay.collapse.text')}</p>
                </Panel>
              </Collapse>
            </Panel>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
          </S.CollapseWrapper>
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.ghost')}>
          <S.CollapseWrapper defaultActiveKey={['1']} ghost>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
            <Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </Panel>
          </S.CollapseWrapper>
        </S.Card>
      </Col>
    </>
  );
};

export default CollapsePage;
