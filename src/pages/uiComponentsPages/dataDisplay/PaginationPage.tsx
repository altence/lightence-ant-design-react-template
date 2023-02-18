import { useTranslation } from 'react-i18next';
import { BasePagination } from '@app/components/common/BasePagination/BasePagination';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const PaginationPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.pagination')}</PageTitle>
      <BaseCol>
        <S.Card title={t('dataDisplay.pagination.basic')}>
          <BasePagination defaultCurrent={1} total={50} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.manyPages')}>
          <BasePagination defaultCurrent={6} total={500} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.pageSize')}>
          <BasePagination showSizeChanger defaultCurrent={3} total={500} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.disabled')}>
          <BasePagination showSizeChanger defaultCurrent={3} total={500} disabled />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.quickJump')}>
          <BasePagination size="small" total={50} showSizeChanger showQuickJumper />
        </S.Card>
      </BaseCol>
    </>
  );
};

export default PaginationPage;
