import { useTranslation } from 'react-i18next';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import { BaseBadge } from '@app/components/common/BaseBadge/BaseBadge';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';

const BadgesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.badge')}</PageTitle>
      <BaseCol>
        <S.Card title={t('dataDisplay.badges.sizes')}>
          <BaseBadge size="default" count={5}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
          <BaseBadge size="small" count={5}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
        </S.Card>
        <S.Card title={t('dataDisplay.badges.overflow')}>
          <BaseBadge count={99}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
          <BaseBadge count={100}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
          <BaseBadge count={99} overflowCount={10}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
          <BaseBadge count={1000} overflowCount={999}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
        </S.Card>
        <S.Card title={t('dataDisplay.badges.status')}>
          <BaseBadge status="success" />
          <BaseBadge status="error" />
          <BaseBadge status="default" />
          <BaseBadge status="processing" />
          <BaseBadge status="warning" />
          <br />
          <BaseBadge status="success" text={t('dataDisplay.badges.success')} />
          <br />
          <BaseBadge status="error" text={t('dataDisplay.badges.error')} />
          <br />
          <BaseBadge status="default" text={t('dataDisplay.badges.default')} />
          <br />
          <BaseBadge status="processing" text={t('dataDisplay.badges.processing')} />
          <br />
          <BaseBadge status="warning" text={t('dataDisplay.badges.warning')} />
        </S.Card>
        <S.Card title={t('dataDisplay.badges.ribbon')}>
          <BaseCol span={24}>
            <BaseBadge.Ribbon text={t('dataDisplay.badges.hippies')}>
              <BaseCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </BaseCard>
            </BaseBadge.Ribbon>
          </BaseCol>
          <BaseCol span={24}>
            <BaseBadge.Ribbon text={t('dataDisplay.badges.hippies')} color="pink">
              <BaseCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </BaseCard>
            </BaseBadge.Ribbon>
          </BaseCol>
          <BaseCol span={24}>
            <BaseBadge.Ribbon text={t('dataDisplay.badges.hippies')} color="red">
              <BaseCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </BaseCard>
            </BaseBadge.Ribbon>
          </BaseCol>
          <BaseCol span={24}>
            <BaseBadge.Ribbon text={t('dataDisplay.badges.hippies')} color="cyan">
              <BaseCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </BaseCard>
            </BaseBadge.Ribbon>
          </BaseCol>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default BadgesPage;
