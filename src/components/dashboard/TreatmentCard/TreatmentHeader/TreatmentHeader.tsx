import React from 'react';
import styled from 'styled-components';
// import { MonthSwitch } from '../../../components/common/MonthSwitch/MonthSwitch';

export const TreatmentHeader: React.FC = () => {
  return (
    <Wrapper>
      Treatment
      {/* <MonthSwitch /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
