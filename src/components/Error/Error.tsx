import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './Error.styles';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="ant-btn ant-btn-link">
          {t('error404.comeBack')}
        </Link>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
