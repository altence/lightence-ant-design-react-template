import React from 'react';
import { TreatmentDate } from './TreatmentDate/TreatmentDate';
import { TreatmentDoctorCard } from './TreatmentDoctorCard/TreatmentDoctorCard';
import { AppDate } from '../../../../constants/Dates';
import * as S from './TreatmentPanel.styles';

interface TreatmentPanelProps {
  date: AppDate;
}

export const TreatmentPanel: React.FC<TreatmentPanelProps> = ({ date }) => {
  return (
    <S.Wrapper>
      <TreatmentDate date={date} />
      <TreatmentDoctorCard date={date} />
    </S.Wrapper>
  );
};
