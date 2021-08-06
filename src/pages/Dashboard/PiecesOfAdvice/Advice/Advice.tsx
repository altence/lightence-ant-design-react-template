import React from 'react';
import { Advice as AdviceProps } from '../../../../constants/advices';
import * as S from './Advice.styles';

export const Advice: React.FC<AdviceProps> = ({ imgUrl, title, date, description }) => {
  return (
    <S.Wrapper>
      <S.BtnMore type="ghost">More details</S.BtnMore>
      <S.Image src={imgUrl} />
      <S.Article>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Date>{date.toLocaleDateString()}</S.Date>
        </S.Header>
        <S.Text>{description}</S.Text>
      </S.Article>
    </S.Wrapper>
  );
};
