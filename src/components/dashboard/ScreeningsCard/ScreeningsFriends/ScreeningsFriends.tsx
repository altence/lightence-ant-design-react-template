import React, { useEffect, useMemo, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { ScreeningsFriend } from './ScreeningsFriend/ScreeningsFriend';
import { Carousel } from 'components/common/Carousel/Carousel';
import { DashboardCard } from 'components/dashboard/DashboardCard/DashboardCard';
import { getScreenings, Screening } from 'api/screenings.api';
import * as S from './ScreeningsFriends.styles';
import { useResponsive } from 'hooks/useResponsive';
import { Col, Row } from 'antd';

export const ScreeningsFriends: React.FC = () => {
  const { mobileOnly, isTablet } = useResponsive();

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
    console.log('click');
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

  const carouselItems = useMemo(
    () => screeningsItems.map((item, index) => <SwiperSlide key={index}>{item}</SwiperSlide>),
    [screeningsItems],
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
        <Carousel spaceBetween={15} slidesPerView={5}>
          {carouselItems}
        </Carousel>
      )}

      {isTablet && <Row gutter={[0, 10]}>{colItems}</Row>}
    </S.Wrapper>
  );
};

// <S.Wrapper isCollapsed={isCollapsed}>
//   <S.HeaderWrapper isCollapsed={isCollapsed}>
//     {!isCollapsed && <S.Text>{t('dashboard.latestScreenings.friends')}</S.Text>}
//     <S.ArrowBtn type="text" onClick={() => setCollapsed(!isCollapsed)}>
//       {isCollapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
//     </S.ArrowBtn>
//   </S.HeaderWrapper>
//   <S.List>
//     {data.map((friend, index) => (
//       <S.ListItem
//         key={friend.id}
//         isCollapsed={isCollapsed}
//         isDowngrade={friend.isDowngrade}
//         isFirstActive={activeItems.isSecondary === index}
//         isSecondActive={activeItems.secondItem === index}
//         onClick={handleClickItem(index)}
//       >
//         <S.Avatar src={friend.imgUrl} shape="square" />
//         {!isCollapsed && (
//           <>
//             <S.Text>{friend.name}</S.Text>
//             <S.Text>
//               {friend.isDowngrade ? <CaretDownOutlined /> : <CaretUpOutlined />}
//               {friend.value}%
//             </S.Text>
//           </>
//         )}
//       </S.ListItem>
//     ))}
//   </S.List>
// </S.Wrapper>

// interface Friend extends Doctor {
//   isDowngrade: boolean;
//   value: number;
// }
// interface ScreeningsItemState {
//   firstItem: number;
//   secondItem: number;
//   isFirstClick: boolean;
// }

// const [isCollapsed, setCollapsed] = useState(true);

// const { t } = useTranslation();

// const [activeItems, setActiveItems] = useState<ScreeningsItemState>({
//   firstItem: 1,
//   secondItem: 4,
//   isFirstClick: true,
// });

// const data = useMemo(() => {
//   const result: Friend[] = [];

//   doctorsData.every((el, index) => {
//     if (index === 6) return false;

//     if (index === 1 || index === 5) {
//       result.push({
//         ...el,
//         isDowngrade: true,
//         value: Math.floor(1 + Math.random() * 99),
//       });
//     } else {
//       result.push({
//         ...el,
//         isDowngrade: false,
//         value: Math.floor(1 + Math.random() * 99),
//       });
//     }

//     return true;
//   });

//   return result;
// }, [doctorsData]);
