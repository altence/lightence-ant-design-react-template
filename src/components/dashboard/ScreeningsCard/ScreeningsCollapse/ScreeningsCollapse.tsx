import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { doctorsData } from '../../../../constants/doctorsData';
import * as S from './ScreeningsCollapse.styles';

const getFriendsData = () => {
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
};

export const ScreeningsCollapse: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <S.Wrapper isCollapsed={isCollapsed}>
      <S.HeaderWrapper isCollapsed={isCollapsed}>
        {!isCollapsed && <S.Text>Friends</S.Text>}
        <S.ArrowBtn type="text" onClick={() => setCollapsed(!isCollapsed)}>
          {isCollapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        </S.ArrowBtn>
      </S.HeaderWrapper>
      <S.List>
        {getFriendsData().map((friend) => (
          <S.ListItem key={friend.id} isCollapsed={isCollapsed} isDowngrade={friend.isDowngrade}>
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
