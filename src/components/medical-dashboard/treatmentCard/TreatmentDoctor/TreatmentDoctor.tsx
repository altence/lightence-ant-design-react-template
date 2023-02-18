import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './TreatmentDoctor.styles';
import { Dates } from '@app/constants/Dates';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';

export interface TreatmentDoctor {
  name: string;
  imgUrl: string;
  speciality: string;
  date: number;
  address: string;
  phone: string;
}

interface TreatmentDoctorProps {
  doctor: TreatmentDoctor;
}

export const TreatmentDoctor: React.FC<TreatmentDoctorProps> = ({ doctor }) => {
  const { t } = useTranslation();

  const { name, speciality, address, imgUrl, phone, date } = doctor;

  return (
    <S.DoctorCard padding={'1rem'}>
      <S.DoctorCardBody>
        <BaseAvatar src={imgUrl} alt={doctor.name} size={128} />

        <S.DoctorName>{`${name}, ${t(`common.${speciality}`)}`}</S.DoctorName>
        <BaseRow gutter={[8, 8]}>
          <S.LabelCol span={10}>{t('common.dateTime')}</S.LabelCol>
          <S.ValueCol span={14}>{Dates.format(date, 'lll')}</S.ValueCol>
          <S.LabelCol span={10}>{t('common.address')}</S.LabelCol>
          <S.ValueCol span={14}>{address}</S.ValueCol>
          <S.LabelCol span={10}>{t('common.phone')}</S.LabelCol>
          <S.ValueCol span={14}>
            <S.Tel href={`tel:${phone}`}>{phone}</S.Tel>
          </S.ValueCol>
        </BaseRow>
      </S.DoctorCardBody>
    </S.DoctorCard>
  );
};
