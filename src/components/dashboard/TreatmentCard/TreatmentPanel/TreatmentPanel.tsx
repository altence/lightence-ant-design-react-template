import React from 'react';
import { TreatmentDate } from './TreatmentDate/TreatmentDate';
import { TreatmentDoctorCard } from './TreatmentDoctorCard/TreatmentDoctorCard';
import { doctorsData } from '../../../../constants/doctorsData';
import { Dates, AppDate } from '../../../../constants/Dates';
import * as S from './TreatmentPanel.styles';

interface TreatmentPanelProps {
  date: AppDate;
}

export const TreatmentPanel: React.FC<TreatmentPanelProps> = ({ date }) => {
  const treatmentData = doctorsData.map((tr, index) => {
    if (index === 1) {
      return {
        nextVisit: '08/19/21',
        ...tr,
      };
    } else if (index === 3) {
      return {
        nextVisit: '08/24/21',
        ...tr,
      };
    } else if (index === 5) {
      return {
        nextVisit: '08/27/21',
        ...tr,
      };
    } else {
      return {
        ...tr,
      };
    }
  });

  const treatment = treatmentData.find((tr) => {
    const dbDate = Dates.format(tr.lastVisit, 'L');
    const selectedDate = Dates.format(date, 'L');

    return dbDate === selectedDate;
  });

  return (
    <S.Wrapper>
      <TreatmentDate date={date} treatment={treatment} />
      <TreatmentDoctorCard treatment={treatment} />
    </S.Wrapper>
  );
};
