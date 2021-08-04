import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../components/common/Card';
import { advices } from '../../../constants/advices';
import { Advice } from './Advice';
import { AdvicesHeader } from './AdvicesHeader';

export const AdvicesCard: React.FC = () => {
  return (
    <Card $large title={<AdvicesHeader />}>
      <Wrapper>
        {advices.map((advice) => (
          <Advice
            key={advice.id}
            imgUrl={advice.imgUrl}
            title={advice.title}
            date={advice.date}
            description={advice.description}
          />
        ))}
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
