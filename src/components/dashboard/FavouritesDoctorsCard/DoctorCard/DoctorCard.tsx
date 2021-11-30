import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { specifities } from 'constants/specifities';
import { Doctor } from 'api/doctors.api';
import * as S from './DoctorCard.styles';

type DoctorCardProps = Pick<Doctor, 'name' | 'specifity' | 'rating' | 'imgUrl'>;

export const DoctorCard: React.FC<DoctorCardProps> = ({ name, specifity, rating, imgUrl }) => {
  const { t } = useTranslation();

  const speciality = useMemo(() => {
    let result;

    specifities.forEach((spec) => {
      if (spec.id === specifity) {
        result = spec.name;
      }
    });

    return result;
  }, [specifities, specifity]);

  return (
    <S.Wrapper>
      <S.Avatar shape="square" src={imgUrl} />
      <S.RatingWrapper>
        <S.Rating disabled defaultValue={rating} />
        <S.Text>{rating}</S.Text>
      </S.RatingWrapper>
      <S.InfoWrapper>
        <S.Title>{t('common.doctor')}</S.Title>
        <S.Text>{name}</S.Text>
        <S.Title>{t('common.specifity')}</S.Title>
        <S.Text>{speciality}</S.Text>
        <S.VisitWrapper>
          <S.Title>{t('dashboard.favoriteDoctors.lastVisit')}</S.Title>
        </S.VisitWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
