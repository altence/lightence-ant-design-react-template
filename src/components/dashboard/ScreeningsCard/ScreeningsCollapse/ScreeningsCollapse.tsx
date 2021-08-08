import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { friends } from '../../../../constants/friends';
import * as S from './ScreeningsCollapse.styles';

export const ScreeningsCollapse: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <S.Wrapper isCollapsed={isCollapsed}>
      <S.ArrowBtn type="text" onClick={() => setCollapsed(!isCollapsed)}>
        <S.Arrow>{isCollapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}</S.Arrow>
      </S.ArrowBtn>
      <S.List>
        {friends.map((friend) => (
          <S.ListItem key={friend.id}>
            <S.Avatar isCollapsed={isCollapsed} shape="square" src={friend.imgUrl} />
            {!isCollapsed && (
              <>
                <S.Text>{friend.name}</S.Text>
                <S.Percentage isDowngrade={friend.isDowngrade}>
                  {friend.isDowngrade ? <CaretDownOutlined /> : <CaretUpOutlined />}
                  {friend.value}%
                </S.Percentage>
              </>
            )}
          </S.ListItem>
        ))}
      </S.List>
    </S.Wrapper>
  );
};
