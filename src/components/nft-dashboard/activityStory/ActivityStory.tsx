import React, { useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { ActivityStoryItem } from './ActivityStoryItem/ActivityStoryItem';
import { UserActivity, getUserActivities } from '@app/api/activity.api';
import * as S from './ActivityStory.styles';

export const ActivityStory: React.FC = () => {
  const [story, setStory] = useState<UserActivity[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    getUserActivities().then((res) => setStory(res));
  }, []);

  const activityStory = useMemo(
    () =>
      story.map((item, index) => (
        <Col key={index} span={24}>
          <ActivityStoryItem {...item} />
        </Col>
      )),
    [story],
  );

  return (
    <Row gutter={[20, 20]} id="activity-story">
      <Col span={24}>
        <S.Title>{t('nft.activityStory')}</S.Title>
      </Col>

      <Col span={24}>
        <Row gutter={[25, 25]}>{activityStory}</Row>
      </Col>
    </Row>
  );
};
