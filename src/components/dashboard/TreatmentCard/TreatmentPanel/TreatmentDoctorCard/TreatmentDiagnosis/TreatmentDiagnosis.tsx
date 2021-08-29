import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Doctor } from '../../../../../../constants/doctorsData';
import { Dates, AppDate } from '../../../../../../constants/Dates';
import { diagnosisStatus } from '../../../../../../constants/diagnosisStatus';
import * as S from '../TreatmentDoctorCard.styles';

const today = Dates.getToday();

interface TreatmentDiagnosisProps {
  date: AppDate;
  treatment: Doctor;
}

export const TreatmentDiagnosis: React.FC<TreatmentDiagnosisProps> = ({ date, treatment }) => {
  const { t } = useTranslation();

  const diagnosis = useMemo(() => {
    let result;

    diagnosisStatus.forEach((diagnosis) => {
      if (diagnosis.id == treatment?.lastDiagnosis) {
        result = diagnosis.name;
      }
    });

    return result;
  }, [treatment, diagnosisStatus]);

  return (
    <S.DiagnosisWrapper>
      <S.Title>{t('dashboard.treatmentPlan.diagnosis')}</S.Title>
      <S.Text>{(today.isAfter(date) && diagnosis && t(diagnosis)) || t('dashboard.treatmentPlan.noDiagnosis')}</S.Text>
    </S.DiagnosisWrapper>
  );
};
