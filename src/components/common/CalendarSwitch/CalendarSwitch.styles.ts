import { media } from '@app/utils/utils';
import styled from 'styled-components';
import { BaseTypography } from '../BaseTypography/BaseTypography';

export const CalendarSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled(BaseTypography.Text)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  & > * {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
`;
