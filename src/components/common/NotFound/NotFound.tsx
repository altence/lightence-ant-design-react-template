import React from 'react';
import { useTranslation } from 'react-i18next';
import notFoundImg from 'assets/images/nothing-found.webp';
import * as S from './NotFound.styles';
import { BaseImage } from '../BaseImage/BaseImage';

export const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.NotFoundWrapper>
      <S.ImgWrapper>
        <BaseImage src={notFoundImg} alt="Not found" preview={false} />
      </S.ImgWrapper>
      <S.Text>{t('common.notFound')}</S.Text>
    </S.NotFoundWrapper>
  );
};
