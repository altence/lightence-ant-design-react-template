import React from 'react';
import { FavoriteDoctor as DoctorProps } from '../../../../constants/favouritesDoctors';
import * as S from './DoctorCard.styles';

export const DoctorCard: React.FC<DoctorProps> = ({ imgUrl, rating, name, specifity, visit }) => {
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
          <S.Text>{visit}</S.Text>
        </S.VisitWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
