import React from 'react';
import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button';
import { FilterIcon } from '@app/components/common/icons/FilterIcon';
import * as S from './RecentActivityHeader.styles';

export const RecentActivityHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.WrapperRow justify="space-between">
      <Col>
        <S.Title level={5}>{t('nft.recentActivity')}</S.Title>
      </Col>

      <Col>
        <Button noStyle type="text" icon={<FilterIcon />} />
      </Col>
    </S.WrapperRow>
  );
};
