import React from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { activityStatuses } from '@app/constants/config/activityStatuses';
import { UserActivity } from '@app/api/activity.api';
import { Dates } from '@app/constants/Dates';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './ActivityStoryItem.styles';

export const ActivityStoryItem: React.FC<UserActivity> = ({ image, title, status, date, usd_value }) => {
  const { t } = useTranslation();

  const currentStatus = activityStatuses.find((configStatus) => configStatus.name === status);

  return (
    <Row gutter={[20, 20]} wrap={false} align="middle">
      <Col>
        <img width={80} height={80} src={image} alt={title} />
      </Col>

      <Col flex={1}>
        <Row justify="space-between" wrap={false}>
          <Col>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <S.Title>{title}</S.Title>
              </Col>

              <Col span={24}>
                <S.Status $color={currentStatus?.color || 'primary'}>{t(currentStatus?.title || '')}</S.Status>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <S.DateText>{Dates.getDate(date).format('L')}</S.DateText>
              </Col>

              <Col span={24}>
                <S.Text>{getCurrencyPrice(formatNumberWithCommas(usd_value), 'USD')}</S.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
