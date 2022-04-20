import React from 'react';
import creditCardType from 'credit-card-type';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { Radio } from '@app/components/common/Radio/Radio';
import { Option, Select } from '@app/components/common/selects/Select/Select';
import { TopUpPaymentCard } from '../TopUpPaymentCard/TopUpPaymentCard';
import { getPaymentCardTypeIcon } from '@app/utils/utils';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import { TopUpDataProps } from '../../interfaces/interfaces';
import * as S from './TopUpBalanceForm.styles';

export const TopUpBalanceForm: React.FC<TopUpDataProps> = ({ cards, loading, onFinish }) => {
  const { t } = useTranslation();

  return (
    <BaseForm name="topUpBalance" onFinish={onFinish} requiredMark="optional" validateTrigger="onBlur">
      <BaseForm.Item label={t('nft.amount')} name="amount" rules={[{ required: true }]}>
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

      <BaseForm.Item label={t('nft.selectCard')} required>
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

      <BaseForm.Item>
        <Button htmlType="submit" block disabled={loading}>
          {t('nft.topUpBalance')}
        </Button>
      </BaseForm.Item>
    </BaseForm>
  );
};
