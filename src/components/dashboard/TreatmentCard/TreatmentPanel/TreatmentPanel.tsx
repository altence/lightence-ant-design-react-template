import React from 'react';
import { Moment } from 'moment';
import { Button, notification } from 'antd';
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
      <S.DateWrapper>
        <S.Title>{date.format('D')}</S.Title>
        <S.Subtitle>{date.format('MMMM')}</S.Subtitle>
      </S.DateWrapper>
      <S.Text>08:00</S.Text>
      <Button type="primary" onClick={handleClickBtn}>
        Confirm
      </Button>
    </S.Wrapper>
  );
};
