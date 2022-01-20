import React from 'react';
import styled from 'styled-components';

export const Loading: React.FC = () => {
  return (
    <SpinnerContainer>
      <img src={`${process.env.PUBLIC_URL}/spinners/spinner.svg`} alt="Loading" />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
