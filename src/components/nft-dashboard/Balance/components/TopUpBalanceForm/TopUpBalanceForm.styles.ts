import styled from 'styled-components';
import { RadioGroup } from '@app/components/common/Radio/Radio';

export const PaymentRadio = styled(RadioGroup)`
  display: block;

  .ant-radio-wrapper {
    display: flex;
    margin-right: 0;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 2rem;

    &::after {
      display: none;
    }

    .ant-radio + span {
      padding: 0;
    }
  }
`;
