import React from 'react';
import { useTranslation } from 'react-i18next';
import { notification } from 'antd';
import { Dates, AppDate } from '../../../../../constants/Dates';
import * as S from './TreatmentDate.styles';

interface TreatmentDateProps {
  date: AppDate;
}

export const TreatmentDate: React.FC<TreatmentDateProps> = ({ date }) => {
  const { t } = useTranslation();

  const today = Dates.getToday();

  const handleClickBtn = () => {
    notification.open({
      message: t('common.success'),
      description: t('dashboard.treatmentPlan.successTreatment'),
    });
  };

  return (
    <S.DateWrapper>
      <S.Notification color="red">
        <S.Bell />
      </S.Notification>
      <S.Title>{date.format('D')}</S.Title>
      <S.Subtitle>{date.format('MMMM')}</S.Subtitle>
      <S.Text>08:00</S.Text>
      {date.isAfter(today) && (
        <S.Button size="middle" type="primary" onClick={handleClickBtn}>
          {t('dashboard.treatmentPlan.confirm')}
        </S.Button>
      )}
    </S.DateWrapper>
  );
};
