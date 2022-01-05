import { notification } from 'antd';
import axios from 'axios';

export interface CoronaData {
  updated_at: string;
  date: string;
  deaths: number;
  confirmed: number;
  recovered: number;
  new_confirmed: number;
  new_recovered: number;
  new_deaths: number;
  active: number;
}

export const getCovidData = async (): Promise<{ data: CoronaData[] } | undefined> => {
  try {
    const response = await axios.get<{ data: CoronaData[] }>('https://corona-api.com/timeline');

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    notification.error({ message: e?.message });
  }
};
