import styled from 'styled-components';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/lib/calendar/generateCalendar';
import { AppDate } from '../../../../constants/Dates';

const AntCalendar = generateCalendar<AppDate>(dayjsGenerateConfig);

interface Event {
  $isPast: boolean;
}

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main.mainBackground};

  box-shadow: ${(props) => props.theme.boxShadow.main};
`;

export const Event = styled.div<Event>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 89, 171, 0.3);

  background: ${(props) => props.theme.colors.main.secondaryBackground};

  ${(props) =>
    props.$isPast ? `color: ${props.theme.colors.main.light}` : `color: ${props.theme.colors.main.primary}`};

  border-radius: ${(props) => props.theme.border.radius};
`;

export const Calendar = styled(AntCalendar)`
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
    font-weight: ${(props) => props.theme.commonFontWeight.medium};

    font-size: ${(props) => props.theme.commonFontSizes.xs};

    color: ${(props) => props.theme.colors.main.primary};
  }

  .ant-picker-cell {
    &.ant-picker-cell-today {
      .ant-picker-cell-inner {
        &::before {
          border-color: ${(props) => props.theme.colors.main.secondary};
        }
      }
    }

    &.ant-picker-cell-selected {
      .ant-picker-cell-inner {
        box-shadow: 0 5px 15px rgba(0, 89, 171, 0.3);

        background: ${(props) => props.theme.colors.main.primary};

        .ant-picker-calendar-date-content > div {
          background: ${(props) => props.theme.colors.main.primary};
        }
      }

      ${Event} {
        color: ${(props) => props.theme.commonColors.white};
      }
    }

    .ant-picker-cell-inner {
      font-weight: ${(props) => props.theme.commonFontWeight.medium};
      font-size: ${(props) => props.theme.commonFontSizes.xs};
      height: 1.875rem;
      width: 1.875rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }
`;
