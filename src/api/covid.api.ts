import axios from 'axios';

interface Data {
  [key: string]: number;
}

export interface CoronaData {
  cases: Data;
  deaths: Data;
  recovered: Data;
}

export const getCovidData = async (): Promise<CoronaData | undefined> => {
  try {
    const response = await axios.get<CoronaData>('https://disease.sh/v3/covid-19/historical/all?lastdays=all');

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(e);
  }
};
