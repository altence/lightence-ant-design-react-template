import React from 'react';
import { Moment } from 'moment';
import { notification } from 'antd';
import * as S from './TreatmentPanel.styles';

interface TreatmentPanelProps {
  date: Moment;
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
      <S.Notification color="red">
        <S.Bell />
      </S.Notification>
      <S.Title>{date.format('D')}</S.Title>
      <S.Subtitle>{date.format('MMMM')}</S.Subtitle>
      <S.Text>08:00</S.Text>
      <S.Button type="primary" onClick={handleClickBtn}>
        Confirm
      </S.Button>
    </S.Wrapper>
  );
};
