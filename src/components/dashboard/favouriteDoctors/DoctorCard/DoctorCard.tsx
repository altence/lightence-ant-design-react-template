import React from 'react';
import { useTranslation } from 'react-i18next';
import { specifities } from 'constants/specifities';
import { Col, Image, Row } from 'antd';
import { Dates } from 'constants/Dates';
import * as S from './DoctorCard.styles';

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
      <Row gutter={[{}, { xxl: 10 }]}>
        <Col span={24}>
          <S.ImgWrapper>
            <Image src={imgUrl} alt={name} preview={false} />
          </S.ImgWrapper>
        </Col>

        <Col span={24}>
          <Row align="middle" gutter={[10, 10]}>
            <Col>
              <S.Rating value={rating} disabled />
            </Col>

            <Col>
              <S.Text>{rating}.0</S.Text>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row>
            <Col span={24}>
              <S.Title>{t('common.doctor')}</S.Title>
            </Col>

            <Col span={24}>
              <S.Text>{name}</S.Text>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row>
            <Col span={24}>
              <S.Title>{t('common.specifity')}</S.Title>
            </Col>

            <Col span={24}>
              <S.Text>{t(`common.${specifity}`)}</S.Text>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row justify="space-between" wrap={false}>
            <Col>
              <S.Title>{t('dashboard.favoriteDoctors.lastVisit')}</S.Title>
            </Col>

            <Col>
              <S.Text>{Dates.format(Dates.getDate(date), 'L')}</S.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </S.DoctorCard>
  );
};
