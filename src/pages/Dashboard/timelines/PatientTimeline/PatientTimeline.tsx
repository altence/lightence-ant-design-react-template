import React from 'react';
import { Typography } from 'antd';
import { PatientTimeline as PatientTimelineProps } from '../../../../constants/patientTimeline';
import * as S from './PatientTimeline.styles';

export const PatientTimeline: React.FC<PatientTimelineProps> = ({ title, date, description, isActive }) => {
  return (
    <S.Wrapper>
      <S.Title isActive={isActive}>{title}</S.Title>
      <S.Date>
        <S.CalendarIcon />
        <Typography.Text>{date}</Typography.Text>
      </S.Date>
      <Typography.Text>{description}</Typography.Text>
    </S.Wrapper>
  );
};
