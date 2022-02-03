import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Pagination } from '@app/components/common/Pagination/Pagination';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const PaginationPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.pagination')}</PageTitle>
      <Col>
        <S.Card title={t('dataDisplay.pagination.basic')}>
          <Pagination defaultCurrent={1} total={50} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.manyPages')}>
          <Pagination defaultCurrent={6} total={500} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.pageSize')}>
          <Pagination showSizeChanger defaultCurrent={3} total={500} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.disabled')}>
          <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.quickJump')}>
          <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </S.Card>
      </Col>
    </>
  );
};

export default PaginationPage;
