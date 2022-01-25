import React, { useCallback, useMemo, useState } from 'react';
import { ScreeningsFriend } from '../ScreeningsFriend/ScreeningsFriend';
import { CurrentStatisticsState, ScreeningWithDoctors } from '../../ScreeningsCard/ScreeningsCard';
import { MobileScreenings } from '../MobileScreenings/MobileScreenings';
import { DesktopScreenings } from '../DesktopScreenings/DesktopScreenings';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ScreeningsFriends.styles';

interface ScreeningsFriendsProps {
  screenings: ScreeningWithDoctors[];
  currentStatistics: CurrentStatisticsState;
  setCurrentStatistics: (func: (state: CurrentStatisticsState) => CurrentStatisticsState) => void;
  isFirstClick: boolean;
  setFirstClick: (state: boolean) => void;
}

export const ScreeningsFriends: React.FC<ScreeningsFriendsProps> = ({
  screenings,
  currentStatistics,
  setCurrentStatistics,
  isFirstClick,
  setFirstClick,
}) => {
  const [isVisibleMenu, setVisibleMenu] = useState(true);

  const { mobileOnly, isTablet } = useResponsive();

  const handleClickItem = useCallback(
    (mode: number) => () => {
      setCurrentStatistics((prev) => {
        if (isFirstClick && prev.firstUser !== mode) {
          setFirstClick(!isFirstClick);

          return {
            ...prev,
            secondUser: mode,
          };
        } else if (prev.secondUser !== mode) {
          setFirstClick(!isFirstClick);

          return {
            ...prev,
            firstUser: mode,
          };
        } else {
          return {
            ...prev,
          };
        }
      });
    },
    [isFirstClick, setFirstClick, setCurrentStatistics],
  );

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
          isVisibleMenu={isVisibleMenu}
        />
      )),
    [screenings, currentStatistics, isVisibleMenu, handleClickItem],
  );

  return (
    <S.Wrapper $isVisible={isVisibleMenu}>
      {mobileOnly && screeningsItems.length > 0 && <MobileScreenings screeningsItems={screeningsItems} />}

      {isTablet && (
        <DesktopScreenings
          screeningsItems={screeningsItems}
          isVisibleMenu={isVisibleMenu}
          setVisibleMenu={setVisibleMenu}
        />
      )}
    </S.Wrapper>
  );
};
