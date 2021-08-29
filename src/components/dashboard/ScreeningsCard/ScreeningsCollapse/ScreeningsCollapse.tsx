import React, { useMemo, useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { doctorsData } from '../../../../constants/doctorsData';
import * as S from './ScreeningsCollapse.styles';

interface ScreeningsItemState {
  firstItem: number;
  secondItem: number;
  isFirstClick: boolean;
}

export const ScreeningsCollapse: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const { t } = useTranslation();

  const [activeItems, setActiveItems] = useState<ScreeningsItemState>({
    firstItem: 1,
    secondItem: 4,
    isFirstClick: true,
  });

  const handleClickItem = (mode: number) => () => {
    setActiveItems((prev) => {
      if (prev.isFirstClick && prev.secondItem !== mode) {
        return {
          ...prev,
          isFirstClick: !prev.isFirstClick,
          firstItem: mode,
        };
      } else if (prev.firstItem !== mode) {
        return {
          ...prev,
          isFirstClick: !prev.isFirstClick,
          secondItem: mode,
        };
      } else {
        return {
          ...prev,
        };
      }
    });
  };

  const data = useMemo(() => {
    const result = [];

    for (let i = 0; i <= doctorsData.length && i < 6; i++) {
      if (i === 1 || i === 5) {
        result.push({
          isDowngrade: true,
          value: Math.floor(1 + Math.random() * 99),
          ...doctorsData[i],
        });
      } else {
        result.push({
          isDowngrade: false,
          value: Math.floor(1 + Math.random() * 99),
          ...doctorsData[i],
        });
      }
    }

    return result;
  }, [doctorsData]);

  return (
    <S.Wrapper isCollapsed={isCollapsed}>
      <S.HeaderWrapper isCollapsed={isCollapsed}>
        {!isCollapsed && <S.Text>{t('dashboard.latestScreenings.friends')}</S.Text>}
        <S.ArrowBtn type="text" onClick={() => setCollapsed(!isCollapsed)}>
          {isCollapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        </S.ArrowBtn>
      </S.HeaderWrapper>
      <S.List>
        {data.map((friend, index) => (
          <S.ListItem
            key={friend.id}
            isCollapsed={isCollapsed}
            isDowngrade={friend.isDowngrade}
            isFirstActive={activeItems.firstItem === index}
            isSecondActive={activeItems.secondItem === index}
            onClick={handleClickItem(index)}
          >
            <S.Avatar src={friend.imgUrl} shape="square" />
            {!isCollapsed && (
              <>
                <S.Text>{friend.name}</S.Text>
                <S.Text>
                  {friend.isDowngrade ? <CaretDownOutlined /> : <CaretUpOutlined />}
                  {friend.value}%
                </S.Text>
              </>
            )}
          </S.ListItem>
        ))}
      </S.List>
    </S.Wrapper>
  );
};
