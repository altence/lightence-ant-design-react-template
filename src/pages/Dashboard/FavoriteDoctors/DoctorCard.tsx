import React from 'react';
import styled from 'styled-components';
import { Avatar, Typography } from 'antd';
import { Rating } from '../../../components/common/Rating';
import { FavoriteDoctor } from '../../../constants/favoriteDoctors';

export const DoctorCard: React.FC<FavoriteDoctor> = ({ imgUrl, rating, name, specifity, visit }) => {
  return (
    <Wrapper>
      <AvatarStyled src={imgUrl} />
      <RatingStyled value={rating} />
      <Info>
        <InfoTitle>Doctor</InfoTitle>
        <InfoText>{name}</InfoText>
        <InfoTitle>Specifity</InfoTitle>
        <InfoText>{specifity}</InfoText>
        <VisitWrapper>
          <InfoTitle>Last visit</InfoTitle>
          <InfoText>{visit.toLocaleDateString()}</InfoText>
        </VisitWrapper>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem;
  border-radius: 7px;
  transition: all 0.3s ease;

  &:hover {
    background: #ecfdff;
  }
`;

const AvatarStyled = styled(Avatar)`
  width: 8.75rem;
  height: 8.75rem;
  margin-bottom: 0.625rem;
`;

const RatingStyled = styled(Rating)`
  margin-bottom: 1.25rem;
`;

const Info = styled.div``;

const InfoTitle = styled(Typography.Text)`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.primary};
  display: block;
`;

const InfoText = styled(Typography.Text)`
  font-size: 1rem;
`;

const VisitWrapper = styled.div`
  display: flex;

  & ${InfoText} {
    font-size: 0.75rem;
    margin-left: 0.625rem;
  }
`;
