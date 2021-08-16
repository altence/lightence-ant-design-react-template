import styled from 'styled-components';
import { Typography } from 'antd';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/lib/calendar/generateCalendar';
import { AppDate } from '../../../../constants/Dates';
import { media } from '../../../../styles/theme';

const AntCalendar = generateCalendar<AppDate>(dayjsGenerateConfig);

interface LegendProps {
  isPrimary?: boolean;
}

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};

  @media only screen and ${media.md} {
    width: calc(45% - 0.25rem);
    margin-right: 0.5rem;
  }
`;

export const Calendar = styled(AntCalendar)`
  & .ant-picker-calendar-header {
    display: none;
  }

  & .ant-picker-panel {
    border-top: none;
  }

  & .ant-picker-date-panel .ant-picker-content th {
    font-weight: 500;
    font-size: 0.75rem;

    color: ${(props) => props.theme.colors.primary};
  }

  & .ant-picker-cell-inner {
    height: 1.43rem;
    width: 1.43rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 0.625rem;
  }
`;

export const Legend = styled.div`
  display: flex;
  padding: 0 1rem;

  @media only screen and ${media.md} {
    padding: 0 0.5rem;
  }
`;

export const LegendItem = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-right: 0.3rem;

  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`;

export const LegendIcon = styled.div<LegendProps>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 4px;
  box-shadow: 0px 5px 15px rgba(0, 89, 171, 0.3);
  flex-shrink: 0;
  margin-right: 0.2rem;

  background-color: ${(props) => (props.isPrimary && props.theme.colors.primary) || props.theme.colors.basic};
`;

export const Text = styled(Typography.Text)`
  font-size: 0.625rem;
  margin-left: 0.3rem;
`;
