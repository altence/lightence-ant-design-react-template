import React from 'react';
import { useTranslation } from 'react-i18next';
import { activityStatuses } from '@app/constants/config/activityStatuses';
import { UserActivity } from '@app/api/activity.api';
import { Dates } from '@app/constants/Dates';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import * as S from './ActivityStoryItem.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const ActivityStoryItem: React.FC<UserActivity> = ({ image, title, status, date, usd_value }) => {
  const { t } = useTranslation();

  const currentStatus = activityStatuses.find((configStatus) => configStatus.name === status);

  return (
    <BaseRow gutter={[20, 20]} wrap={false} align="middle">
      <BaseCol>
        <img width={80} height={80} src={image} alt={title} />
      </BaseCol>

      <BaseCol flex={1}>
        <BaseRow justify="space-between" wrap={false}>
          <BaseCol>
            <BaseRow gutter={[16, 16]}>
              <BaseCol span={24}>
                <S.Title>{title}</S.Title>
              </BaseCol>

              <BaseCol span={24}>
                <S.Status $color={currentStatus?.color || 'primary'}>{t(currentStatus?.title || '')}</S.Status>
              </BaseCol>
            </BaseRow>
          </BaseCol>

          <BaseCol span={8}>
            <BaseRow gutter={[16, 16]}>
              <BaseCol span={24}>
                <S.DateText>{Dates.getDate(date).format('L')}</S.DateText>
              </BaseCol>

              <BaseCol span={24}>
                <S.Text>{getCurrencyPrice(formatNumberWithCommas(usd_value), CurrencyTypeEnum.USD)}</S.Text>
              </BaseCol>
            </BaseRow>
          </BaseCol>
        </BaseRow>
      </BaseCol>
    </BaseRow>
  );
};
