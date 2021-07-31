import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Typography, Avatar } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { Popup as LPopup } from 'react-leaflet';

interface PopupProps {
  isDoctor?: boolean;
  imgUrl?: string;
  name?: string;
  specifity?: string;
  rating?: number;
}

export const Popup: React.FC<PopupProps> = ({ isDoctor, imgUrl, name, specifity, rating = 5 }) => {
  const getRating = useMemo(() => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<StarFilled key={i} />);
    }

    return stars;
  }, [rating]);

  return (
    <Wrapper>
      {!isDoctor && <Text>{name}</Text>}
      {isDoctor && (
        <>
          <AvatarStyled src={imgUrl} />
          <Info>
            <InfoItem>
              <InfoTitle>Doctor</InfoTitle>
              <Text>{name}</Text>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Specifity</InfoTitle>
              <Text>{specifity}</Text>
            </InfoItem>
            <InfoItem>
              <Rating>{getRating}</Rating>
              <Text>{rating}</Text>
            </InfoItem>
          </Info>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(LPopup)`
  & .leaflet-popup-content-wrapper {
    border-radius: 7px;
  }

  & .leaflet-popup-content {
    display: flex;
    margin: 0;
    padding: 0.375rem;
    align-items: center;
  }

  & .leaflet-popup-close-button {
    display: none;
  }
`;

const AvatarStyled = styled(Avatar)`
  margin-right: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const InfoTitle = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.75rem;
  margin-right: 0.5rem;
`;

const Text = styled(Typography.Text)`
  font-size: 0.75rem;
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
  color: ${(props) => props.theme.colors.star};
  margin-right: 0.4rem;
`;
