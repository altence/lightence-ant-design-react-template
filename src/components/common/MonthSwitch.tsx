import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface MonthSwitchProps {
  width?: string;
}

export const MonthSwitch: React.FC<MonthSwitchProps> = ({ width }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const today = new Date();

  const [currentMonth, setMonth] = useState(today.getMonth());

  const handleClickSwitch = (mode: string) => () => {
    if (mode === 'decrement') {
      setMonth((prev) => prev - 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  return (
    <MonthSwitchWrapper>
      <Button type="text" disabled={currentMonth <= 0} onClick={handleClickSwitch('decrement')}>
        <LeftOutlined />
      </Button>
      <TextStyled width={width}>{`${months[currentMonth]} ${today.getFullYear()}`}</TextStyled>
      <Button type="text" disabled={currentMonth >= 11} onClick={handleClickSwitch('increment')}>
        <RightOutlined />
      </Button>
    </MonthSwitchWrapper>
  );
};

const MonthSwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextStyled = styled(Typography.Text)<MonthSwitchProps>`
  text-align: center;
  width: ${(props) => props.width || '5rem'};
`;
