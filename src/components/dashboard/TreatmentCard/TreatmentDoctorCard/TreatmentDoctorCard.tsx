import React from 'react';
import styled from 'styled-components';
import { Typography, Avatar, Button } from 'antd';
// import { Rating } from '../../../components/common/Rating';

interface TreatmentDoctorCardProps {
  imgUrl: string;
  name: string;
  speciality: string;
  rating: number;
  diagnosis: string;
  visit: Date;
}

export const TreatmentDoctorCard: React.FC<TreatmentDoctorCardProps> = ({
  imgUrl,
  name,
  speciality,
  rating,
  diagnosis,
  visit,
}) => {
  return (
    <Wrapper>
      <Profile>
        <AvatarStyled shape="square" src={imgUrl} />
        <Info>
          <InfoItem>
            <Title>Doctor</Title>
            <Subtitle>{name}</Subtitle>
          </InfoItem>
          <InfoItem>
            <Title>Speciality</Title>
            <Subtitle>{speciality}</Subtitle>
          </InfoItem>
          <InfoItem>{/* <Rating value={rating} /> */}</InfoItem>
        </Info>
      </Profile>
      <Diagnosis>
        <Title>Diagnosis</Title>
        <Typography.Text>{diagnosis}</Typography.Text>
      </Diagnosis>
      <Visits>
        <Title>Upcoming visits</Title>
        <Subtitle>{visit}</Subtitle>
      </Visits>
      <Button type="primary" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Profile = styled.div``;

const AvatarStyled = styled(Avatar)`
  margin-right: 0.875rem;
`;

const Info = styled.div``;

const InfoItem = styled.div``;

const Title = styled(Typography.Text)`
  font-size: 0.75rem;

  color: ${(props) => props.theme.colors.primary};
`;

const Subtitle = styled(Typography.Text)`
  font-weight: 500;
`;

const Diagnosis = styled.div``;

const Visits = styled.div``;
