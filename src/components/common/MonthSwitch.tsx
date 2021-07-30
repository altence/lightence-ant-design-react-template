import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { dates } from '../../constants/dates';

const today = dates.getToday();
const months = dates.getMonths();

interface MonthSwitchProps {
  width?: string;
}

export const MonthSwitch: React.FC<MonthSwitchProps> = ({ width }) => {
  const [currentMonth, setMonth] = useState(today.getMonth());

  const handleDecrease = () => {
    setMonth((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setMonth((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <Button type="text" disabled={currentMonth <= 0} onClick={handleDecrease}>
        <LeftOutlined />
      </Button>
      <Text width={width}>{`${months[currentMonth]} ${today.getFullYear()}`}</Text>
      <Button type="text" disabled={currentMonth >= 11} onClick={handleIncrease}>
        <RightOutlined />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span<MonthSwitchProps>`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  width: ${(props) => props.width || '6rem'};
  margin: 0 1.25rem;
  font-size: 0.75rem;
`;
