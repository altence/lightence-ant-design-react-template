import React from 'react';
import { notification } from 'antd';
import { AppDate } from '../../../../constants/Dates';
import * as S from './TreatmentPanel.styles';
import { TreatmentDoctorCard } from './TreatmentDoctorCard/TreatmentDoctorCard';

interface TreatmentPanelProps {
  date: AppDate;
}

export const TreatmentPanel: React.FC<TreatmentPanelProps> = ({ date }) => {
  const handleClickBtn = () => {
    notification.open({
      message: 'Success!',
      description: "You've successfully confirmed the treatment.",
    });
  };

  return (
    <S.Wrapper>
      <S.DateWrapper>
        <S.Notification color="red">
          <S.Bell />
        </S.Notification>
        <S.Title>{date.format('D')}</S.Title>
        <S.Subtitle>{date.format('MMMM')}</S.Subtitle>
        <S.Text>08:00</S.Text>
        <S.Button size="middle" type="primary" onClick={handleClickBtn}>
          Confirm
        </S.Button>
      </S.DateWrapper>
      <TreatmentDoctorCard date={date} />
    </S.Wrapper>
  );
};
