import { Col } from 'antd';
import { DayjsDatePicker } from 'components/common/pickers/DayjsDatePicker';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

const DateTimePickersPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Col>
      <S.Card title={t('dateTimePickers.basic')} padding="1.25rem 0">
        <DayjsDatePicker />
        <DayjsDatePicker picker="week" />
        <DayjsDatePicker picker="month" />
        <DayjsDatePicker picker="quarter" />
        <DayjsDatePicker picker="year" />
      </S.Card>
      <S.Card title={t('dateTimePickers.sizes')} padding="1.25rem 0">
        <DayjsDatePicker format="L" size="small" />
        <DayjsDatePicker format="L" />
        <DayjsDatePicker format="L" size="large" />
      </S.Card>
      <S.Card title={t('dateTimePickers.disabled')} padding="1.25rem 0">
        <DayjsDatePicker format="L" disabled />
        <DayjsDatePicker.RangePicker format="L" disabled />
      </S.Card>
      <S.Card title={t('dateTimePickers.range')} padding="1.25rem 0">
        <DayjsDatePicker.RangePicker format="L" />
      </S.Card>
      <S.Card title={t('dateTimePickers.time')} padding="1.25rem 0">
        <DayjsDatePicker.TimePicker />
      </S.Card>
    </Col>
  );
};

export default DateTimePickersPage;
