import React, { useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { ScreeningsFriend } from './ScreeningsFriend/ScreeningsFriend';
import { CarouselArrow } from 'components/common/CarouselArrow/CarouselArrow';
import { useResponsive } from 'hooks/useResponsive';
import { getScreenings, Screening } from 'api/screenings.api';
import * as S from './ScreeningsFriends.styles';

export const ScreeningsFriends: React.FC = () => {
  const { mobileOnly, isTablet } = useResponsive();

  const { t } = useTranslation();

  const [screenings, setScreenings] = useState<Screening[]>([]);
  const [active, setActive] = useState({
    isPrimary: 1,
    isSecondary: 3,
    isFirstClick: true,
  });

  useEffect(() => {
    getScreenings().then((res) => setScreenings(res));
  }, []);

  const handleClickItem = (mode: number) => () => {
    setActive((prev) => {
      if (prev.isFirstClick && prev.isPrimary !== mode) {
        return {
          ...prev,
          isFirstClick: !prev.isFirstClick,
          isSecondary: mode,
        };
      } else if (prev.isSecondary !== mode) {
        return {
          ...prev,
          isFirstClick: !prev.isFirstClick,
          isPrimary: mode,
        };
      } else {
        return {
          ...prev,
        };
      }
    });
  };

  const screeningsItems = useMemo(
    () =>
      screenings.map((screening, index) => (
        <ScreeningsFriend
          key={screening.name}
          name={screening.name}
          value={screening.value}
          prevValue={screening.prevValue}
          src={screening.imgUrl}
          isPrimary={index === active.isPrimary}
          isSecondary={index === active.isSecondary}
          onClick={handleClickItem(index)}
        />
      )),
    [screenings, active],
  );

  const colItems = useMemo(
    () =>
      screeningsItems.map((item, index) => (
        <Col key={index} span={24}>
          {item}
        </Col>
      )),
    [screeningsItems],
  );

  return (
    <S.Wrapper>
      {mobileOnly && (
        <S.ScreeningsCarousel
          arrows
          prevArrow={
            <CarouselArrow>
              <ArrowLeftOutlined />
            </CarouselArrow>
          }
          nextArrow={
            <CarouselArrow>
              <ArrowRightOutlined />
            </CarouselArrow>
          }
          slidesToShow={5}
        >
          {screeningsItems}
        </S.ScreeningsCarousel>
      )}

      {isTablet && (
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <S.Title>{t('dashboard.latestScreenings.friends')}</S.Title>
          </Col>

          {colItems}
        </Row>
      )}
    </S.Wrapper>
  );
};
