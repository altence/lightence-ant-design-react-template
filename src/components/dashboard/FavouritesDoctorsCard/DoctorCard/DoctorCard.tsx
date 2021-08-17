import React from 'react';
import { FavoriteDoctor } from '../../../../constants/favouritesDoctors';
import { Dates } from '../../../../constants/dates';
import * as S from './DoctorCard.styles';

type DoctorCardProps = Omit<FavoriteDoctor, 'id'>;

export const DoctorCard: React.FC<DoctorCardProps> = ({ imgUrl, rating, name, specifity, visit }) => {
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
          <S.Text>{Dates.format(visit, 'L')}</S.Text>
        </S.VisitWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
