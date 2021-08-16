import React from 'react';
import { notification } from 'antd';
import { TreatmentPanelProps as TreatmentDateProps } from '../TreatmentPanel';
import * as S from './TreatmentDate.styles';

export const TreatmentDate: React.FC<TreatmentDateProps> = ({ date }) => {
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
      <S.Button size="middle" type="primary" onClick={handleClickBtn}>
        Confirm
      </S.Button>
    </S.DateWrapper>
  );
};
