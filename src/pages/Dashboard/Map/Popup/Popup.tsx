import React from 'react';
import { Typography } from 'antd';
import * as S from './Popup.styles';

const { Text } = Typography;

interface PopupProps {
  isDoctor?: boolean;
  imgUrl?: string;
  name?: string;
  specifity?: string;
  rating?: number;
}

export const Popup: React.FC<PopupProps> = ({ isDoctor, imgUrl, name, specifity, rating = 5 }) => {
  return (
    <S.Wrapper>
      {!isDoctor && <Text>{name}</Text>}
      {isDoctor && (
        <>
          <S.Avatar shape="square" src={imgUrl} />
          <S.InfoWrapper>
            <S.Item>
              <S.Title>Doctor</S.Title>
              <Text>{name}</Text>
            </S.Item>
            <S.Item>
              <S.Title>Specifity</S.Title>
              <Text>{specifity}</Text>
            </S.Item>
            <S.Item>
              <S.Rating disabled defaultValue={rating} />
              <Text>{rating}</Text>
            </S.Item>
          </S.InfoWrapper>
        </>
      )}
    </S.Wrapper>
  );
};
