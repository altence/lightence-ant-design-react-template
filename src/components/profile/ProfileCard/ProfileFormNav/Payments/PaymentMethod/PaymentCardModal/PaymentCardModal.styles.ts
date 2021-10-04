import styled from 'styled-components';
import { Form } from 'antd';
import { PaymentCard } from '../PaymentCard/PaymentCard';

export const PaymentForm = styled(Form)`
  padding-top: 5rem;
`;

export const PayCard = styled(PaymentCard)`
  position: absolute;
  bottom: 85%;
  left: 50%;
  transform: translateX(-50%);
`;
