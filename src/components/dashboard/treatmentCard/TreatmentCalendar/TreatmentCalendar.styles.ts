import styled, { css } from 'styled-components';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/lib/calendar/generateCalendar';
import { AppDate } from '../../../../constants/Dates';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

const AntCalendar = generateCalendar<AppDate>(dayjsGenerateConfig);

interface Event {
  $isPast: boolean;
}

export const Wrapper = styled.div`
  background-color: var(--background-color);

  box-shadow: var(--box-shadow);
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

  font-weight: ${FONT_WEIGHT.bold};

  background: var(--secondary-background-color);

  ${(props) =>
    props.$isPast
      ? css`
          color: var(--text-main-color);
        `
      : css`
          color: var(--primary-color);
        `};

  border-radius: ${BORDER_RADIUS};
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
    font-weight: ${FONT_WEIGHT.medium};

    font-size: ${FONT_SIZE.xs};

    color: var(--primary-color);
  }

  .ant-picker-cell {
    &.ant-picker-cell-today {
      .ant-picker-cell-inner {
        &::before {
          border-color: var(--secondary-color);
        }
      }
    }

    &.ant-picker-cell-selected {
      .ant-picker-cell-inner {
        box-shadow: 0 5px 15px rgba(0, 89, 171, 0.3);

        background: var(--primary-color);

        .ant-picker-calendar-date-value,
        ${Event} {
          color: var(--white);
        }

        .ant-picker-calendar-date-content > div {
          background: var(--primary-color);
        }
      }
    }

    .ant-picker-cell-inner {
      font-weight: ${FONT_WEIGHT.medium};
      font-size: ${FONT_SIZE.xs};
      height: 1.875rem;
      width: 1.875rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }
`;
