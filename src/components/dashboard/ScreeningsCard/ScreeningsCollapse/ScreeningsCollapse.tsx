import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { friendsData } from '../../../../constants/friendsData';
import * as S from './ScreeningsCollapse.styles';

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
        {friendsData.map((friend) => (
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
