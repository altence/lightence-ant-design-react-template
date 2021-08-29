import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TreatmentDoctorProfile } from './TreatmentDoctorProfile/TreatmentDoctorProfile';
import { TreatmentDiagnosis } from './TreatmentDiagnosis/TreatmentDiagnosis';
import { TreatmentVisit } from './TreatmentVisit/TreatmentVisit';
import { TreatmentModal } from './TreatmentModal/TreatmentModal';
import { doctorsData } from '../../../../../constants/doctorsData';
import { AppDate, Dates } from '../../../../../constants/Dates';
import * as S from './TreatmentDoctorCard.styles';

interface TreatmentDoctorCardProps {
  date: AppDate;
}

export const TreatmentDoctorCard: React.FC<TreatmentDoctorCardProps> = ({ date }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const { t } = useTranslation();

  const treatment = doctorsData.find((tr) => {
    const dbLastVisitDate = Dates.format(tr.lastVisit, 'L');
    const dbNextVisitDate = tr.nextVisit && Dates.format(tr.nextVisit, 'L');

    const selectedDate = Dates.format(date, 'L');

    return dbLastVisitDate === selectedDate || dbNextVisitDate === selectedDate;
  });

  return (
    <S.Wrapper>
      {treatment ? (
        <>
          <TreatmentDoctorProfile treatment={treatment} />
          <TreatmentDiagnosis date={date} treatment={treatment} />
          <TreatmentVisit treatment={treatment} />
          <S.Button size="middle" type="primary" onClick={() => setModalVisible(true)}>
            {t('dashboard.treatmentPlan.askQuestion')}
          </S.Button>
          <TreatmentModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
        </>
      ) : (
        <S.WarningText>{t('dashboard.treatmentPlan.noTreatments')}</S.WarningText>
      )}
    </S.Wrapper>
  );
};
