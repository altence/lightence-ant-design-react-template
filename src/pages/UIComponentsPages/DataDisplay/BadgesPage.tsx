import { Col, Card } from 'antd';
import { Avatar } from 'components/common/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';
import { Badge, Ribbon } from 'components/common/Badge/Badge';

const BadgesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Col>
      <S.Card title={t('dataDisplay.badges.sizes')} padding="1.25rem 0">
        <Badge size="default" count={5}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge size="small" count={5}>
          <Avatar shape="square" size="large" />
        </Badge>
      </S.Card>
      <S.Card title={t('dataDisplay.badges.overflow')} padding="1.25rem 0">
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
      <S.Card title={t('dataDisplay.badges.status')} padding="1.25rem 0">
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
  );
};

export default BadgesPage;
