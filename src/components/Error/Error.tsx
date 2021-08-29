import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './Error.styles';

interface ErrorProps {
  img: string;
  msg: string;
  btnText?: string;
}

export const Error: React.FC<ErrorProps> = ({ img, msg, btnText }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Image preview={false} src={img} />
      <S.ContentWrapper>
        <S.Title>{t('common.oops')}</S.Title>
        <S.Text>{msg}</S.Text>
        <S.Btn size="large" type="primary" href="/">
          {btnText || t('error404.comeBack')}
        </S.Btn>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
