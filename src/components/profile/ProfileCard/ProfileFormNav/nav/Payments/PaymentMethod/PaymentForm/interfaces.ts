export interface CreditCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  focused: any;
  background: string;
  isEdit: boolean;
}

export interface CardInputProps {
  disabled: boolean;
  handleInputFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
