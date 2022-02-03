import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { DayjsDatePicker } from '@app/components/common/pickers/DayjsDatePicker';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const DateTimePickersPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.dateTimePicker')}</PageTitle>
      <Col>
        <S.Card title={t('dateTimePickers.basic')}>
          <DayjsDatePicker />
          <DayjsDatePicker picker="week" />
          <DayjsDatePicker picker="month" />
          <DayjsDatePicker picker="quarter" />
          <DayjsDatePicker picker="year" />
        </S.Card>
        <S.Card title={t('dateTimePickers.sizes')}>
          <DayjsDatePicker format="L" size="small" />
          <DayjsDatePicker format="L" />
          <DayjsDatePicker format="L" size="large" />
        </S.Card>
        <S.Card title={t('dateTimePickers.disabled')}>
          <DayjsDatePicker format="L" disabled />
          <DayjsDatePicker.RangePicker format="L" disabled />
        </S.Card>
        <S.Card title={t('dateTimePickers.range')}>
          <DayjsDatePicker.RangePicker format="L" />
        </S.Card>
        <S.Card title={t('dateTimePickers.time')}>
          <DayjsDatePicker.TimePicker />
        </S.Card>
      </Col>
    </>
  );
};

export default DateTimePickersPage;
