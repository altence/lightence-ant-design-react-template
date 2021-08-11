import React, { useEffect } from 'react';
import { Moment } from 'moment';
import { treatmentData } from '../../../../constants/treatment';
import * as S from './TreatmentDoctorCard.styles';

interface TreatmentDoctorCardProps {
  date: Moment;
}

export const TreatmentDoctorCard: React.FC<TreatmentDoctorCardProps> = ({ date }) => {
  const test = treatmentData.find((tr) => tr.date === date.format('DD.MM.YY'));

  return <S.Wrapper></S.Wrapper>;
};
