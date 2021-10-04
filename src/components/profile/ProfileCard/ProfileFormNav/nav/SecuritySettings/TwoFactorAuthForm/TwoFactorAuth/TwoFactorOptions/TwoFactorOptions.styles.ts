import styled from 'styled-components';
import { Radio } from 'antd';

interface RadioBtnProps {
  isActive: boolean;
}

export const RadioBtn = styled(Radio)<RadioBtnProps>`
  margin-right: 0;
  width: 100%;
  transition: all 0.3s ease;

  ${(props) => !props.isActive && 'opacity: 0.5'};

  & > span:last-of-type {
    flex-grow: 1;
  }
`;
