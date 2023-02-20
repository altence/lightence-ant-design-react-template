import { useTranslation } from 'react-i18next';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { BaseRate } from '@app/components/common/BaseRate/BaseRate';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const RatesPage: React.FC = () => {
  const { t } = useTranslation();
  const customIcons = [
    <FrownOutlined key={1} />,
    <FrownOutlined key={2} />,
    <MehOutlined key={3} />,
    <SmileOutlined key={4} />,
    <SmileOutlined key={5} />,
  ];

  return (
    <>
      <PageTitle>{t('common.rate')}</PageTitle>
      <BaseCol>
        <S.Card title={t('rates.basic')}>
          <BaseRate />
        </S.Card>
        <S.Card title={t('rates.halfStar')}>
          <BaseRate allowHalf defaultValue={2.5} />
        </S.Card>
        <S.Card title={t('rates.readOnly')}>
          <BaseRate disabled defaultValue={2} />
        </S.Card>
        <S.Card title={t('rates.customIcons')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseRate defaultValue={2} character={({ index }) => (index as number) + 1} />
            <BaseRate defaultValue={3} character={({ index }) => customIcons[(index as number) + 1]} />
          </BaseSpace>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default RatesPage;
