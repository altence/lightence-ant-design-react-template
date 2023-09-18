import styled, { useTheme } from 'styled-components';
import { Calendar as AntCalendar, ConfigProvider } from 'antd';
import { remToPixels } from '@app/utils/utils';

export const Calendar = styled((props: React.ComponentProps<typeof AntCalendar>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Calendar: {
            controlHeightSM: remToPixels(theme.heights.xs) / 1.5,
          },
        },
      }}
    >
      <AntCalendar {...props} />
    </ConfigProvider>
  );
})`
  .ant-picker-cell-in-view .ant-picker-calendar-date-value {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
