import { Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@app/components/common/Avatar/Avatar';
import { Badge, Ribbon } from '@app/components/common/Badge/Badge';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const BadgesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.badge')}</PageTitle>
      <Col>
        <S.Card title={t('dataDisplay.badges.sizes')}>
          <Badge size="default" count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
          <Badge size="small" count={5}>
            <Avatar shape="square" size="large" />
          </Badge>
        </S.Card>
        <S.Card title={t('dataDisplay.badges.overflow')}>
          <Badge count={99}>
            <Avatar shape="square" size="large" />
          </Badge>
          <Badge count={100}>
            <Avatar shape="square" size="large" />
          </Badge>
          <Badge count={99} overflowCount={10}>
            <Avatar shape="square" size="large" />
          </Badge>
          <Badge count={1000} overflowCount={999}>
            <Avatar shape="square" size="large" />
          </Badge>
        </S.Card>
        <S.Card title={t('dataDisplay.badges.status')}>
          <Badge status="success" />
          <Badge status="error" />
          <Badge status="default" />
          <Badge status="processing" />
          <Badge status="warning" />
          <br />
          <Badge status="success" text={t('dataDisplay.badges.success')} />
          <br />
          <Badge status="error" text={t('dataDisplay.badges.error')} />
          <br />
          <Badge status="default" text={t('dataDisplay.badges.default')} />
          <br />
          <Badge status="processing" text={t('dataDisplay.badges.processing')} />
          <br />
          <Badge status="warning" text={t('dataDisplay.badges.warning')} />
        </S.Card>
        <S.Card title={t('dataDisplay.badges.ribbon')}>
          <Col span={24}>
            <Ribbon text={t('dataDisplay.badges.hippies')}>
              <Card title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </Card>
            </Ribbon>
          </Col>
          <Col span={24}>
            <Ribbon text={t('dataDisplay.badges.hippies')} color="pink">
              <Card title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </Card>
            </Ribbon>
          </Col>
          <Col span={24}>
            <Ribbon text={t('dataDisplay.badges.hippies')} color="red">
              <Card title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </Card>
            </Ribbon>
          </Col>
          <Col span={24}>
            <Ribbon text={t('dataDisplay.badges.hippies')} color="cyan">
              <Card title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </Card>
            </Ribbon>
          </Col>
        </S.Card>
      </Col>
    </>
  );
};

export default BadgesPage;
