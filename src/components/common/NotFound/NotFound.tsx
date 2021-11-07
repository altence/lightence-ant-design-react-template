import React from 'react';
import { Image } from 'antd';
import { useTranslation } from 'react-i18next';
import notFoundImg from 'assets/images/nothing-found.png';
import * as S from './NotFound.styles';

export const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.NotFoundWrapper>
      <S.ImgWrapper>
        <Image src={notFoundImg} alt="Not found" preview={false} />
      </S.ImgWrapper>
      <S.Text>{t('common.notFound')}</S.Text>
    </S.NotFoundWrapper>
  );
};
