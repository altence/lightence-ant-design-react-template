import styled from 'styled-components';
import { RadioGroup } from '@app/components/common/Radio/Radio';
import { Typography } from 'antd';
import { FONT_SIZE } from '@app/styles/themes/constants';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled(Typography.Text)`
  color: var(--text-nft-light-color);
  font-size: ${FONT_SIZE.xs};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    width: calc(100% / 3 - 0.2rem);
    margin: 0.2rem 0;
  }
`;

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
