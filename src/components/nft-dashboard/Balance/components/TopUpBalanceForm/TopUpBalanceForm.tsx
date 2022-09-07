import React from 'react';
import creditCardType from 'credit-card-type';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { Radio } from '@app/components/common/Radio/Radio';
import { Option, Select } from '@app/components/common/selects/Select/Select';
import { TopUpPaymentCard } from '../TopUpPaymentCard/TopUpPaymentCard';
import { getCurrencyPrice, getPaymentCardTypeIcon } from '@app/utils/utils';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import { TopUpDataProps } from '../../interfaces/interfaces';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import * as S from './TopUpBalanceForm.styles';

const usdAmounts: (string | number)[] = [5, 10, 15, 20, 25, 50];
const btcAmounts: (string | number)[] = [0.001, 0.01, 0.1, 1, 10, 100];
const ethAmounts: (string | number)[] = [0.01, 0.1, 0.5, 1, 10, 100];

interface CurrencyValues {
  currency: CurrencyTypeEnum;
}

export const TopUpBalanceForm: React.FC<TopUpDataProps> = ({ cards, loading, onFinish }) => {
  const { t } = useTranslation();
  const [form] = BaseForm.useForm();

  return (
    <BaseForm form={form} name="topUpBalance" onFinish={onFinish} requiredMark="optional" validateTrigger="onBlur">
      <S.ContentWrapper>
        <S.BlockWrapper>
          <S.Label> {t('nft.amount')}</S.Label>

          <NFTCard>
            <BaseForm.Item name="amount" rules={[{ required: true }]} initialValue={0}>
              <InputNumber
                $block
                type="number"
                addonBefore={
                  <BaseForm.Item name="currency" noStyle initialValue="USD">
                    <Select>
                      {(Object.keys(CurrencyTypeEnum) as Array<keyof typeof CurrencyTypeEnum>).map((type) => (
                        <Option key={type}>{type}</Option>
                      ))}
                    </Select>
                  </BaseForm.Item>
                }
              />
            </BaseForm.Item>

            <BaseForm.Item
              shouldUpdate={(prev, cur) => (prev as CurrencyValues).currency !== (cur as CurrencyValues).currency}
              noStyle
            >
              {({ getFieldValue }) => {
                const currencyFieldValue = getFieldValue('currency');
                const amountFieldValue = getFieldValue('amount');

                let array = usdAmounts;

                switch (currencyFieldValue) {
                  case 'USD': {
                    array = usdAmounts;
                    break;
                  }

                  case 'BTC': {
                    array = btcAmounts;
                    break;
                  }

                  case 'ETH': {
                    array = ethAmounts;
                    break;
                  }

                  default: {
                    array = usdAmounts;
                    break;
                  }
                }

                return (
                  <S.ButtonsWrapper>
                    {array.map((amount) => (
                      <Button
                        key={amount}
                        type="default"
                        onClick={() => form.setFieldsValue({ amount: amountFieldValue + amount })}
                      >
                        + {getCurrencyPrice(amount, currencyFieldValue, false)}
                      </Button>
                    ))}
                  </S.ButtonsWrapper>
                );
              }}
            </BaseForm.Item>
          </NFTCard>
        </S.BlockWrapper>

        <S.BlockWrapper>
          <S.Label>{t('nft.selectCard')}</S.Label>

          <NFTCard>
            <BaseForm.Item required noStyle>
              {cards.map((card) => {
                const paymentCard = creditCardType(card.number);

                return (
                  <BaseForm.Item name="card" key={card.number} rules={[{ required: true }]}>
                    <S.PaymentRadio>
                      <Radio value={card.number}>
                        <TopUpPaymentCard
                          img={getPaymentCardTypeIcon(paymentCard[0].type)}
                          type={paymentCard[0].niceType}
                          number={card.number}
                        />
                      </Radio>
                    </S.PaymentRadio>
                  </BaseForm.Item>
                );
              })}
            </BaseForm.Item>
          </NFTCard>
        </S.BlockWrapper>

        <BaseForm.Item>
          <Button type="primary" htmlType="submit" block disabled={loading}>
            {t('nft.topUpBalance')}
          </Button>
        </BaseForm.Item>
      </S.ContentWrapper>
    </BaseForm>
  );
};
