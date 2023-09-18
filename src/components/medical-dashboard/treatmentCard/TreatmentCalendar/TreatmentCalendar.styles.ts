import styled from 'styled-components';
import { BaseCalendar } from '@app/components/common/BaseCalendar/BaseCalendar';

interface Event {
  $isPast: boolean;
}

export const Event = styled.div<Event>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.treatmentCalendarEventBoxShadow};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.secondaryBackground};
  color: ${(props) => (props.$isPast ? props.theme.textMain : props.theme.primary)};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Calendar = styled(BaseCalendar)`
  .ant-picker-calendar-header {
    display: none;
  }

  .ant-picker-panel {
    border-top: none;

    & .ant-picker-body {
      padding: 0;
    }
  }

  .ant-picker-date-panel .ant-picker-content th {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.primary};
  }

  .ant-picker-cell {
    &.ant-picker-cell-today {
      .ant-picker-cell-inner {
        &::before {
          border-color: ${({ theme }) => theme.secondary};
        }
      }
    }

    &.ant-picker-cell-selected {
      .ant-picker-cell-inner {
        box-shadow: ${({ theme }) => theme.treatmentCalendarEventBoxShadow};
        background: ${({ theme }) => theme.primary};

        .ant-picker-calendar-date-value,
        ${Event} {
          color: ${({ theme }) => theme.white};
        }

        .ant-picker-calendar-date-content > div {
          background: ${({ theme }) => theme.primary};
        }
      }
    }

    .ant-picker-cell-inner {
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      height: 1.875rem;
      width: 1.875rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }
`;
