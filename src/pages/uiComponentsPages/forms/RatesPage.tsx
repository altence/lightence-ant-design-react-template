import { Col, Space } from 'antd';
import { Rate } from 'components/common/Rate/Rate';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

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
    <Col>
      <S.Card title={t('rates.basic')}>
        <Rate />
      </S.Card>
      <S.Card title={t('rates.halfStar')}>
        <Rate allowHalf defaultValue={2.5} />
      </S.Card>
      <S.Card title={t('rates.readOnly')}>
        <Rate disabled defaultValue={2} />
      </S.Card>
      <S.Card title={t('rates.customIcons')}>
        <Space direction="vertical" size={10}>
          <Rate defaultValue={2} character={({ index }: { index: number }) => index + 1} />
          <Rate defaultValue={3} character={({ index }: { index: number }) => customIcons[index + 1]} />
        </Space>
      </S.Card>
    </Col>
  );
};

export default RatesPage;
