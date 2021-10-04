import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import { AppDate } from 'constants/Dates';

const DatePicker = generatePicker<AppDate>(dayjsGenerateConfig);

export default DatePicker;
