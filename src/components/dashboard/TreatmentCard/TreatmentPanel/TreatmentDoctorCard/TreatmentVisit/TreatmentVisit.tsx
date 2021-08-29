import React from 'react';
import { useTranslation } from 'react-i18next';
import { Doctor } from '../../../../../../constants/doctorsData';
import { Dates } from '../../../../../../constants/Dates';
import * as S from '../TreatmentDoctorCard.styles';

interface TreatmentVisitProps {
  treatment: Doctor;
}

export const TreatmentVisit: React.FC<TreatmentVisitProps> = ({ treatment }) => {
  const { t } = useTranslation();

  return (
    <S.VisitWrapper>
      <S.Title>{t('dashboard.treatmentPlan.upcomingVisits')}</S.Title>
      <S.Text>
        {(treatment.nextVisit && Dates.format(treatment.nextVisit, 'L')) ||
          t('dashboard.treatmentPlan.noUpcomingVisits')}
      </S.Text>
    </S.VisitWrapper>
  );
};
