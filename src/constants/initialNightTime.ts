import { Dates } from './Dates';

const clearDate = Dates.getToday().hour(0).minute(0).second(0).millisecond(0);

export const initialNightTime = [clearDate.hour(22), clearDate.hour(6)];
