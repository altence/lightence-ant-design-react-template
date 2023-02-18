import React from 'react';
import { useTranslation } from 'react-i18next';
import { specifities } from 'constants/specifities';
import { Dates } from 'constants/Dates';
import * as S from './DoctorCard.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseImage } from '@app/components/common/BaseImage/BaseImage';

interface DoctorCardProps {
  name?: string;
  speciality?: number;
  rating?: number;
  imgUrl?: string;
  date: number;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ name, speciality, rating, imgUrl, date }) => {
  const { t } = useTranslation();

  const specifity = specifities.find((el) => el.id === speciality)?.name;

  return (
    <S.DoctorCard padding="16px">
      <BaseRow gutter={[{}, { xxl: 10 }]}>
        <BaseCol span={24}>
          <S.ImgWrapper>
            <BaseImage src={imgUrl} alt={name} preview={false} />
          </S.ImgWrapper>
        </BaseCol>

        <BaseCol span={24}>
          <BaseRow align="middle" gutter={[10, 10]}>
            <BaseCol>
              <S.Rating value={rating} disabled />
            </BaseCol>

            <BaseCol>
              <S.Text>{rating}.0</S.Text>
            </BaseCol>
          </BaseRow>
        </BaseCol>

        <BaseCol span={24}>
          <BaseRow>
            <BaseCol span={24}>
              <S.Title>{t('common.doctor')}</S.Title>
            </BaseCol>

            <BaseCol span={24}>
              <S.Text>{name}</S.Text>
            </BaseCol>
          </BaseRow>
        </BaseCol>

        <BaseCol span={24}>
          <BaseRow>
            <BaseCol span={24}>
              <S.Title>{t('common.specifity')}</S.Title>
            </BaseCol>

            <BaseCol span={24}>
              <S.Text>{t(`common.${specifity}`)}</S.Text>
            </BaseCol>
          </BaseRow>
        </BaseCol>

        <BaseCol span={24}>
          <BaseRow justify="space-between" wrap={false}>
            <BaseCol>
              <S.Title>{t('medical-dashboard.favoriteDoctors.lastVisit')}</S.Title>
            </BaseCol>

            <BaseCol>
              <S.Text>{Dates.format(Dates.getDate(date), 'L')}</S.Text>
            </BaseCol>
          </BaseRow>
        </BaseCol>
      </BaseRow>
    </S.DoctorCard>
  );
};
