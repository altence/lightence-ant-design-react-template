import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Doctor } from '../../../../../../constants/doctorsData';
import { specifities } from '../../../../../../constants/specifities';
import * as S from '../TreatmentDoctorCard.styles';

interface TreatmentDoctorProfileProps {
  treatment: Doctor;
}

export const TreatmentDoctorProfile: React.FC<TreatmentDoctorProfileProps> = ({ treatment }) => {
  const { t } = useTranslation();

  const speciality = useMemo(() => {
    let result;

    specifities.forEach((spec) => {
      if (spec.id === treatment.specifity) {
        result = spec.name;
      }
    });

    return result;
  }, [treatment, specifities]);

  return (
    <S.ProfileWrapper>
      <S.Avatar src={treatment.imgUrl} shape="square" />
      <S.InfoWrapper>
        <S.InfoItem>
          <S.Title>{t('common.doctor')}</S.Title>
          <S.Text>{treatment.name}</S.Text>
        </S.InfoItem>
        <S.InfoItem>
          <S.Title>{t('common.specifity')}</S.Title>
          <S.Text>{speciality}</S.Text>
        </S.InfoItem>
        <S.InfoItem>
          <S.Rating disabled defaultValue={treatment.rating} />
          <S.Text>{treatment.rating}</S.Text>
        </S.InfoItem>
      </S.InfoWrapper>
    </S.ProfileWrapper>
  );
};
