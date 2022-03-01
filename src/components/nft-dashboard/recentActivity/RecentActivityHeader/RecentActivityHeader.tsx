import React, { useState } from 'react';
import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button';
import { FilterIcon } from '@app/components/common/icons/FilterIcon';
import { Modal } from '@app/components/common/Modal/Modal';
import { RecentActivityFilter } from '@app/components/nft-dashboard/recentActivity/recentActivityFilters/RecentActivityFilter';
import { RecentActivityFilterState } from '@app/components/nft-dashboard/recentActivity/RecentActivity';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './RecentActivityHeader.styles';

interface RecentActivityHeaderProps {
  filters: RecentActivityFilterState;
  setFilters: (func: (state: RecentActivityFilterState) => RecentActivityFilterState) => void;
}

export const RecentActivityHeader: React.FC<RecentActivityHeaderProps> = ({ filters, setFilters }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const { t } = useTranslation();
  const { isDesktop } = useResponsive();

  return (
    <>
      <S.WrapperRow justify="space-between">
        <Col>
          <S.Title level={5}>{t('nft.recentActivity')}</S.Title>
        </Col>

        {!isDesktop && (
          <Col>
            <Button noStyle type="text" icon={<FilterIcon />} onClick={() => setModalVisible(true)} />
          </Col>
        )}
      </S.WrapperRow>
      {!isDesktop && (
        <Modal visible={isModalVisible} onCancel={() => setModalVisible(false)} footer={null}>
          <RecentActivityFilter filters={filters} setFilters={setFilters} />
        </Modal>
      )}
    </>
  );
};
