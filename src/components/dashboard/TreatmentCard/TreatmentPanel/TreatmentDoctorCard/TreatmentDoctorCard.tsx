import React, { useState } from 'react';
import { Input, notification } from 'antd';
import { doctorsData } from '../../../../../constants/doctorsData';
import { AppDate, Dates } from '../../../../../constants/Dates';
import * as S from './TreatmentDoctorCard.styles';

const today = Dates.getToday();

interface TreatmentDoctorCardProps {
  date: AppDate;
}

export const TreatmentDoctorCard: React.FC<TreatmentDoctorCardProps> = ({ date }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const treatment = doctorsData.find((tr) => {
    const dbLastVisitDate = Dates.format(tr.lastVisit, 'L');
    const dbNextVisitDate = tr.nextVisit && Dates.format(tr.nextVisit, 'L');

    const selectedDate = Dates.format(date, 'L');

    return dbLastVisitDate === selectedDate || dbNextVisitDate === selectedDate;
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
            <S.Text>
              {(today.isAfter(date) && treatment.lastDiagnosis) || 'Diagnonis would be available after visit.'}
            </S.Text>
          </S.DiagnosisWrapper>
          <S.VisitWrapper>
            <S.Title>Upcoming visits</S.Title>
            <S.Text>
              {(treatment.nextVisit && Dates.format(treatment.nextVisit, 'L')) || 'There is no upcoming visit.'}
            </S.Text>
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
