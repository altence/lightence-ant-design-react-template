import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { Col, Row } from 'antd';
import { NFTCard } from '@app/components/nft-dashboard//NFTCard/NFTCard';
import { activityStatuses } from '@app/constants/config/activityStatuses';
import { Dates } from '@app/constants/Dates';
import { Activity } from '@app/api/activity.api';
import * as S from './RecentActivityItem.styles';

export const RecentActivityItem: React.FC<Activity> = ({ image, title, date, status, owner }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const currentActivity = useMemo(() => activityStatuses.find((dbStatus) => dbStatus.name === status), [status]);

  return (
    <NFTCard>
      <Row gutter={[20, 0]} wrap={false}>
        <Col>
          <S.Img width={80} height={80} preview={false} src={image} alt={title} />
          <S.IconWrapper>{currentActivity?.icon}</S.IconWrapper>
        </Col>

        <Col flex={1}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <Row gutter={[0, 0]}>
                <Col span={24}>
                  <S.Title level={5}>{title}</S.Title>
                </Col>

                <Col span={24}>
                  <S.Text>
                    <S.StatusText $color={theme.colors.main[currentActivity?.color || 'secondary']}>
                      {t(currentActivity?.title || '')}
                    </S.StatusText>{' '}
                    {t('nft.by')} {owner}
                  </S.Text>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row justify="end">
                <Col>
                  <S.DateText>{Dates.getDate(date).format('lll')}</S.DateText>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </NFTCard>
  );
};
