import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Doctor } from '../../../../constants/doctorsData';
import { Dates } from '../../../../constants/Dates';
import * as S from './DoctorCard.styles';
import { specifities } from '../../../../constants/specifities';

type DoctorCardProps = Pick<Doctor, 'name' | 'specifity' | 'rating' | 'lastVisit' | 'imgUrl'>;

export const DoctorCard: React.FC<DoctorCardProps> = ({ name, specifity, rating, lastVisit, imgUrl }) => {
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
        <S.Text>{speciality && t(speciality)}</S.Text>
        <S.VisitWrapper>
          <S.Title>{t('dashboard.favoriteDoctors.lastVisit')}</S.Title>
          <S.Text>{Dates.format(lastVisit, 'L')}</S.Text>
        </S.VisitWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
