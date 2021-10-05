export interface CreditCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  focused: any;
  background: string;
}

export interface CardInputProps {
  disabled: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
