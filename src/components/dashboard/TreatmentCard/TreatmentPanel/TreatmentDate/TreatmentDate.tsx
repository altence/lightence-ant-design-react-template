import React from 'react';
import { Moment } from 'moment';
import { Doctor } from '../../../../../constants/doctorsData';
import { notification } from 'antd';
import * as S from './TreatmentDate.styles';

interface TreatmentDateProps {
  date: Moment;
  treatment: Doctor | undefined;
}

export const TreatmentDate: React.FC<TreatmentDateProps> = ({ treatment, date }) => {
  const handleClickBtn = () => {
    notification.open({
      message: 'Success!',
      description: "You've successfully confirmed the treatment.",
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
      {treatment?.nextVisit && (
        <S.Button size="middle" type="primary" onClick={handleClickBtn}>
          Confirm
        </S.Button>
      )}
    </S.DateWrapper>
  );
};
