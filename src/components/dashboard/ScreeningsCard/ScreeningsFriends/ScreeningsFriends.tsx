import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { ScreeningsFriend } from './ScreeningsFriend/ScreeningsFriend';
import { CurrentStatisticsState } from '../ScreeningsCard';
import { CarouselArrow } from 'components/common/CarouselArrow/CarouselArrow';
import { useResponsive } from 'hooks/useResponsive';
import { Screening } from 'api/screenings.api';
import * as S from './ScreeningsFriends.styles';

interface ScreeningsFriendsProps {
  screenings: Screening[];
  currentStatistics: CurrentStatisticsState;
  setCurrentStatistics: (func: (state: CurrentStatisticsState) => CurrentStatisticsState) => void;
}

export const ScreeningsFriends: React.FC<ScreeningsFriendsProps> = ({
  screenings,
  currentStatistics,
  setCurrentStatistics,
}) => {
  const { mobileOnly, isTablet } = useResponsive();

  const { t } = useTranslation();

  const handleClickItem = (mode: number) => () => {
    setCurrentStatistics((prev) => {
      if (prev.isFirstClick && prev.firstUser !== mode) {
        return {
          ...prev,
          isFirstClick: !prev.isFirstClick,
          secondUser: mode,
        };
      } else if (prev.secondUser !== mode) {
        return {
          ...prev,
          isFirstClick: !prev.isFirstClick,
          firstUser: mode,
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
          isPrimary={index === currentStatistics.firstUser}
          isSecondary={index === currentStatistics.secondUser}
          onClick={handleClickItem(index)}
        />
      )),
    [screenings, currentStatistics],
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
