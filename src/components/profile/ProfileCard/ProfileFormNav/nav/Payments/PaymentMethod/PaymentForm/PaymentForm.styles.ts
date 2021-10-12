import styled from 'styled-components';
import { PaymentCard } from '../PaymentCard/PaymentCard';
import { ButtonsGroup } from 'components/common/Form/ButtonsGroup/ButtonsGroup';

export const PayCard = styled(PaymentCard)`
  position: absolute;
  top: -5rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const FormItemsWrapper = styled.div`
  padding-top: 7.5rem;
`;

export const PaymentButtons = styled(ButtonsGroup)`
  @media only screen and ${(props) => props.theme.media.md} {
    width: unset;
  }
`;
