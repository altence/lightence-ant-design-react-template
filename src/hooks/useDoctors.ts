import { useEffect } from 'react';
import { doGetDoctors } from '@app/store/slices/doctorsSlice';
import { useAppDispatch } from './reduxHooks';

export const useDoctors = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDoctors());
  }, [dispatch]);
};
