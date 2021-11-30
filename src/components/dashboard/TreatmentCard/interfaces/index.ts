import { AppDate } from 'constants/Dates';

export interface TreatmentProps {
  date: AppDate;
  setDate: (state: AppDate) => void;
  handleIncrease: () => void;
  handleDecrease: () => void;
}
