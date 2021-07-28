import React from 'react';
import styled from 'styled-components';

interface ChartHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const ChartHeader: React.FC<ChartHeaderProps> = ({ title, children }) => {
  return (
    <ChartHeaderWrapper>
      {title}
      {children}
    </ChartHeaderWrapper>
  );
};

const ChartHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
