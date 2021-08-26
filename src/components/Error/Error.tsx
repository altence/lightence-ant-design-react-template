import React from 'react';
import * as S from './Error.styles';

interface ErrorProps {
  img: string;
  msg: string;
  btnText?: string;
}

export const Error: React.FC<ErrorProps> = ({ img, msg, btnText }) => {
  return (
    <S.Wrapper>
      <S.Image preview={false} src={img} />
      <S.ContentWrapper>
        <S.Title>Oops!</S.Title>
        <S.Text>{msg}</S.Text>
        <S.Btn size="large" type="primary" href="/">
          {btnText || 'Come back'}
        </S.Btn>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
