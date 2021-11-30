import React from 'react';
import { useTranslation } from 'react-i18next';
import { DoctorProfile } from 'components/common/DoctorProfile/DoctorProfile';
import { Card } from 'components/common/Card/Card';
import { Doctor } from 'api/doctors.api';
import * as S from './TreatmentDoctor.styles';

interface TreatmentDoctorProps {
  doctor?: Doctor;
  isEvent: boolean;
}

export const TreatmentDoctor: React.FC<TreatmentDoctorProps> = ({ doctor, isEvent }) => {
  const { t } = useTranslation();

  return (
    <Card padding={10}>
      {isEvent ? (
        <DoctorProfile
          src={doctor?.imgUrl}
          name={doctor?.name}
          speciality={doctor?.specifity}
          rating={doctor?.rating}
        />
      ) : (
        <S.Title>{t('dashboard.treatmentPlan.noTreatments')}</S.Title>
      )}
    </Card>
  );
};
