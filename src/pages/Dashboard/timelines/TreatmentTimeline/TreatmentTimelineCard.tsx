import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../../components/common/Card';
import { treatmentTimeline } from '../../../../constants/treatmentTimeline';
import { Diagram } from './Diagram';
import { Treatment } from './Treatment';

export const TreatmentTimelineCard: React.FC = () => {
  return (
    <Card title="Patient timeline">
      <Wrapper>
        <Diagram />
        <Treatments>
          {treatmentTimeline.map((tr) => (
            <Treatment
              key={tr.id}
              title={tr.title}
              date={tr.date}
              description={tr.description}
              isActive={tr.isActive}
            />
          ))}
        </Treatments>
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Treatments = styled.div`
  margin-left: 1.5rem;
`;
