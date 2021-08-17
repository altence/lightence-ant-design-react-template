import React, { useState } from 'react';
import { Input, notification } from 'antd';
import { Doctor } from '../../../../../constants/doctorsData';
import { Dates } from '../../../../../constants/Dates';
import * as S from './TreatmentDoctorCard.styles';

interface TreatmentDoctorCardProps {
  treatment: Doctor;
}

export const TreatmentDoctorCard: React.FC<TreatmentDoctorCardProps> = ({ treatment }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOk = () => {
    setModalVisible(false);

    notification.open({
      message: 'Success!',
      description: 'Your question was sent to the doctor.',
    });
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <S.Wrapper>
      {treatment ? (
        <>
          <S.ProfileWrapper>
            <S.Avatar src={treatment.imgUrl} shape="square" />
            <S.InfoWrapper>
              <S.InfoItem>
                <S.Title>Doctor</S.Title>
                <S.Text>{treatment.name}</S.Text>
              </S.InfoItem>
              <S.InfoItem>
                <S.Title>Speciality</S.Title>
                <S.Text>{treatment.specifity}</S.Text>
              </S.InfoItem>
              <S.InfoItem>
                <S.Rating disabled defaultValue={treatment.rating} />
                <S.Text>{treatment.rating}</S.Text>
              </S.InfoItem>
            </S.InfoWrapper>
          </S.ProfileWrapper>
          <S.DiagnosisWrapper>
            <S.Title>Diagnosis</S.Title>
            <S.Text>{treatment.lastDiagnosis}</S.Text>
          </S.DiagnosisWrapper>
          <S.VisitWrapper>
            <S.Title>Upcoming visits</S.Title>
            <S.Text>{Dates.format(treatment.nextVisit, 'L')}</S.Text>
          </S.VisitWrapper>
          <S.Button size="middle" type="primary" onClick={() => setModalVisible(true)}>
            Ask the doctor a question
          </S.Button>
          <S.Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input placeholder="Enter your question here" />
          </S.Modal>
        </>
      ) : (
        <S.WarningText>There is no treatments at this day.</S.WarningText>
      )}
    </S.Wrapper>
  );
};
