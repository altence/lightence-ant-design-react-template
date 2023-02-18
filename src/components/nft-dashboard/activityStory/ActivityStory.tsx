import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityStoryItem } from './ActivityStoryItem/ActivityStoryItem';
import { UserActivity, getUserActivities } from '@app/api/activity.api';
import * as S from './ActivityStory.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const ActivityStory: React.FC = () => {
  const [story, setStory] = useState<UserActivity[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    getUserActivities().then((res) => setStory(res));
  }, []);

  const activityStory = useMemo(
    () =>
      story.map((item, index) => (
        <BaseCol key={index} span={24}>
          <ActivityStoryItem {...item} />
        </BaseCol>
      )),
    [story],
  );

  return (
    <S.Wrapper>
      <S.Title level={2}>{t('nft.activityStory')}</S.Title>
      <S.ActivityRow gutter={[26, 26]}>{activityStory}</S.ActivityRow>
    </S.Wrapper>
  );
};
