import React from 'react';
import { Doctor } from '../../../../constants/doctorsData';
import { Dates } from '../../../../constants/Dates';
import * as S from './DoctorCard.styles';

type DoctorCardProps = Pick<Doctor, 'name' | 'specifity' | 'rating' | 'lastVisit' | 'imgUrl'>;

export const DoctorCard: React.FC<DoctorCardProps> = ({ name, specifity, rating, lastVisit, imgUrl }) => {
  return (
    <S.Wrapper>
      <S.Avatar shape="square" src={imgUrl} />
      <S.RatingWrapper>
        <S.Rating disabled defaultValue={rating} />
        <S.Text>{rating}</S.Text>
      </S.RatingWrapper>
      <S.InfoWrapper>
        <S.Title>Doctor</S.Title>
        <S.Text>{name}</S.Text>
        <S.Title>Specifity</S.Title>
        <S.Text>{specifity}</S.Text>
        <S.VisitWrapper>
          <S.Title>Last visit</S.Title>
          <S.Text>{Dates.format(lastVisit, 'L')}</S.Text>
        </S.VisitWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
