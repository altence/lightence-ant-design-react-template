import { AppDate } from 'constants/Dates';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

export const DayjsDatePicker = generatePicker<AppDate>(dayjsGenerateConfig);
