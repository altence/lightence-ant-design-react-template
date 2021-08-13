import React, { useState } from 'react';
import { Input, notification } from 'antd';
import { treatmentData } from '../../../../../constants/treatmentData';
import { Dates, AppDate } from '../../../../../constants/Dates';
import * as S from './TreatmentDoctorCard.styles';

interface TreatmentDoctorCardProps {
  date: AppDate;
}

export const TreatmentDoctorCard: React.FC<TreatmentDoctorCardProps> = ({ date }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const treatment = treatmentData.find((tr) => {
    const dbDate = Dates.format(tr.date, 'L');
    const selectedDate = Dates.format(date, 'L');

    return dbDate === selectedDate;
  });

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
            <S.Avatar src={treatment?.doctorImgUrl} shape="square" />
            <S.InfoWrapper>
              <S.InfoItem>
                <S.Title>Doctor</S.Title>
                <S.Text>{treatment.doctorName}</S.Text>
              </S.InfoItem>
              <S.InfoItem>
                <S.Title>Speciality</S.Title>
                <S.Text>{treatment.doctorSpeciality}</S.Text>
              </S.InfoItem>
              <S.InfoItem>
                <S.Rating disabled defaultValue={treatment.doctorRating} />
                <S.Text>{treatment.doctorRating}</S.Text>
              </S.InfoItem>
            </S.InfoWrapper>
          </S.ProfileWrapper>
          <S.DiagnosisWrapper>
            <S.Title>Diagnosis</S.Title>
            <S.Text>{treatment.diagnosis}</S.Text>
          </S.DiagnosisWrapper>
          <S.VisitWrapper>
            <S.Title>Upcoming visits</S.Title>
            <S.Text>{Dates.format(treatment.date, 'L')}</S.Text>
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
