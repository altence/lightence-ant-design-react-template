import React from 'react';
import { Button, Calendar, Radio, Select } from 'antd';
import styled from 'styled-components';
// import { MonthSwitch } from '../../../components/common/MonthSwitch/MonthSwitch';

export const TreatmentCalendar: React.FC = () => {
  return <CalendarStyled fullscreen={false} />;
};

const CalendarStyled = styled(Calendar)`
  & .ant-picker-calendar-header {
    display: none;
  }

  & .ant-picker-date-panel .ant-picker-content th {
    font-weight: 500;

    color: ${(props) => props.theme.colors.primaryDark};
  }
`;
