import styled from 'styled-components';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import { AppDate } from 'constants/Dates';

const DatePicker = generatePicker<AppDate>(dayjsGenerateConfig);

export const BirthdayPicker = styled(DatePicker)`
  width: 100%;
`;
