import { Col } from 'antd';
import { Pagination } from 'components/common/Pagination/Pagination';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

const PaginationPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Col>
      <S.Card title={t('dataDisplay.pagination.basic')} padding="1.25rem 0">
        <Pagination defaultCurrent={1} total={50} />
      </S.Card>
      <S.Card title={t('dataDisplay.pagination.manyPages')} padding="1.25rem 0">
        <Pagination defaultCurrent={6} total={500} />
      </S.Card>
      <S.Card title={t('dataDisplay.pagination.pageSize')} padding="1.25rem 0">
        <Pagination showSizeChanger defaultCurrent={3} total={500} />
      </S.Card>
      <S.Card title={t('dataDisplay.pagination.disabled')} padding="1.25rem 0">
        <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
      </S.Card>
      <S.Card title={t('dataDisplay.pagination.quickJump')} padding="1.25rem 0">
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      </S.Card>
    </Col>
  );
};

export default PaginationPage;
