import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { months } from '../../constants/months';

const today = new Date();

export const MonthSwitch: React.FC = () => {
  const [currentMonth, setMonth] = useState(today.getMonth());

  const handleDecrease = () => {
    setMonth((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setMonth((prev) => prev + 1);
  };

  return (
    <MonthSwitchWrapper>
      <Button type="text" disabled={currentMonth <= 0} onClick={handleDecrease}>
        <LeftOutlined />
      </Button>
      <TextStyled>{`${months[currentMonth]} ${today.getFullYear()}`}</TextStyled>
      <Button type="text" disabled={currentMonth >= 11} onClick={handleIncrease}>
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

const TextStyled = styled(Typography.Text)`
  text-align: center;
`;
