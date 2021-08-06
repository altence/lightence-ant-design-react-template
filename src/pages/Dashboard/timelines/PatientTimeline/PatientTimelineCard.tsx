import React from 'react';
import { Card } from '../../../../components/common/Card/Card';
import { patientTimeline } from '../../../../constants/patientTimeline';
import { Diagram } from './Diagram';
import { PatientTimeline } from './PatientTimeline';
import * as S from './PatientTimelineCard.styles';

export const PatientTimelineCard: React.FC = () => {
  return (
    <Card title="Patient timeline">
      <S.Wrapper>
        <Diagram />
        <S.PatientTimelineWrapper>
          {patientTimeline.map((pt) => (
            <PatientTimeline
              key={pt.id}
              title={pt.title}
              date={pt.date}
              description={pt.description}
              isActive={pt.isActive}
            />
          ))}
        </S.PatientTimelineWrapper>
      </S.Wrapper>
    </Card>
  );
};
