import { useTranslation } from 'react-i18next';
import { BaseDatePicker } from '@app/components/common/pickers/BaseDatePicker';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const DateTimePickersPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.dateTimePicker')}</PageTitle>
      <BaseCol>
        <S.Card title={t('dateTimePickers.basic')}>
          <BaseDatePicker />
          <BaseDatePicker picker="week" />
          <BaseDatePicker picker="month" />
          <BaseDatePicker picker="quarter" />
          <BaseDatePicker picker="year" />
        </S.Card>
        <S.Card title={t('dateTimePickers.sizes')}>
          <BaseDatePicker format="L" size="small" />
          <BaseDatePicker format="L" />
          <BaseDatePicker format="L" size="large" />
        </S.Card>
        <S.Card title={t('dateTimePickers.disabled')}>
          <BaseDatePicker format="L" disabled />
          <BaseDatePicker.RangePicker format="L" disabled />
        </S.Card>
        <S.Card title={t('dateTimePickers.range')}>
          <BaseDatePicker.RangePicker format="L" />
        </S.Card>
        <S.Card title={t('dateTimePickers.time')}>
          <BaseDatePicker.TimePicker />
        </S.Card>
      </BaseCol>
    </>
  );
};

export default DateTimePickersPage;
