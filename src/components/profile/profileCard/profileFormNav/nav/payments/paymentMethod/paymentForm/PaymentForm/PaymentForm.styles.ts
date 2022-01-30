import styled from 'styled-components';
import { PaymentCard } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/PaymentCard/PaymentCard';

export const PayCard = styled(PaymentCard)`
  position: absolute;
  top: -5rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const FormItemsWrapper = styled.div`
  padding-top: 7.5rem;
`;
