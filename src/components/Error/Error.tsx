import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './Error.styles';

interface ErrorProps {
  img: string;
  msg: string;
}

export const Error: React.FC<ErrorProps> = ({ img, msg }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Image preview={false} src={img} />
      <S.ContentWrapper>
        <S.Title>{t('common.oops')}</S.Title>
        <S.Text>{msg}</S.Text>
        {/*TODO make common component */}
        <S.Link href="/">{t('error404.comeBack')}</S.Link>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
