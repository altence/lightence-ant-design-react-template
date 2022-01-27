import { httpApi } from './http.api';
import './mocks/doctors.api.mock';

export interface Doctor {
  id: number;
  name: string;
  specifity: number;
  rating: number;
  gps: {
    latitude: number;
    longitude: number;
  };
  imgUrl: string;
  phone: string;
  address: string;
}

export const getDoctors = (): Promise<Doctor[]> => httpApi.get('doctors').then(({ data }) => data);
