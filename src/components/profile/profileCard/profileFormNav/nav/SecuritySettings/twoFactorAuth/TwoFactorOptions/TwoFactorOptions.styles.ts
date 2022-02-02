import styled from 'styled-components';
import { Radio } from '@app/components/common/Radio/Radio';

interface RadioBtnProps {
  $isActive: boolean;
}

export const RadioBtn = styled(Radio)<RadioBtnProps>`
  transition: all 0.5s ease;

  ${(props) => !props.$isActive && 'opacity: 0.5'};
`;
