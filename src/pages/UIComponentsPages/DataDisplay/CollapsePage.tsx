import { Col } from 'antd';
import { Collapse, Panel } from 'components/common/Collapse/Collapse';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

const CollapsePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Col>
      <S.Card title={t('dataDisplay.collapse.basic')} padding="1.25rem 0">
        <Collapse defaultActiveKey={['1']}>
          <Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
            <p>{t('dataDisplay.collapse.text')}</p>
          </Panel>
          <Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
            <p>{t('dataDisplay.collapse.text')}</p>
          </Panel>
          <Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
            <p>{t('dataDisplay.collapse.text')}</p>
          </Panel>
        </Collapse>
      </S.Card>
      <S.Card title={t('dataDisplay.collapse.accordion')} padding="1.25rem 0">
        <Collapse accordion defaultActiveKey={['2']}>
          <Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
            <p>{t('dataDisplay.collapse.text')}</p>
          </Panel>
          <Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
            <p>{t('dataDisplay.collapse.text')}</p>
          </Panel>
          <Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
            <p>{t('dataDisplay.collapse.text')}</p>
          </Panel>
        </Collapse>
      </S.Card>
      <S.Card title={t('dataDisplay.collapse.nested')} padding="1.25rem 0">
        <Collapse defaultActiveKey="1">
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
        </Collapse>
      </S.Card>
      <S.Card title={t('dataDisplay.collapse.ghost')} padding="1.25rem 0">
        <Collapse defaultActiveKey={['1']} ghost>
          <Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
            <p>{t('dataDisplay.collapse.text')}</p>
          </Panel>
          <Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
            <p>{t('dataDisplay.collapse.text')}</p>
          </Panel>
          <Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
            <p>{t('dataDisplay.collapse.text')}</p>
          </Panel>
        </Collapse>
      </S.Card>
    </Col>
  );
};

export default CollapsePage;
