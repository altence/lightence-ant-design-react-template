import React from 'react';
import { Col, Image, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { activityStatuses } from '@app/constants/config/activityStatuses';
import { UserActivity } from '@app/api/activity.api';
import { Dates } from '@app/constants/Dates';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './ActivityStoryItem.styles';

export const ActivityStoryItem: React.FC<UserActivity> = ({ image, title, status, date, price, currency }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const currentStatus = activityStatuses.find((configStatus) => configStatus.name === status);

  return (
    <Row gutter={[20, 20]} wrap={false} align="middle">
      <Col>
        <Image preview={false} width={80} src={image} alt={title} />
      </Col>

      <Col flex={1}>
        <Row justify="space-between" wrap={false}>
          <Col>
            <Row gutter={[15, 15]}>
              <Col span={24}>
                <S.Title>{title}</S.Title>
              </Col>

              <Col span={24}>
                <S.Status $color={theme.colors.main[currentStatus?.color || 'primary']}>
                  {t(currentStatus?.title || '')}
                </S.Status>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Row gutter={[15, 15]}>
              <Col span={24}>
                <S.Title>{Dates.getDate(date).format('L')}</S.Title>
              </Col>

              <Col span={24}>
                <S.Text>{getCurrencyPrice(formatNumberWithCommas(price), currency)}</S.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
