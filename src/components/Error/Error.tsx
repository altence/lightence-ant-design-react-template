import React from 'react';
import error404 from '../../assets/images/error404.svg';
import error500 from '../../assets/images/error500.svg';
import * as S from './Error.styles';

interface ErrorProps {
  error: 404 | 500;
}

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <S.Wrapper>
      <S.Image preview={false} src={(error === 404 && error404) || (error === 500 && error500) || error404} />
      <S.ContentWrapper>
        <S.Title>Oops!</S.Title>
        <S.Text>
          {(error === 404 && 'Sorry, page not found') ||
            (error === 500 && 'Internal server error') ||
            'Sorry, page not found'}
        </S.Text>
        <S.Btn size="large" type="primary" href="/">
          {(error === 404 && 'Come back') || (error === 500 && 'Try again') || 'Come back'}
        </S.Btn>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
